// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://jorgeavargasc.github.io',
	base: '/',
	vite: { plugins: [tailwindcss()] },
	devToolbar: { enabled: false },
	server: { host: '0.0.0.0' }
})
