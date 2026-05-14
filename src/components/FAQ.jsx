import { useState } from 'react'
import { Plus } from 'lucide-react'
const faqs = [
 ['What types of events does DreamBright manage?', 'DreamBright manages corporate events, weddings, celebrations, productions, campus shows, brand experiences, and customized event experiences.'],
 ['Does DreamBright handle complete event execution?', 'Yes. The team supports planning, organising, management, production, and execution from concept to completion.'],
 ['Where is DreamBright based?', 'DreamBright is based in Chennai and serves clients across South India and India.'],
 ['Can DreamBright manage large-scale events?', 'Yes. DreamBright has experience handling a wide range of events, from personal celebrations to large-scale productions.'],
 ['How can I contact DreamBright?', 'You can call +91 73585 93027 or email contact@dreambright.in.']
]
export default function FAQ(){ const [open,setOpen]=useState(0); return <div className="mx-auto max-w-4xl space-y-4">{faqs.map((f,i)=><div key={f[0]} className="glass overflow-hidden rounded-2xl"><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-4 p-6 text-left font-bold"><span>{f[0]}</span><Plus className={`text-gold transition ${open===i?'rotate-45':''}`}/></button>{open===i&&<p className="border-t border-white/10 px-6 pb-6 pt-4 leading-7 text-ivory/65">{f[1]}</p>}</div>)}</div> }
