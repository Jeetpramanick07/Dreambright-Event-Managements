import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../data'

export default function Hero({
  eyebrow = 'Premium Event Production',
  title,
  subtitle,
  primary = 'Plan Your Event',
  secondary = 'Explore Services',
  showCards = false,
  video = false,
}) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-28">
      <div className="absolute inset-0 bg-black">
        {video ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/dreambright-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={images.hero}
            alt="DreamBright Event Managements"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Premium readable overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(214,168,79,.28),transparent_34%),radial-gradient(circle_at_82%_58%,rgba(255,255,255,.12),transparent_32%)]" />
        <div className="noise absolute inset-0 opacity-40" />
      </div>

      <motion.div
        animate={{ y: [0, -16, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-10 top-32 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 left-8 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />

      <div className="container relative z-10 grid min-h-[74vh] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-black/35 px-4 py-2 text-sm font-bold text-gold backdrop-blur">
            <Sparkles size={16} />
            {eyebrow}
          </div>

          <h1 className="max-w-5xl font-display text-5xl font-black leading-[.98] md:text-7xl lg:text-8xl">
            <span className="gold-text drop-shadow-2xl">{title}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/80 md:text-xl">
            {subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              {primary}
              <ArrowRight size={18} />
            </Link>

            <Link to="/services" className="btn-ghost bg-black/25 backdrop-blur">
              {secondary}
            </Link>
          </div>
        </motion.div>

        {showCards && (
          <div className="relative hidden min-h-[520px] lg:block">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -5,
                y: [0, -16, 0],
              }}
              transition={{
                duration: 0.9,
                y: { repeat: Infinity, duration: 6 },
              }}
              src={images.stage}
              className="absolute left-0 top-12 h-64 w-80 rounded-[2rem] border border-white/15 object-cover shadow-velvet"
              alt="Stage setup"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 6,
                y: [0, 18, 0],
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                y: { repeat: Infinity, duration: 7 },
              }}
              src={images.lights}
              className="absolute right-0 top-40 h-72 w-96 rounded-[2rem] border border-gold/30 object-cover shadow-gold"
              alt="Lighting setup"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="glass absolute bottom-20 left-16 rounded-[2rem] p-6 shadow-gold"
            >
              <p className="text-5xl font-black text-gold">1000+</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[.25em] text-ivory/70">
                Events Done
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}