import { Link } from '@tanstack/react-router'

const Navbar = () => {
  return (
    <nav
      className="p-2 flex gap-2 text-lg"
      style={{ backgroundColor: 'lightgray' }}
    >
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>{' '}
      <Link
        to={'/about'}
        activeProps={{
          className: 'font-bold',
        }}
      >
        About
      </Link>
    </nav>
  )
}

export default Navbar
