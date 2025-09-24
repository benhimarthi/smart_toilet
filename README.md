Toilet Tech Website - Version TypeScript Modulaire
Un site web moderne et responsive pour l'événement "The World of Toilet Technology", construit avec Next.js 14, TypeScript, React 18 et Tailwind CSS.

🚀 Installation
Prérequis
Node.js (version 18 ou supérieure)
npm ou yarn
TypeScript (installé automatiquement)
Étapes d'installation
Cloner ou créer le projet
bash
npx create-next-app@latest toilet-tech-website --typescript --tailwind --eslint --app
cd toilet-tech-website
Installer les dépendances supplémentaires
bash
npm install lucide-react
Créer la structure des dossiers
src/
├── types/
│   └── index.ts
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── LastEventsSection.tsx
│   ├── SpeakersSection.tsx
│   ├── SponsorsSection.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts
└── App.tsx
Copier les fichiers TypeScript
Copiez le fichier types/index.ts pour les définitions de types
Copiez chaque composant .tsx dans le dossier components/
Ajoutez le fichier content.ts dans le dossier data/
Copiez le code principal dans App.tsx
Configurer les alias de chemins Ajoutez le fichier tsconfig.json avec la configuration des paths
Démarrer le serveur de développement
bash
npm run dev
📁 Structure du Projet TypeScript
Types (types/index.ts)
typescript
- Language: 'EN' | 'FR'
- ContentData: Structure complète du contenu
- Event, Speaker, Sponsor: Interfaces des entités
- Props: Interfaces pour chaque composant
Composants TypeScript (.tsx)
Header.tsx : Navigation typée avec props d'interface
HeroSection.tsx : Section d'accueil avec typage strict
AboutSection.tsx : À propos avec interface de statistiques
LastEventsSection.tsx : Carrousel avec types Event[]
SpeakersSection.tsx : Carrousel avec types Speaker[]
SponsorsSection.tsx : Grille avec types Sponsor[]
Footer.tsx : Pied de page avec interfaces sociales
Données Typées (data/content.ts)
ContentData interface complète
Contenu multilingue entièrement typé
IntelliSense et autocomplétion
✨ Avantages TypeScript
🔒 Type Safety
Détection d'erreurs à la compilation
Props typées pour chaque composant
Interfaces strictes pour les données
🧠 IntelliSense
Autocomplétion intelligente
Documentation automatique
Refactoring sécurisé
🛡️ Robustesse
Prévention des erreurs runtime
Validation des props au build
Code plus maintenable
🎯 Fonctionnalités TypeScript
typescript
// Props typées
interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  content: ContentData;
}

// State typé
const [language, setLanguage] = useState<Language>('EN');
const [currentIndex, setCurrentIndex] = useState<number>(0);

// Arrays typés
const speakers: Speaker[] = [...];
const events: Event[] = [...];
🛠️ Scripts Disponibles
bash
# Développement avec TypeScript
npm run dev

# Vérification des types
npm run type-check

# Build de production
npm run build

# Démarrer la version de production
npm start

# Linter avec règles TypeScript
npm run lint
🔧 Configuration TypeScript
tsconfig.json
Strict mode activé
Path mapping pour les imports
JSX preserve pour Next.js
ES modules support
Alias de chemins
typescript
"@/*": ["./src/*"]
"@/components/*": ["./src/components/*"]
"@/data/*": ["./src/data/*"]
"@/types": ["./src/types/index.ts"]
📝 Exemples d'Usage TypeScript
Composant Typé
typescript
const MyComponent: React.FC<MyComponentProps> = ({ 
  content, 
  language 
}) => {
  const t = content[language]; // Typé automatiquement
  return <div>{t.title}</div>; // IntelliSense activé
};
Hooks Typés
typescript
const [speakers, setSpeakers] = useState<Speaker[]>([]);
const [currentIndex, setCurrentIndex] = useState<number>(0);
Event Handlers Typés
typescript
const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
  // Event typé automatiquement
}, []);
🎨 Props des Composants
Tous les composants reçoivent :
typescript
interface BaseProps {
  content: ContentData;    // Données multilingues typées
  language: Language;      // 'EN' | 'FR'
}
Header spécifique :
typescript
interface HeaderProps extends BaseProps {
  setLanguage: (language: Language) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}
🚨 Bonnes Pratiques TypeScript
✅ À faire
Toujours typer les props des composants
Utiliser des interfaces plutôt que des types pour les objets
Typer les états React avec useState<Type>()
Utiliser des enums pour les constantes
❌ À éviter
Utiliser any (préférer unknown)
Ignorer les erreurs TypeScript avec @ts-ignore
Props non typées
États non typés
🔍 Débogage TypeScript
bash
# Vérifier les types sans build
npm run type-check

# Voir les erreurs détaillées
npx tsc --noEmit --pretty

# Mode watch pour les types
npx tsc --noEmit --watch
Cette version TypeScript vous offre une sécurité de type complète, une meilleure expérience de développement et une maintenabilité accrue ! 🎯

