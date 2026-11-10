import { Monitor, BrainCircuit, Layers, BarChart2 } from 'lucide-react'
import { Section, SectionHeader, BackgroundOrbs, FeatureItem } from './ui'
import { openGoogleForm } from '../config/siteConfig'

const services = [
  {
    icon: Monitor,
    title: 'Website Development & Design',
    description:
      'Professional, responsive, and high-performing websites that make your business stand out online.',
    features: [
      'Business Websites',
      'Landing Pages',
      'E-commerce Websites',
      'Portfolio Websites',
      'Website Redesign',
      'Responsive UI/UX',
    ],
    gradient: 'from-accent-indigo to-blue-600',
    glow: 'rgba(99,102,241,0.25)',
    accent: '#6366F1',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Business Automation',
    description:
      'Reduce repetitive work and improve productivity with intelligent automation and AI-powered solutions.',
    features: [
      'AI Chatbot Integration',
      'Workflow Automation',
      'Customer Enquiry Automation',
      'WhatsApp Business Integration',
      'Lead Management',
      'Automated Notifications',
    ],
    gradient: 'from-accent-sky to-cyan-500',
    glow: 'rgba(56,189,248,0.25)',
    accent: '#38BDF8',
  },
  {
    icon: Layers,
    title: 'Custom Software & Business Solutions',
    description:
      'Custom digital applications designed to simplify your business processes and daily operations.',
    features: [
      'CRM Systems',
      'Inventory Management',
      'Customer Management',
      'Admin Dashboards',
      'Management Systems',
      'Custom Web Applications',
    ],
    gradient: 'from-accent-violet to-purple-600',
    glow: 'rgba(167,139,250,0.25)',
    accent: '#A78BFA',
  },
  {
    icon: BarChart2,
    title: 'Data Analytics & Dashboards',
    description:
      'Turn business data into meaningful insights using interactive dashboards and automated reporting.',
    features: [
      'Power BI Dashboards',
      'Sales Analytics',
      'Business Reports',
      'Excel Automation',
      'Data Visualization',
      'Performance Tracking',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
    accent: '#10B981',
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <div
      className="animate-on-scroll group relative rounded-2xl p-6 lg:p-7 transition-all duration-300 cursor-default"
      style={{
        transitionDelay: `${index * 80}ms`,
        background: 'rgba(16, 26, 46, 0.5)',
        border: '1px solid rgba(99, 102, 241, 0.12)',
        backdropFilter: 'blur(12px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${service.accent}40`
        e.currentTarget.style.boxShadow = `0 8px 48px ${service.glow}, 0 0 0 1px ${service.accent}20`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.12)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Top glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}60, transparent)` }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-base font-bold text-text-primary leading-tight">{service.title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5">{service.description}</p>

      {/* Feature list */}
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
        {service.features.map((f) => (
          <FeatureItem key={f}>{f}</FeatureItem>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={openGoogleForm}
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group/btn"
        style={{ color: service.accent }}
        aria-label={`Learn more about ${service.title}`}
      >
        Get Started
        <svg
          className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  )
}

export default function Services() {
  return (
    <Section id="services" className="bg-bg-secondary/30">
      <BackgroundOrbs />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="WHAT WE DO"
          title="Everything Your Business Needs to Go Digital."
          description="From establishing your online presence to automating business operations, we provide technology solutions designed around your goals."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-text-secondary text-sm mb-4">
            Not sure which service fits your business?
          </p>
          <button
            onClick={openGoogleForm}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-indigo hover:text-accent-sky transition-colors duration-200 underline underline-offset-4"
          >
            Talk to our team — we'll help you decide
          </button>
        </div>
      </div>
    </Section>
  )
}
