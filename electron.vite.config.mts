import { defineConfig, bytecodePlugin } from 'electron-vite'
import reactPlugin from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig({
	main: {
		plugins: [
			bytecodePlugin({
				protectedStrings: Object.values(dotenv.config().parsed || {})
			})
		]
	},
	preload: {
		plugins: [] // empty
	},
	renderer: {
		plugins: [reactPlugin()]
	}
})
