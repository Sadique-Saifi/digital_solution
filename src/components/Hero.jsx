import { openGoogleForm, getWhatsAppUrl, siteConfig } from '../config/siteConfig'

// ============================================================
// ANIMATED HERO DASHBOARD VISUAL
// ============================================================

function FloatingCard({ className, children, delay = '0s' }) {
  return (
    <div
      className={`absolute glass rounded-2xl p-3 shadow-card animate-float ${className}`}
      style={{ animationDelay: delay, animationDuration: '5s' }}
    >
      {children}
    </div>
  )
}

function HeroDashboardVisual() {
  return (
    <div className="relative w-full h-[520px] lg:h-[580px] flex items-center justify-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Central dashboard */}
      <div
        className="relative w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(16,26,46,0.95) 0%, rgba(8,13,26,0.95) 100%)',
          border: '1px solid rgba(99,102,241,0.3)',
          boxShadow: '0 0 60px rgba(99,102,241,0.2), 0 25px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Dashboard header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 text-xs text-text-secondary font-mono">{siteConfig.agencyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.dashboard</span>
        </div>

        <div className="p-4 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Leads', value: '247', color: '#6366F1' },
              { label: 'Sales', value: '89%', color: '#38BDF8' },
              { label: 'Tasks', value: '12', color: '#A78BFA' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-2.5 text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="text-base font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[10px] text-text-secondary mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mini chart */}
          <div
            className="rounded-xl p-3"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-text-secondary">Monthly Growth</span>
              <span className="text-xs text-green-400 font-semibold">↑ 24%</span>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[30, 50, 40, 70, 55, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(to top, rgba(99,102,241,0.8), rgba(56,189,248,0.6))`,
                    opacity: 0.6 + (i / 20),
                  }}
                />
              ))}
            </div>
          </div>

          {/* Automation nodes */}
          <div
            className="rounded-xl p-3"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="text-xs font-medium text-text-secondary mb-2">Automation Flow</div>
            <div className="flex items-center gap-1.5">
              {['Enquiry', '→', 'AI Filter', '→', 'CRM', '→', 'WhatsApp'].map((item, i) => (
                <span
                  key={i}
                  className={`text-[9px] font-medium ${
                    item === '→'
                      ? 'text-accent-indigo/60'
                      : 'px-1.5 py-0.5 rounded bg-accent-indigo/15 text-accent-sky'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating card: Website preview */}
      <FloatingCard
        className="-top-4 -left-4 sm:-left-12 w-44"
        delay="0s"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-sky flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-text-primary">Website Live</span>
        </div>
        <div className="flex gap-1 mb-1.5">
          {['bg-accent-indigo/40', 'bg-accent-sky/30'].map((c, i) => (
            <div key={i} className={`h-1.5 rounded-full ${c} ${i === 0 ? 'flex-1' : 'w-8'}`} />
          ))}
        </div>
        <div className="flex gap-1">
          {['bg-white/10', 'bg-white/5', 'bg-white/8'].map((c, i) => (
            <div key={i} className={`h-1 rounded-full ${c} flex-1`} />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-400">Published</span>
        </div>
      </FloatingCard>

      {/* Floating card: Enquiry notification */}
      <FloatingCard
        className="top-16 -right-4 sm:-right-10 w-48"
        delay="1.5s"
      >
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-text-primary">New Enquiry</p>
            <p className="text-[10px] text-text-secondary mt-0.5">"I need a website for my business..."</p>
            <p className="text-[10px] text-accent-sky mt-1 font-medium">Just now • WhatsApp</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating card: AI automation */}
      <FloatingCard
        className="-bottom-4 -left-4 sm:-left-14 w-44"
        delay="3s"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-accent-indigo flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-text-primary">AI Agent</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-text-secondary">Tasks Automated</span>
            <span className="text-[10px] font-bold text-accent-violet">1,247</span>
          </div>
          <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet" />
          </div>
          <span className="text-[9px] text-green-400">Saving ~6h/day</span>
        </div>
      </FloatingCard>

      {/* Floating card: Analytics */}
      <FloatingCard
        className="bottom-12 -right-4 sm:-right-12 w-40"
        delay="2s"
      >
        <div className="text-xs font-semibold text-text-primary mb-2">Conversion Rate</div>
        <div className="flex items-end gap-0.5 h-10 mb-1">
          {[40, 65, 50, 80, 70, 95, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: i === 6
                  ? 'linear-gradient(to top, #6366F1, #38BDF8)'
                  : 'rgba(99,102,241,0.3)',
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-text-secondary">This week</span>
          <span className="text-[10px] text-green-400 font-bold">↑ 32%</span>
        </div>
      </FloatingCard>

      {/* Connection dots */}
      {[
        { top: '20%', left: '15%', size: 2, color: '#6366F1' },
        { top: '70%', left: '20%', size: 2, color: '#38BDF8' },
        { top: '30%', right: '10%', size: 2, color: '#A78BFA' },
        { top: '75%', right: '15%', size: 1.5, color: '#6366F1' },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${dot.size * 4}px`,
            height: `${dot.size * 4}px`,
            top: dot.top,
            left: dot.left,
            right: dot.right,
            background: dot.color,
            boxShadow: `0 0 10px ${dot.color}80`,
            animationDelay: `${i * 0.5}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

// ============================================================
// HERO SECTION
// ============================================================

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Grid */}
        <div className="absolute inset-0 hero-grid-bg opacity-60" />

        {/* Primary orb */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'gradientPulse 6s ease-in-out infinite',
          }}
        />

        {/* Secondary orb */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'gradientPulse 8s ease-in-out 2s infinite',
          }}
        />

        {/* Top gradient */}
        <div
          className="absolute top-0 inset-x-0 h-32"
          style={{ background: 'linear-gradient(to bottom, rgba(8,13,26,1) 0%, transparent 100%)' }}
        />

        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 inset-x-0 h-32"
          style={{ background: 'linear-gradient(to top, rgba(8,13,26,1) 0%, transparent 100%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-on-scroll"
              style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-sky animate-pulse" />
              <span className="text-xs font-semibold text-accent-sky tracking-widest uppercase">
                Your Digital Growth Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight text-text-primary mb-6 animate-on-scroll">
              Transform Your Business With{' '}
              <span className="text-gradient">
                Smarter Digital Solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-on-scroll">
              We build powerful websites, intelligent automation systems, and digital solutions
              that help businesses attract customers, simplify operations, and grow faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10 animate-on-scroll">
              <button
                onClick={openGoogleForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-accent-indigo to-accent-sky hover:from-accent-indigo/90 hover:to-accent-sky/90 transition-all duration-200 shadow-xl shadow-accent-indigo/25 hover:shadow-accent-indigo/45 hover:-translate-y-1 active:translate-y-0"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-text-primary border border-white/15 hover:border-accent-indigo/50 hover:bg-white/5 transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
              >
                Explore Our Services
              </a>
            </div>

            {/* Value Props */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 animate-on-scroll">
              {[
                'Custom-Built Solutions',
                'Smart Business Automation',
                'Dedicated Technical Support',
              ].map((prop) => (
                <div key={prop} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-indigo/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-text-secondary whitespace-nowrap">{prop}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="relative hidden sm:block animate-on-scroll">
            <HeroDashboardVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-text-secondary/50 hover:text-text-secondary transition-colors group"
            aria-label="Scroll to services"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center pt-1.5 group-hover:border-accent-indigo/40 transition-colors">
              <div className="w-1 h-2 rounded-full bg-accent-indigo animate-bounce-subtle" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
