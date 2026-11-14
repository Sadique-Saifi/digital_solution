import { Monitor, BrainCircuit, Layers, BarChart2 } from 'lucide-react'
import { Section, SectionHeader, BackgroundOrbs, FeatureItem } from './ui'
import { openGoogleForm } from '../config/siteConfig'

const services = [
  {
    icon: Monitor,
    title: 'Website Development & Design',
    description:
      'Professional, responsive, and high-performing websites that make your business stand out online.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
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
      className="animate-on-scroll group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-default flex flex-col justify-between"
      style={{
        transitionDelay: `${index * 80}ms`,
        background: 'rgba(16, 26, 46, 0.65)',
        border: '1px solid rgba(99, 102, 241, 0.15)',
        backdropFilter: 'blur(16px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${service.accent}50`
        e.currentTarget.style.boxShadow = `0 12px 48px ${service.glow}, 0 0 0 1px ${service.accent}30`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.15)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Top Image Banner */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark enterprise gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101A2E] via-[#101A2E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101A2E]/80 via-transparent to-transparent" />

        {/* Icon Floating on Image */}
        <div className="absolute bottom-3 left-6">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg ring-2 ring-white/10 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-7 pt-2 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h3 className="text-base font-bold text-text-primary leading-tight mb-2.5">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Feature list */}
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-6">
            {service.features.map((f) => (
              <FeatureItem key={f}>{f}</FeatureItem>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={openGoogleForm}
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group/btn pt-3 border-t border-white/5"
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
    </div>
  )
}

export default function Services() {
  return (
    <Section id="services" className="bg-bg-secondary/40 relative">
      {/* Subtle enterprise network background texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-luminosity bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80')`,
        }}
        aria-hidden="true"
      />

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
