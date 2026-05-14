import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-white/10 bg-black/75 shadow-velvet backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
  to="/"
  className="group flex items-center gap-3"
  onClick={() => setOpen(false)}
>
  <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-gold/40 bg-gold/10 shadow-gold">
    <img
      src="/dreambright-logo.png"
      alt="DREAMBRIGHT logo"
      className="h-full w-full object-cover"
    />
  </span>

  <span className="leading-tight">
    <span className="block font-display text-xl font-black tracking-wide">
      DREAMBRIGHT
    </span>
    <span className="block text-[11px] uppercase tracking-[.32em] text-gold/80">
      Event Managements
    </span>
  </span>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-gold text-black'
                    : 'text-ivory/80 hover:bg-white/10 hover:text-gold'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link to="/contact" className="ml-3 btn-primary py-2.5">
            Plan an Event
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-xl border border-white/15 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 pb-5 pt-2 backdrop-blur-xl md:hidden">
          {nav.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 font-semibold transition ${
                  isActive
                    ? 'bg-gold text-black'
                    : 'text-ivory/85 hover:bg-white/10 hover:text-gold'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-center rounded-full bg-gold px-5 py-3 font-black text-black"
          >
            Plan an Event
          </Link>
        </div>
      )}
    </header>
  )
}