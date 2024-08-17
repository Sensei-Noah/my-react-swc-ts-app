import { Link } from '@tanstack/react-router'

const activeStyle = {
  fontWeight: 600,
}

const Navbar = () => {
  return (
    <nav
      className="p-2 flex gap-2 text-lg"
      style={{ backgroundColor: 'lightgray' }}
    >
      <Link
        to="/"
        activeProps={{
          style: activeStyle,
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>{' '}
      <Link
        to={'/about'}
        activeProps={{
          style: activeStyle,
        }}
      >
        About
      </Link>
    </nav>
  )
}

export default Navbar
