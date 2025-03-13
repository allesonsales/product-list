  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import { viteStaticCopy } from 'vite-plugin-static-copy'

  export default defineConfig({
    base: '/product-list/',
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/images/*',  // Origem das imagens
            dest: 'images'               // Destino no build (`dist/images/`)
          }
        ]
      })
    ]
  });