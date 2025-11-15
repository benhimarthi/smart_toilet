/** @type {import('next').NextConfig} */
const nextConfig = {


  images: {
    unoptimized: true, // Désactive l'optimisation des images pour un export statique
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
