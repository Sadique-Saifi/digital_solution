import { openGoogleForm, getWhatsAppUrl } from '../config/siteConfig'

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Base */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(8,13,26,0) 50%, rgba(56,189,248,0.12) 100%)',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Large glow left */}
        <div
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Large glow right */}
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Decorative orbs */}
        <div
          className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-accent-indigo animate-pulse"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-8 right-1/3 w-1.5 h-1.5 rounded-full bg-accent-sky animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent-violet animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-on-scroll"
          style={{
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.25)',
          }}
        >
          <span className="text-lg">💡</span>
          <span className="text-xs font-semibold text-accent-sky tracking-widest uppercase">
            Ready to get started?
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-text-primary mb-6 animate-on-scroll">
          Have an Idea?{' '}
          <span className="text-gradient">Let's Build Something Amazing.</span>
        </h2>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-on-scroll">
          Whether you need a professional website, a smarter business system, or AI-powered automation,
          our team is ready to help you take the next step.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-on-scroll">
          <button
            onClick={openGoogleForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-accent-indigo to-accent-sky hover:from-accent-indigo/90 hover:to-accent-sky/90 transition-all duration-200 shadow-xl shadow-accent-indigo/25 hover:shadow-accent-indigo/45 hover:-translate-y-1 active:translate-y-0"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/15 hover:border-green-400/50 hover:bg-green-500/8 transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
          >
            {/* WhatsApp icon */}
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat With Us on WhatsApp
          </a>
        </div>

        {/* Supporting line */}
        <p className="text-text-secondary/60 text-sm animate-on-scroll">
          Tell us about your idea. Let's explore the possibilities together.
        </p>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 animate-on-scroll">
          {[
            { icon: '⚡', text: 'Fast Response' },
            { icon: '🔒', text: 'Your data is safe' },
            { icon: '💬', text: 'Free Consultation' },
            { icon: '🤝', text: 'No commitment required' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs font-medium text-text-secondary/60">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
