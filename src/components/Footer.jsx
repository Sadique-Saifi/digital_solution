import { openGoogleForm, getWhatsAppUrl, siteConfig } from '../config/siteConfig'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Website Development',
  'AI Automation',
  'Custom Software',
  'Data Analytics',
]

function scrollTo(href) {
  const target = document.querySelector(href)
  if (target) {
    const offset = 80
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #080D1A, #060A14)',
        borderTop: '1px solid rgba(99, 102, 241, 0.1)',
      }}
    >
      {/* Top separator gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(56,189,248,0.4), transparent)' }}
        aria-hidden="true"
      />

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="flex items-center gap-3 mb-4 group"
            >
              <div className="relative w-9 h-9 flex-shrink-0">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-sky opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-sm">{siteConfig.agencyInitials}</span>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              </div>
              <span className="font-bold text-base text-text-primary">{siteConfig.agencyName}</span>
            </a>

            <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-sm">
              Helping businesses grow through digital experiences, intelligent automation, and modern technology.
            </p>

            <div className="text-xs text-text-secondary/70 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-sky flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{siteConfig.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-sm text-text-secondary hover:text-accent-sky transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-indigo/40 group-hover:bg-accent-sky transition-colors duration-200 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="text-sm text-text-secondary hover:text-accent-sky transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-sky/40 group-hover:bg-accent-sky transition-colors duration-200 flex-shrink-0" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-5">Contact Details</h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-green-400 transition-colors duration-200 group"
              >
                <div className="w-6 h-6 rounded-lg bg-green-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/25 transition-colors">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span>{siteConfig.displayPhone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent-violet transition-colors duration-200 group"
              >
                <div className="w-6 h-6 rounded-lg bg-accent-violet/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-violet/25 transition-colors">
                  <svg className="w-3.5 h-3.5 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{siteConfig.email}</span>
              </a>

              <button
                onClick={openGoogleForm}
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent-indigo transition-colors duration-200 group"
              >
                <div className="w-6 h-6 rounded-lg bg-accent-indigo/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-indigo/25 transition-colors">
                  <svg className="w-3.5 h-3.5 text-accent-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span>Project Inquiry Form</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs text-text-secondary/60">
            © {year} {siteConfig.agencyName}. All Rights Reserved.
          </p>
          <p className="text-xs text-text-secondary/40">
            {siteConfig.address}
          </p>
        </div>
      </div>
    </footer>
  )
}
