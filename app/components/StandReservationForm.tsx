
"use client";
import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { db, storage } from '../../lib/firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Plus, Upload } from 'lucide-react';

// Define the structure for form data and errors
interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  standType: string;
  options: string[];
  additionalBadges: number;
  comments: string;
  photoUrl: string;
  acceptedTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  standType: 'Stand Standard - 3x3',
  options: [],
  additionalBadges: 0,
  comments: '',
  photoUrl: '',
  acceptedTerms: false,
};

const StandReservationForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.companyName) newErrors.companyName = "Le nom de l'entreprise est requis.";
    if (!formData.contactPerson) newErrors.contactPerson = 'Le nom du contact est requis.';
    if (!formData.email) {
      newErrors.email = 'Une adresse e-mail est requise.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'adresse e-mail est invalide.';
    }
    if (!formData.phone) newErrors.phone = 'Un numéro de téléphone est requis.';
    if (!formData.acceptedTerms) newErrors.acceptedTerms = 'Vous devez accepter les conditions.';
    return newErrors;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleOptionChange = (option: string) => {
    setFormData(prev => {
      const newOptions = prev.options.includes(option)
        ? prev.options.filter(o => o !== option)
        : [...prev.options, option];
      return { ...prev, options: newOptions };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        let photoUrl = '';
        if (imageFile) {
          const storageRef = ref(storage, `stand_reservations/${Date.now()}_${imageFile.name}`);
          const uploadResult = await uploadBytes(storageRef, imageFile);
          photoUrl = await getDownloadURL(uploadResult.ref);
        }

        const finalFormData = { ...formData, photoUrl };
        await addDoc(collection(db, "standReservations"), finalFormData);
        
        setIsSuccess(true);
        setFormData(initialFormData);
        setImageFile(null);
        setImagePreview(null);
      } catch (error) {
        console.error("Error adding document: ", error);
        alert('La réservation a échoué. Veuillez vérifier vos autorisations Firestore.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5F0030] hover:bg-[#4c0026] text-white font-bold py-3 px-8 rounded-full">Réserver un Stand</Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl h-auto h-4/5 rounded-xl shadow-2xl grid md:grid-cols-5 overflow-hidden p-0 bg-[#FFFBEB]">
        
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6 p-8 bg-cover bg-center" style={{ backgroundImage: `url('/images/homepage.jpg')`}}>
          <div className='p-6 backdrop-blur-sm bg-black/30 rounded-lg'>
            <h1 className="text-4xl font-bold text-white mb-6">Formulaire de réservation</h1>
            
            <div className="space-y-2 text-white bg-black/40 p-4 rounded-md">
              <h2 className="font-bold text-lg">Informations pratiques</h2>
              <p className="text-sm"><strong>Lieu :</strong> [adresse complète] — Accès livraison, parking exposants, restauration sur place.</p>
              <p className="text-sm"><strong>Montage :</strong> à partir de 7h le jour d\'ouverture.</p>
            </div>

            <div className="space-y-2 text-white bg-black/40 p-4 rounded-md mt-4">
              <h2 className="font-bold text-lg">Règlement & conditions</h2>
              <p className="text-sm">Réservation confirmée après acompte de XX%. Annulation possible jusqu\'à [date] avec remboursement partiel. Assurance du matériel à la charge de l\'exposant.</p>
            </div>

            <div className="mt-4 bg-[#5F0030]/80 p-4 rounded-md text-white">
                <h2 className="font-bold text-lg">Autres services inclus</h2>
                <ul className='list-disc list-inside text-sm'>
                  <li>2 badges exposants</li>
                  <li>Mention dans le catalogue</li>
                  <li>Accès conférences et ateliers</li>
                  <li>Sécurité et nettoyage</li>
                </ul>
            </div>
          </div>
        </div>

        {/* Right Column - The Form */}
        <div className="md:col-span-3 p-8 overflow-y-auto">
          {isSuccess && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                  <p className="font-bold">Succès!</p>
                  <p>Votre demande de réservation a bien été envoyée.</p>
              </div>
          )}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                  <h3 className="font-bold text-lg text-[#5F0030]">Vos informations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className='space-y-4'>
                          <input type="text" name="companyName" placeholder="Nom de l'entreprise" value={formData.companyName} onChange={handleChange} className={`w-full p-3 border rounded-md ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}/>
                          <input type="text" name="contactPerson" placeholder="Nom et prenom" value={formData.contactPerson} onChange={handleChange} className={`w-full p-3 border rounded-md ${errors.contactPerson ? 'border-red-500' : 'border-gray-300'}`}/>
                      </div>
                      <div 
                        className="w-full aspect-square bg-gray-100 rounded-md border-2 border-dashed flex items-center justify-center text-gray-400 cursor-pointer relative"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                        {imagePreview ? (
                          <img src={imagePreview} alt="Aperçu" className="w-full h-full object-cover rounded-md"/>
                        ) : (
                          <div className='text-center'>
                            <Upload size={40}/>
                            <p className='text-xs mt-2'>Ajoutez une photo de vos produits ou de votre activité</p>
                          </div>
                        )}
                         <button type="button" className="absolute top-2 right-2 bg-[#5F0030] text-white rounded-full p-1 w-8 h-8 flex items-center justify-center"><Plus size={16}/></button>
                      </div>
                  </div>
              </div>

              <div>
                  <h3 className="font-bold text-lg text-[#5F0030]">Contact details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}/>
                      <input type="text" name="phone" placeholder="Numero de Telephone" value={formData.phone} onChange={handleChange} className={`w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}/>
                  </div>
              </div>

              <div>
                  <h3 className="font-bold text-lg text-[#5F0030]">Type de Stand</h3>
                  <div className='flex items-center gap-4 mt-2'>
                    <select name="standType" value={formData.standType} onChange={handleChange} className="w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm">
                        <option>Stand Standard - 3x3</option>
                        <option>Stand Medium - 4x4</option>
                        <option>Stand Large - 5x5</option>
                    </select>
                    <p className='text-sm text-gray-600'>You benefit from different advantages depending on the stand you rent.</p>
                  </div>
              </div>

              <div>
                  <h3 className="font-bold text-lg text-[#5F0030]">Options supplementaires</h3>
                  <p className='text-sm text-gray-500'>requerir des avantages supplementaires.</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                      {['Ecran TV', 'Decoration personnalisee', 'Badges additionnels'].map(opt => (
                          <label key={opt} className={`flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer ${formData.options.includes(opt) ? 'bg-[#5F0030] text-white' : 'bg-white'}`}>
                              <input type="checkbox" checked={formData.options.includes(opt)} onChange={() => handleOptionChange(opt)} className="hidden" />
                              {opt}
                          </label>
                      ))}
                  </div>
              </div>

               <div>
                  <label htmlFor="additionalBadges" className="block text-sm font-medium text-gray-700">Nombre de badges supplémentaires</label>
                  <input type="number" name="additionalBadges" min="0" value={formData.additionalBadges} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md mt-1"/>
              </div>

              <div>
                  <h3 className="font-bold text-lg text-[#5F0030]">Commentaires / Besoins particuliers</h3>
                  <textarea name="comments" rows={4} value={formData.comments} onChange={handleChange} placeholder="Besoin d'un acces charger, d'une table supplementaire" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm"></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="acceptedTerms" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} className={`h-4 w-4 rounded ${errors.acceptedTerms ? 'border-red-500' : 'border-gray-300'}`}/>
                <label htmlFor="acceptedTerms" className="text-sm text-gray-600">J'accepte les conditions de réservation et la politique d'annulation.</label>
              </div>

              <div className="text-right pt-2">
                  <Button type="submit" disabled={isSubmitting || !formData.acceptedTerms} className="bg-[#5F0030] hover:bg-[#4c0026] text-white font-bold py-3 px-8 rounded-lg disabled:bg-gray-400">
                      {isSubmitting ? 'Envoi en cours...' : 'Reserver maintenant'}
                  </Button>
              </div>
               <p className='text-xs text-gray-600'><strong>Procédure :</strong> Après envoi, vous recevrez un e-mail de confirmation avec le montant de l\'acompte et un lien de paiement. Le solde devra être réglé avant le [date limite].</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StandReservationForm;
