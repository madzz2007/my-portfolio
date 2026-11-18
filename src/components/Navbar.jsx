import { useEffect, useState } from 'react'

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'certificates', label: 'Certificates' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.to))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function handleClick(event, id) {
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(id)
    }
  }

  return (
    <nav>
      <div className="logo">Madhesh</div>
      <div className="nav-links">
        {links.map((link) => (
          <a
            key={link.to}
            href={`#${link.to}`}
            onClick={(event) => handleClick(event, link.to)}
            className={active === link.to ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
