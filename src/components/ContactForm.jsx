import { Send } from 'lucide-react'
export default function ContactForm(){ return <form className="glass rounded-[2rem] p-6 md:p-8" onSubmit={(e)=>{e.preventDefault(); alert('Thank you! Please connect this form to Formspree, EmailJS, or your backend before production.')}}>
  <div className="grid gap-4 md:grid-cols-2">
    <input required placeholder="Your Name" className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4 outline-none transition focus:border-gold" />
    <input required placeholder="Phone Number" className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4 outline-none transition focus:border-gold" />
    <input required type="email" placeholder="Email Address" className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4 outline-none transition focus:border-gold" />
    <select className="rounded-2xl border border-white/10 bg-black/35 px-5 py-4 outline-none transition focus:border-gold"><option>Event Type</option><option>Corporate Event</option><option>Wedding</option><option>Stage Production</option><option>Celebration</option><option>Other</option></select>
  </div>
  <textarea required rows="6" placeholder="Tell us about your event vision..." className="mt-4 w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 outline-none transition focus:border-gold" />
  <button className="btn-primary mt-5 w-full">Send Enquiry <Send size={18}/></button>
</form> }
