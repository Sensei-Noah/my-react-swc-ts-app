import { createFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div>
      <App />
    </div>
  )
}
