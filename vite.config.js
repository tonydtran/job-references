import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import webfontDownload from 'vite-plugin-webfont-dl'
import { imagetools } from 'vite-imagetools'
import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5'
/**
 * Note about vite-plugin-purgecss-updated-v5:
 * This plugin is a fork of @mojojoejo/vite-plugin-purgecss,
 * which is not working on vite 5.0.0.
 * Please check the original plugin for updates.
 */

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
    pluginPurgeCss({
      fontFace: true,
      variables: true,
      rejected: true,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['sharp'],
    },
  },
})
