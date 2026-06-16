import { MessageCircle } from 'lucide-react'
import { brand } from '../data'

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes pulse-attention {
          0%, 20%, 100% { box-shadow: 0 10px 25px -5px rgba(255, 107, 53, 0.5), 0 0 0 0 rgba(255, 107, 53, 0.7); }
          10% { box-shadow: 0 10px 25px -5px rgba(255, 107, 53, 0.6), 0 0 0 15px rgba(255, 107, 53, 0); }
        }
        .cta-container {
          animation: float-gentle 4s ease-in-out infinite;
        }
        .cta-button {
          animation: pulse-attention 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .cta-container:hover {
          animation-play-state: paused;
        }
        .cta-container:hover .cta-button {
          animation: none;
        }
        .cta-text {
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: all 0.4s ease-out;
        }
        @media (min-width: 380px) {
          .cta-text {
            max-width: 300px;
            opacity: 1;
            margin-left: 10px;
          }
        }
        .cta-container:hover .cta-text {
          max-width: 300px;
          opacity: 1;
          margin-left: 10px;
        }
      `}</style>
      <div className="fixed bottom-5 right-5 md:bottom-[30px] md:right-[30px] z-[9999] cta-container flex items-center">
        <a 
          href={brand.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button flex items-center rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] p-3.5 sm:px-5 sm:py-3 md:px-7 md:py-4 text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.08] hover:shadow-[0_15px_35px_-5px_rgba(255,107,53,0.6)] cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B35]/50"
          aria-label="Get Free Event Consultation"
        >
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7 shrink-0" />
          <span className="cta-text font-semibold tracking-wide text-sm md:text-[15px]">
            Get Free Event Consultation
          </span>
        </a>
      </div>
    </>
  )
}
