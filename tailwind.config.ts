import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontSize: {
  			'70xl': '3.5rem',
  			'80xl': '6rem',
  			'50xl': '3rem'
  		},
  		colors: {
  			navbar: {
  				bg: '#0E0C2A',
  				text: '#FFFFFF'
  			},
  			missionSection: {
  				missionCard1Color: 'C9F4F3',
  				missionCard2Color: 'F1F1F1',
  				missionCard1StrokeColor: '69C9C6',
  				missionCard2StrokeColor: '306CB6'
  			},
  			engagementSection: {
  				cardBgColor: '#FAFAFA',
  				cardtextColor: '#1C1B1F'
  			},
  			servicesSection: {
  				bg: '#1C1B1F'
  			},
  			button: {
  				primary: '#00AFB4',
  				secondary: '#0013A3'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			unbounded: [
  				'var(--font-unbounded)',
  				'sans-serif'
  			],
  			brunoAce: [
  				'var(--font-bruno-ace-regular)',
  				'sans-serif'
  			],
  			manrope: [
  				'var(--font-manrope)',
  				'sans-serif'
  			],
  			orbitron: [
  				'var(--font-orbitron)',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
