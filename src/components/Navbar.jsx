import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className={linkClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar