import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	jsxFramework: "react",
	include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],
	exclude: [],
	presets: ["@pandacss/dev/presets", "@park-ui/presets"],
	theme: {
		extend: {
			recipes: {},
			tokens: {
				colors: {
					grayPalette: {
						25: { value: "{colors.gray.25}" },
						50: { value: "{colors.gray.50}" },
						100: { value: "{colors.gray.100}" },
						200: { value: "{colors.gray.200}" },
						300: { value: "{colors.gray.300}" },
						400: { value: "{colors.gray.400}" },
						500: { value: "{colors.gray.500}" },
						600: { value: "{colors.gray.600}" },
						700: { value: "{colors.gray.700}" },
						800: { value: "{colors.gray.800}" },
						900: { value: "{colors.gray.900}" },
						950: { value: "{colors.gray.950}" },
					},
				},
				fonts: {
					inter: {
						value: "var(--font-inter), sans-serif",
					},
					karla: {
						value: "var(--font-karla), sans-serif",
					},
				},
			},

			semanticTokens: {
				colors: {
					accent: {
						default: { value: { base: "{colors.sky.500}", _dark: "{colors.sky.500}" } },
						emphasized: {
							value: { base: "{colors.sky.600}", _dark: "{colors.sky.400}" },
						},
						fg: {
							value: { base: "{colors.white}", _dark: "{colors.gray-palette.950}" },
						},
					},
					border: {
						accent: { value: { base: "{colors.sky.500}", _dark: "{colors.sky.500}" } },
					},
				},
				radii: {
					l1: { value: "{radii.md}" },
					l2: { value: "{radii.lg}" },
					l3: { value: "{radii.xl}" },
				},
			},
		},
	},
	// // globalCss: {
	// // 	"*": {
	// // 		font: "revert",
	// // 	},
	// // },
	conditions: {
		extend: {
			groupHover: "[role=group]:where(:hover, [data-hover]) &",
			dark: "html[data-color-scheme='dark'] &",
			light: "[data-color-scheme='light'] &",
		},
	},
	outdir: "styled-system",
});

/**
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 72.2% 50.6%;
    --primary-foreground: 0 85.7% 97.3%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 72.2% 50.6%;
    --radius: 0.5rem;
  }
 
  .dark {
primary: {
	DEFAULT: { value: "hsl(0 72.2% 50.6%)" },
	foreground: { value: "hsl(0 85.7% 97.3%)" }
},
secondary: {
	DEFAULT: { value: "hsl(0 0% 14.9%)" },
	foreground: { value: "hsl(0 0% 98%)" }
},
muted: {
	DEFAULT: { value: "hsl(0 0% 14.9%)" },
	foreground: { value: "hsl(0 0% 63.9%)" }
},
accent: {
	DEFAULT: { value: "hsl(0 0% 14.9%)" },
	foreground: { value: "hsl(0 0% 98%)" }
},
destructive: {
	DEFAULT: { value: "hsl(0 62.8% 30.6%)" },
	foreground: { value: "hsl(0 0% 98%)" }
},
border: {
	DEFAULT: { value: "hsl(0 0% 14.9%)" }
},
input: {
	DEFAULT: { value: "hsl(0 0% 14.9%)" }
},
ring: {
	DEFAULT: { value: "hsl(0 72.2% 50.6%)" }
},
 */
