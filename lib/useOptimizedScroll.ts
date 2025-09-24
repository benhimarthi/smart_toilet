import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  // Optimisations de compilation
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimisations d'images
  images: {
    domains: ['player.vimeo.com', 'vimeo.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 an
    dangerouslyAllowSVG: false,
  },
  
  // Optimisations de performance
  experimental: {
    optimizeCss: true,
    // Optimisations modernes disponibles
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Headers de performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Preconnect pour Vimeo
          {
            key: 'Link',
            value: '<https://player.vimeo.com>; rel=preconnect; crossorigin',
          },
          // Cache Control
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=300',
          },
        ],
      },
    ];
  },
  
  // Webpack optimizations avec typage complet
  webpack: (
    config: Configuration, 
    { dev, isServer }: { dev: boolean; isServer: boolean }
  ): Configuration => {
    // Optimisations de production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
    }

    // Optimisation des modules
    if (!config.module) {
      config.module = { rules: [] };
    }
    
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },
  
  // Optimisations du bundle
  env: {
    CUSTOM_KEY: 'performance-optimized',
  },
  
  // Redirections et rewrites optimisés
  async rewrites() {
    return [
      // Optimisation des assets statiques
      {
        source: '/assets/:path*',
        destination: '/_next/static/:path*',
      },
    ];
  },
  
  // Compression et optimisations
  compress: true,
  
  // Optimisations de build
  generateBuildId: async (): Promise<string> => {
    return `build-${Date.now()}`;
  },
  
  // Optimisations de runtime
  serverRuntimeConfig: {
    // Sera uniquement disponible côté serveur
  },
  
  publicRuntimeConfig: {
    // Sera disponible côté client et serveur
    staticFolder: '/static',
  },
  
  // Optimisations supplémentaires
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Optimisations des modules transpilés
  transpilePackages: ['three', 'troika-three-text'],
  
  // Optimisations de build
  output: 'standalone',
  
  // Optimisations de redirections
  trailingSlash: false,
  
  // Optimisations de développement
  ...(process.env.NODE_ENV === 'development' && {
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
  }),
};

export default nextConfig;