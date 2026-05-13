import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dans: resolve(__dirname, 'dans.html'),
        catsMeow: resolve(__dirname, 'cats-meow.html'),
        strikeNight: resolve(__dirname, 'strike-night.html'),
      },
    },
  },
  plugins: [tailwindcss()],
})
