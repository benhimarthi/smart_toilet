
import React from 'react';

const About = () => {
  return (
    <div className="w-full text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">À propos de notre Événement</h1>
        <p className="text-xl mt-2">Innovation, écologie et bien-être avec les toilettes intelligentes ✨</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Pourquoi cet événement ?</h2>
          <p className="mb-6">
            Les toilettes intelligentes représentent une avancée révolutionnaire alliant confort, hygiène et respect de l'environnement. Cet événement réunit des experts, des ingénieurs, des designers et des passionnés de technologie pour imaginer les sanitaires de demain. Au programme : des démonstrations interactives, des conférences sur la gestion durable de l'eau, et des ateliers de sensibilisation pour un avenir plus propre et plus respectueux 🌍.
          </p>
          <blockquote className="italic text-xl border-l-4 border-purple-400 pl-4">
            "Notre mission : transformer un geste quotidien en une innovation durable."
          </blockquote>
        </div>
        <div className="flex justify-center items-center bg-gray-300 h-64 rounded-lg">
          <p className="text-gray-500">Image de Smart toilet</p>
        </div>
      </div>

      <footer className="text-center mt-12 text-sm">
        <p>© 2025 Événement Toilettes Intelligentes | Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default About;
