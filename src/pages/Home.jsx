import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Page, Reveal } from '../components/Motion.jsx'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Counter from '../components/Counter.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import { services, process, images } from '../data'

export default function Home() {
  return (
    <Page>
      <Hero
        video
        showCards
        title="Turning Bright Ideas Into Unforgettable Events"
        subtitle="DREAMBRIGHT Event Managements crafts premium events, productions, celebrations, and corporate experiences with creativity, precision, and flawless execution."
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            kicker="Trust"
            title="Built for Events That Must Feel Effortless"
            text="From intimate celebrations to large-scale productions, DreamBright brings structure, creativity, and confidence to every event."
          />

          <div className="grid gap-5 md:grid-cols-4">
            <Counter value="2000" suffix="+" label="Events Completed" />
            <Counter value="1000" suffix="+" label="Happy Clients" />
            <Counter value="10" suffix="+" label="Years Experience" />

            <div className="glass card-hover rounded-[2rem] p-7 text-center">
              <p className="font-display text-5xl font-black text-gold">IN</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[.2em] text-ivory/60">
                South India Specialists
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-black/30">
        <div className="container">
          <SectionHeader
            kicker="Services"
            title="Premium Event Capabilities"
            text="A complete event ecosystem designed to transform ideas into smooth, memorable, and beautifully produced experiences."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal delay={i * 0.05} key={s[0]}>
                <ServiceCard item={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="container">
          <SectionHeader
            kicker="Process"
            title="From Concept to Standing Ovation"
            text="A clear six-step production workflow keeps every decision, vendor, guest touchpoint, and stage moment aligned."
          />

          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[.04] p-6 md:p-10">
            <div className="absolute left-1/2 top-10 hidden h-[calc(100%-80px)] w-px bg-gradient-to-b from-transparent via-gold to-transparent md:block lg:left-10 lg:top-1/2 lg:h-px lg:w-[calc(100%-80px)]" />

            <div className="grid gap-5 lg:grid-cols-6">
              {process.map((p, i) => (
                <Reveal delay={i * 0.08} key={p} className="relative">
                  <div className="glass card-hover rounded-3xl p-6 text-center">
                    <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gold font-black text-black">
                      {i + 1}
                    </span>

                    <h3 className="font-bold">{p}</h3>

                    <CheckCircle2 className="mx-auto mt-4 text-gold" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-black/30">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.lights}
              alt="DreamBright stage lights"
              className="h-[440px] w-full rounded-[2.5rem] object-cover shadow-velvet"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-black uppercase tracking-[.32em] text-gold">
              Why Choose Us
            </p>

            <h2 className="mt-4 font-display text-4xl font-black md:text-6xl">
              Very Responsible With Your Event
            </h2>

            <p className="mt-6 leading-8 text-ivory/65">
              Every event is a unique canvas. DreamBright combines a friendly
              team, venue understanding, unique scenarios, and technical
              production to create unforgettable moments.
            </p>

            <Link to="/about" className="btn-ghost mt-8">
              More About DreamBright <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />
      <Footer />
    </Page>
  )
}