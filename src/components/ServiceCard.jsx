import { CalendarCheck, Clapperboard, Building2, Gem, Lightbulb, MapPinned, Users, BadgeCheck } from 'lucide-react'
const icons = [CalendarCheck, Clapperboard, Building2, Gem, Lightbulb, MapPinned, Users, BadgeCheck]
export default function ServiceCard({ item, index }) {
  const Icon = icons[index % icons.length]
  return <article className="glass card-hover group rounded-[2rem] p-7 shadow-velvet">
    <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold transition group-hover:scale-110 group-hover:bg-gold group-hover:text-black"><Icon /></div>
    <h3 className="text-xl font-black text-ivory">{item[0]}</h3>
    <p className="mt-3 leading-7 text-ivory/62">{item[1]}</p>
  </article>
}
