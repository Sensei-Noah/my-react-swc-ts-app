import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen.ts'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => '404 Not Found this',
  defaultPreload: 'intent',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main style={{ backgroundColor: 'lightgray' }}>
      <RouterProvider router={router} />
    </main>
  </StrictMode>
)
