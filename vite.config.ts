import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Pages({
      dirs: 'src/pages',
      extensions: ['tsx'],
      moduleId: '~pages',
      resolver: 'react',
      exclude: ['**/components/**', '**/layout.tsx'],
      onRoutesGenerated(routes) {
        return routes.map((route) => {
          let cleanPath = route.path;

          if (cleanPath.endsWith('/page')) {
            route.path = route.path.replace(/\/page$/,'') || '/';
          } else if (cleanPath === 'page') {
            cleanPath = '';
          }
          
          cleanPath = cleanPath.replace(/^\//, '');

          if (cleanPath === '') {
            return {
              ...route,
              index: true,
              path: undefined,
            };
          }

          return {
            ...route,
            path: cleanPath,
          };
        });
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
