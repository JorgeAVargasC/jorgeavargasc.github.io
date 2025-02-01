import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig({
	plugins: [
		react(),
		visualizer({
			emitFile: true,
			filename: 'stats.html'
		})
	],
	server: {
		host: true
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'router-vendor': ['react-router-dom'],
					'animations-vendor': ['framer-motion'],
					'dates-vendor': ['@formkit/tempo'],
					'icons-vendor': ['lucide-react'],
					'utils-vendor': ['clsx']
				}
			}
		}
	}
})
