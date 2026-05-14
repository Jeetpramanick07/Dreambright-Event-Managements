import { Page, Reveal } from '../components/Motion.jsx'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import { images } from '../data'

const values = ['Creative Thinking','Detail-Oriented Execution','Professional Team','Reliable Event Management','Premium Event Experience','End-to-End Coordination']

export default function About(){ return <Page>
  <Hero
  video
  title="About DREAMBRIGHT Event Managements"
  subtitle="Creative event planning and production built on innovation, detail, and unforgettable experiences."
  primary="Start Planning"
  secondary="View Services"
/>
  <section className="section">
    <div className="container grid items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <p className="text-sm font-black uppercase tracking-[.32em] text-gold">About</p>
        <h2 className="mt-4 font-display text-4xl font-black md:text-6xl">An Event Management and Event Production Company</h2>
        <p className="mt-6 leading-8 text-ivory/68">DREAMBRIGHT Event Managements is a skilled event management and event production company based in South India. With innovation, creativity, and detailed execution at its core, the company creates memorable event experiences for clients across India.</p>
        <p className="mt-4 leading-8 text-ivory/68">The team focuses on every need and occasion, big or small, giving attention to minute details and specifications so each event becomes practical, reliable, and magical.</p>
      </Reveal>
      <Reveal delay={0.1}><div className="grid grid-cols-2 gap-4">
        <img src={images.stage} className="h-72 rounded-[2rem] object-cover shadow-velvet" alt="Event hall" />
        <img src={images.lights} className="mt-12 h-72 rounded-[2rem] object-cover shadow-gold" alt="Stage lights" />
        <img src={images.hero} className="col-span-2 h-72 rounded-[2rem] object-cover shadow-velvet" alt="Concert crowd" />
      </div></Reveal>
    </div>
  </section>
  <section className="section bg-black/30">
    <div className="container">
      <SectionHeader kicker="Value" title="What Makes DreamBright Different" text="Professional event execution needs more than decoration. It needs planning discipline, production awareness, and people who care about the smallest details." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{values.map((v,i)=><Reveal key={v} delay={i*.05}><div className="glass card-hover rounded-[2rem] p-7"><span className="text-4xl font-black text-gold">0{i+1}</span><h3 className="mt-5 text-xl font-black">{v}</h3><p className="mt-3 leading-7 text-ivory/62">A focused approach that keeps your event smooth, premium, and memorable from first conversation to final execution.</p></div></Reveal>)}</div>
    </div>
  </section>
  <CTA/><Footer/>
</Page> }
