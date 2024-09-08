import { defineConfig, bytecodePlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import path from 'path'
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
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/renderer/app')
      }
    }
  }
})
