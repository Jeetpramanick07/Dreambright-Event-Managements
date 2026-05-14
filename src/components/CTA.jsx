import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './Motion.jsx'
export default function CTA() {
  return <section className="section">
    <div className="container">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-gold/20 via-white/5 to-black p-10 text-center shadow-gold md:p-16">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
        <h2 className="relative font-display text-4xl font-black md:text-6xl">Let’s Build Your Next Unforgettable Event</h2>
        <p className="relative mx-auto mt-5 max-w-2xl text-ivory/70">Share your vision. DreamBright will shape the concept, manage the details, and execute the experience with confidence.</p>
        <Link to="/contact" className="btn-primary relative mt-8">Contact DreamBright <ArrowRight size={18}/></Link>
      </Reveal>
    </div>
  </section>
}
