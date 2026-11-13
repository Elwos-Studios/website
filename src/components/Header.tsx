import { Link, NavLink } from 'react-router-dom'
import wordmark from '../assets/logo-wordmark.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/games', label: 'Games' },
  { to: '/about', label: 'About' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <Link className="logo" to="/" aria-label="ELWOS Studios home">
          <img src={wordmark} alt="ELWOS Studios" width={90} height={30} />
        </Link>
        <nav aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
