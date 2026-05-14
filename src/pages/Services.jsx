import { Page, Reveal } from '../components/Motion.jsx'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import { detailedServices } from '../data'

export default function Services(){ return <Page>
  <Hero
  video
  showCards
  title="Turning Bright Ideas Into Unforgettable Events"
  subtitle="DREAMBRIGHT Event Managements crafts premium events, productions, celebrations, and corporate experiences with creativity, precision, and flawless execution."
/>
  <section className="section">
    <div className="container">
      <SectionHeader kicker="Services" title="Everything Your Event Needs" text="Focused services for celebrations, corporate experiences, live productions, venue transformation, and brand-led moments." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {detailedServices.map((s,i)=><Reveal delay={i*.04} key={s[0]}><ServiceCard item={s} index={i}/></Reveal>)}
      </div>
    </div>
  </section>
  <section className="section bg-black/30">
    <div className="container">
      <SectionHeader kicker="FAQ" title="Questions Before Planning?" text="Quick answers for clients planning events with DreamBright." />
      <Reveal><FAQ /></Reveal>
    </div>
  </section>
  <CTA/><Footer/>
</Page> }
