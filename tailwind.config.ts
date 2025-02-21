import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom: {
          nyanza: '#E9FFDB',
          minicream: '#F5FFFA',
          magnolia:'#F8F4FF',
          floralwhite:'#FFFAF0',
          gray: {
            ash: '#B2BEB5',
            cadet: '#91A3B0',
            slate: '#708090',
            charcoal: '#36454F' 
          },
          blue: {
            dodger:'#1E90FF',
            midnight:'#191970',
            navy:'#000080',
            oxford: '#002147',
            ultramarine: '#120A8F'
          },
          green: {
            emarld: '#50C878',
            dartmouth: '#00693E',
            jade: '#00A86B',
            jungle:'#29AB87',
            midnight: '#004953'
          },
          alerts: {
            danger: '#E60026',
            success: '#138808',
            warn: '#ffd800',
            ready: '#FFD700'
          }
        },
        school: {
          green: {
            100: "hsl(120, 60%, 95%)",
            200: "hsl(120, 60%, 85%)",
            300: "hsl(120, 60%, 75%)",
            400: "hsl(120, 60%, 65%)",
            500: "hsl(120, 60%, 55%)",
            600: "hsl(120, 60%, 45%)",
            700: "hsl(120, 60%, 35%)",
          },
          brown: {
            100: "hsl(30, 50%, 95%)",
            200: "hsl(30, 50%, 85%)",
            300: "hsl(30, 50%, 75%)",
            400: "hsl(30, 50%, 65%)",
            500: "hsl(30, 50%, 55%)",
            600: "hsl(30, 50%, 45%)",
            700: "hsl(30, 50%, 35%)",
          },
          blue: {
            100: "hsl(210, 80%, 95%)",
            200: "hsl(210, 80%, 85%)",
            300: "hsl(210, 80%, 75%)",
            400: "hsl(210, 80%, 65%)",
            500: "hsl(210, 80%, 55%)",
            600: "hsl(210, 80%, 45%)",
            700: "hsl(210, 80%, 35%)",
          },
          yellow: {
            100: "hsl(45, 100%, 95%)",
            200: "hsl(45, 100%, 85%)",
            300: "hsl(45, 100%, 75%)",
            400: "hsl(45, 100%, 65%)",
            500: "hsl(45, 100%, 55%)",
            600: "hsl(45, 100%, 45%)",
            700: "hsl(45, 100%, 35%)",
          },
        },
        sidebar: {
          background: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        '3000': '3000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

