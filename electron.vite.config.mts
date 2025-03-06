import { defineConfig, bytecodePlugin } from 'electron-vite'
import reactPlugin from '@vitejs/plugin-react'
import dotenv from 'dotenv'

const protectedStrings = Object.values(dotenv.config().parsed as Record<string, string>)

export default defineConfig({
	main: {
		plugins: [bytecodePlugin({ protectedStrings })]
	},
	preload: {
		plugins: [bytecodePlugin({ protectedStrings })]
	},
	renderer: {
		plugins: [bytecodePlugin({ protectedStrings }), reactPlugin()]
	}
})
