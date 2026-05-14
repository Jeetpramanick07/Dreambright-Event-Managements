import { Link } from 'react-router-dom'
import { brand } from '../data'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_.8fr_1fr]">
        <div>
          <h3 className="font-display text-3xl font-black gold-text">DREAMBRIGHT</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-ivory/65">A leading event management and event production company based in South India, creating beautiful, reliable, and memorable experiences from concept to execution.</p>
          <div className="mt-6 flex gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-xs font-black text-gold">IG</span><span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-xs font-black text-gold">FB</span><span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-xs font-black text-gold">YT</span></div>
        </div>
        <div>
          <h4 className="font-bold text-gold">Navigation</h4>
          <div className="mt-4 grid gap-3 text-sm text-ivory/70">
            <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gold">Contact Information</h4>
          <div className="mt-4 grid gap-4 text-sm text-ivory/70">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold"/> {brand.address}</p>
            <a className="flex gap-3" href={`tel:${brand.phone.replaceAll(' ', '')}`}><Phone className="h-4 w-4 text-gold"/> {brand.phone}</a>
            <a className="flex gap-3" href={`mailto:${brand.email}`}><Mail className="h-4 w-4 text-gold"/> {brand.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-ivory/45">© 2026 DREAMBRIGHT Event Managements. All rights reserved.</div>
    </footer>
  )
}
