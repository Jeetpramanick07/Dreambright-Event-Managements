import { MessageCircle } from 'lucide-react'
import { brand } from '../data'
export default function WhatsAppButton(){ return <a href={brand.whatsapp} target="_blank" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-black shadow-gold transition hover:scale-110" aria-label="Chat on WhatsApp"><MessageCircle /></a> }
