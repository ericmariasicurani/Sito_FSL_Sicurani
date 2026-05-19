import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import Spagna from './Spagna.jsx'
import Italia from './Italia.jsx'
import Competenze from './Competenze.jsx'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <Link to="/" className="nav__logo">
        <img src="/logo.png" alt='ITT "Allievi-Sangallo" Terni' />
      </Link>
      <div className="nav__links">
        {[
          { to: '/',           label: 'Home' },
          { to: '/spagna',     label: 'Spagna' },
          { to: '/italia',     label: 'Italia' },
          { to: '/competenze', label: 'Competenze' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav__link${loc.pathname === to ? ' nav__link--active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/spagna"     element={<Spagna />} />
        <Route path="/italia"     element={<Italia />} />
        <Route path="/competenze" element={<Competenze />} />
      </Routes>
    </>
  )
}