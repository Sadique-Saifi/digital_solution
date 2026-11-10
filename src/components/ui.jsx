import { openGoogleForm, getWhatsAppUrl } from '../config/siteConfig'

// ============================================================
// REUSABLE BUTTON COMPONENTS
// ============================================================

/** Primary gradient CTA button */
export function PrimaryButton({ children, onClick, href, className = '', icon, ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-indigo to-accent-sky hover:from-accent-indigo/90 hover:to-accent-sky/90 transition-all duration-200 shadow-lg shadow-accent-indigo/20 hover:shadow-accent-indigo/40 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo ${className}`

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        {icon && icon}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
      {icon && icon}
    </button>
  )
}

/** Secondary outlined button */
export function SecondaryButton({ children, onClick, href, className = '', ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-text-primary border border-white/15 hover:border-accent-indigo/50 hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo ${className}`

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  )
}

/** Google Form button */
export function GoogleFormButton({ children = 'Start a Project →', className = '', size = 'md' }) {
  const sizeClass = size === 'lg'
    ? 'px-8 py-4 text-base'
    : 'px-6 py-3 text-sm'

  return (
    <button
      onClick={openGoogleForm}
      className={`inline-flex items-center justify-center gap-2 ${sizeClass} rounded-xl font-semibold text-white bg-gradient-to-r from-accent-indigo to-accent-sky hover:from-accent-indigo/90 hover:to-accent-sky/90 transition-all duration-200 shadow-lg shadow-accent-indigo/20 hover:shadow-accent-indigo/40 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-indigo ${className}`}
    >
      {children}
    </button>
  )
}

/** WhatsApp button */
export function WhatsAppCTAButton({ children = 'Chat on WhatsApp', className = '', size = 'md' }) {
  const sizeClass = size === 'lg'
    ? 'px-8 py-4 text-base'
    : 'px-6 py-3 text-sm'

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 ${sizeClass} rounded-xl font-semibold text-white border border-white/15 hover:border-green-400/50 hover:bg-green-500/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${className}`}
    >
      {/* WhatsApp SVG */}
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {children}
    </a>
  )
}

// ============================================================
// SECTION WRAPPER
// ============================================================
export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

// ============================================================
// SECTION HEADER
// ============================================================
export function SectionHeader({ badge, title, description, centered = true, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className} animate-on-scroll`}>
      {badge && (
        <div className={`${centered ? 'flex justify-center' : ''} mb-4`}>
          <span className="section-badge">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-text-secondary text-base sm:text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

// ============================================================
// FEATURE LIST ITEM
// ============================================================
export function FeatureItem({ children }) {
  return (
    <li className="flex items-center gap-2 text-sm text-text-secondary">
      <svg className="w-4 h-4 text-accent-indigo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </li>
  )
}

// ============================================================
// DECORATIVE BACKGROUND ORBS
// ============================================================
export function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
