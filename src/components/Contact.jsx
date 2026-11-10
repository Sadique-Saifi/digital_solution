import { openGoogleForm, getWhatsAppUrl, siteConfig } from '../config/siteConfig'
import { Section, BackgroundOrbs } from './ui'

const contactCards = [
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    iconBg: 'linear-gradient(135deg, #25D366, #128C7E)',
    glow: 'rgba(37, 211, 102, 0.2)',
    badge: 'PRIMARY',
    title: 'WhatsApp Business',
    description: 'Get in touch directly with our team. Fast, personal, and convenient.',
    buttonLabel: 'Chat on WhatsApp',
    buttonStyle: 'whatsapp',
    action: () => window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer'),
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    iconBg: 'linear-gradient(135deg, #6366F1, #38BDF8)',
    glow: 'rgba(99, 102, 241, 0.2)',
    badge: 'PRIMARY',
    title: 'Project Inquiry Form',
    description: 'Share your project requirements with us through our structured inquiry form.',
    buttonLabel: 'Submit Your Inquiry',
    buttonStyle: 'primary',
    action: openGoogleForm,
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: 'linear-gradient(135deg, #A78BFA, #6366F1)',
    glow: 'rgba(167, 139, 250, 0.2)',
    badge: null,
    title: 'Email',
    description: 'Send us your project questions and business requirements by email.',
    buttonLabel: 'Send an Email',
    buttonStyle: 'secondary',
    action: () => window.location.href = `mailto:${siteConfig.email}`,
    highlight: false,
  },
]

function ContactCard({ card, index }) {
  return (
    <div
      className="animate-on-scroll group relative rounded-2xl p-6 lg:p-8 flex flex-col transition-all duration-300"
      style={{
        transitionDelay: `${index * 100}ms`,
        background: card.highlight
          ? 'rgba(16, 26, 46, 0.7)'
          : 'rgba(16, 26, 46, 0.4)',
        border: card.highlight
          ? '1px solid rgba(99, 102, 241, 0.2)'
          : '1px solid rgba(255, 255, 255, 0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = `0 12px 48px ${card.glow}`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Badge */}
      {card.badge && (
        <div className="absolute top-4 right-4">
          <span
            className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
            style={{
              background: 'rgba(99,102,241,0.15)',
              color: '#A78BFA',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            {card.badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ background: card.iconBg, boxShadow: `0 8px 24px ${card.glow}` }}
      >
        {card.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-text-primary mb-2">{card.title}</h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">{card.description}</p>

      {/* Button */}
      <button
        onClick={card.action}
        className={`w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
          card.buttonStyle === 'whatsapp'
            ? 'text-white hover:opacity-90'
            : card.buttonStyle === 'primary'
            ? 'text-white hover:opacity-90'
            : 'text-text-primary border border-white/10 hover:border-white/20 hover:bg-white/5'
        }`}
        style={
          card.buttonStyle !== 'secondary'
            ? { background: card.iconBg, boxShadow: `0 4px 20px ${card.glow}` }
            : {}
        }
      >
        {card.buttonLabel}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <Section id="contact" className="bg-bg-secondary/20">
      <BackgroundOrbs />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-badge mb-4 inline-flex">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight tracking-tight">
            Let's Talk About Your{' '}
            <span className="text-gradient">Next Project.</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question or looking for a digital solution? Reach out to our team through any of these channels.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {contactCards.map((card, i) => (
            <ContactCard key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Response time note */}
        <div className="mt-10 text-center animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
            style={{
              background: 'rgba(16, 26, 46, 0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-secondary">
              We typically respond within <span className="text-text-primary font-semibold">a few hours</span> during business hours.
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}
