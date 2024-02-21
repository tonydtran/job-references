import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import webfontDownload from 'vite-plugin-webfont-dl'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    webfontDownload(),
    imagetools(),
    react({
      plugins: [
        ['@swc/plugin-styled-components', { displayName: true, ssr: true }],
      ],
    }),
  ],
})
