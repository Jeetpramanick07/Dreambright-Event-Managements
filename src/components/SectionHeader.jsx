import { Reveal } from './Motion.jsx'
export default function SectionHeader({ kicker, title, text, center=true }) {
  return <Reveal className={`${center ? 'mx-auto text-center' : ''} mb-12 max-w-3xl`}>
    <p className="mb-3 text-sm font-black uppercase tracking-[.32em] text-gold">{kicker}</p>
    <h2 className="font-display text-4xl font-black leading-tight md:text-6xl"><span className="gold-text">{title}</span></h2>
    {text && <p className="mt-5 text-lg leading-8 text-ivory/65">{text}</p>}
  </Reveal>
}
