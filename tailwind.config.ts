import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'class'], // This enables manual dark mode control
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			text: {
  				main: '#1F2937',
  				light: '#F8F9FA',
  				dark: '#111827',
  				muted: {
  					light: '#6B7280',
  					dark: '#9CA3AF'
  				}
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
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  			sans: [
  				'var(--font-inter)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		padding: {
  			section: '6rem'
  		},
  		borderRadius: {
  			DEFAULT: '8px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		maxWidth: {
  			content: '1280px'
  		},
  		fontSize: {
  			base: [
  				'1rem',
  				'1.5rem'
  			],
  			lg: [
  				'1.125rem',
  				'1.75rem'
  			],
  			'3xl': [
  				'1.875rem',
  				'2.25rem'
  			],
  			'4xl': [
  				'2.25rem',
  				'2.5rem'
  			],
  			'5xl': [
  				'3rem',
  				'1'
  			]
  		},
  		boxShadow: {
  			card: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  		}
  	}
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'body': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.gray.900'),
        },
        '.dark body': {
          backgroundColor: theme('colors.gray.900'),
          color: theme('colors.white'),
        },
      });
    }),
      require("tailwindcss-animate")
],
};

export default config; 