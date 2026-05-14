import { Phone, Mail, MapPin, Send, MessageCircle, ExternalLink } from 'lucide-react'
import { Page, Reveal } from '../components/Motion.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'

const mapLink = 'https://maps.app.goo.gl/Aamj42HDUekgNmvu7'

export default function Contact() {
  return (
    <Page>
<Hero
  video
  title="About DREAMBRIGHT Event Managements"
  subtitle="Creative event planning and production built on innovation, detail, and unforgettable experiences."
  primary="Start Planning"
  secondary="View Services"
/>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="glass rounded-[2.5rem] p-6 shadow-velvet md:p-10">
              <p className="text-sm font-black uppercase tracking-[.32em] text-gold">
                Contact
              </p>

              <h2 className="mt-4 font-display text-4xl font-black md:text-6xl">
                Tell Us About Your Event
              </h2>

              <p className="mt-5 leading-8 text-ivory/65">
                Fill in the details below and the DreamBright team will connect
                with you to understand your event requirements.
              </p>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-ivory/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-ivory outline-none transition placeholder:text-ivory/35 focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-ivory/70">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-ivory outline-none transition placeholder:text-ivory/35 focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-ivory/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="yourmail@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-ivory outline-none transition placeholder:text-ivory/35 focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-ivory/70">
                      Event Type
                    </label>
                    <select className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-ivory outline-none transition focus:border-gold">
                      <option className="bg-black">Corporate Event</option>
                      <option className="bg-black">Wedding Event</option>
                      <option className="bg-black">Birthday / Celebration</option>
                      <option className="bg-black">Stage Production</option>
                      <option className="bg-black">Sound & Lighting</option>
                      <option className="bg-black">Other Event</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-ivory/70">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tell us about your event, date, location, expected guests, and requirements..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-ivory outline-none transition placeholder:text-ivory/35 focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center md:w-fit"
                >
                  Send Enquiry
                  <Send size={18} />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div className="glass rounded-[2.5rem] p-7 shadow-gold">
                <h3 className="font-display text-3xl font-black">
                  Contact Details
                </h3>

                <div className="mt-7 space-y-5">
                  <a
                    href="tel:+917358593027"
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-4 transition hover:border-gold/50 hover:bg-white/[.07]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Phone size={20} />
                    </span>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-[.2em] text-ivory/45">
                        Phone
                      </p>
                      <p className="mt-1 font-bold text-ivory group-hover:text-gold">
                        +91 73585 93027
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@dreambright.in"
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-4 transition hover:border-gold/50 hover:bg-white/[.07]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Mail size={20} />
                    </span>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-[.2em] text-ivory/45">
                        Email
                      </p>
                      <p className="mt-1 font-bold text-ivory group-hover:text-gold">
                        contact@dreambright.in
                      </p>
                    </div>
                  </a>

                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-4 transition hover:border-gold/50 hover:bg-white/[.07]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <MapPin size={20} />
                    </span>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-[.2em] text-ivory/45">
                        Address
                      </p>
                      <p className="mt-1 leading-7 text-ivory/75 group-hover:text-ivory">
                        No. 19/7, C.P. Sundaramoorthy Street, Barathi Block,
                        Jafferkhanpet, Near Ashok Pillar, Chennai - 600 083.
                      </p>
                    </div>
                  </a>
                </div>

                <a
                  href="https://wa.me/917358593027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-4 font-black text-black transition hover:scale-[1.02] hover:bg-green-400"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[.04] shadow-velvet transition duration-300 hover:border-gold/60 hover:bg-white/[.07]"
              >
                <div className="relative h-80 w-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,168,79,.35),transparent_58%)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-[#15110A] to-black" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
                    <div className="grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-gold/15 text-gold shadow-gold">
                      <MapPin size={34} />
                    </div>

                    <h3 className="mt-6 font-display text-3xl font-black text-ivory">
                      Visit DreamBright
                    </h3>

                    <p className="mt-3 max-w-md leading-7 text-ivory/65">
                      Open the exact location in Google Maps and get directions
                      to DREAMBRIGHT Event Managements.
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-black text-black transition group-hover:scale-105">
                      Open in Google Maps
                      <ExternalLink size={17} />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </Page>
  )
}