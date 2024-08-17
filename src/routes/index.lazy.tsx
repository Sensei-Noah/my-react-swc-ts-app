import { createLazyFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createLazyFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return <App />
}
