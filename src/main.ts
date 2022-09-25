import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import App from '~/App/index.vue'

import './styles/main.scss'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/**/index.ts')).forEach(i => i.install?.(ctx))
  }
)
