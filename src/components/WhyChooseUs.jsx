import {
  Puzzle,
  Cpu,
  DollarSign,
  Zap,
  UserCheck,
  Headphones,
} from 'lucide-react'
import { Section, SectionHeader, BackgroundOrbs } from './ui'

const benefits = [
  {
    icon: Puzzle,
    title: 'Tailored Solutions',
    description:
      'We develop solutions based on your actual business requirements — not off-the-shelf templates.',
    color: '#6366F1',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description:
      'We use modern development tools and technologies to build scalable, maintainable digital products.',
    color: '#38BDF8',
  },
  {
    icon: DollarSign,
    title: 'Affordable & Flexible',
    description:
      'Our solutions are designed to suit growing businesses with different requirements and budgets.',
    color: '#A78BFA',
  },
  {
    icon: Zap,
    title: 'Automation First',
    description:
      'We identify repetitive tasks and help you simplify business operations using intelligent automation.',
    color: '#10B981',
  },
  {
    icon: UserCheck,
    title: 'User-Focused Design',
    description:
      'We prioritize clean interfaces and simple user experiences that your team and customers will love.',
    color: '#F59E0B',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description:
      'We provide technical assistance and maintenance for delivered solutions as your business grows.',
    color: '#EC4899',
  },
]

function BenefitCard({ benefit, index }) {
  const Icon = benefit.icon

  return (
    <div
      className="animate-on-scroll group relative rounded-2xl p-6 transition-all duration-300"
      style={{
        transitionDelay: `${index * 70}ms`,
        background: 'rgba(16, 26, 46, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(16, 26, 46, 0.7)'
        e.currentTarget.style.borderColor = `${benefit.color}30`
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = `0 8px 40px ${benefit.color}15`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(16, 26, 46, 0.4)'
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Number indicator */}
      <div className="absolute top-4 right-4 text-5xl font-black opacity-[0.04] text-white leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{
          background: `${benefit.color}15`,
          border: `1px solid ${benefit.color}25`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: benefit.color }} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className="text-base font-bold text-text-primary mb-2">{benefit.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>

      {/* Accent bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${benefit.color}60, transparent)` }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-bg-secondary/20">
      <BackgroundOrbs />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column: Header */}
          <div>
            <SectionHeader
              badge="WHY PARTNER WITH US"
              title="More Than a Service Provider. Your Technology Partner."
              description="We work alongside your business to understand your challenges, build the right solutions, and support you as you grow."
              centered={false}
              className="mb-8"
            />

            {/* Visual accent element */}
            <div
              className="animate-on-scroll rounded-2xl p-6 mt-8"
              style={{
                background: 'rgba(99,102,241,0.06)',
                border: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-sky flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">We're technology-first, business-focused</p>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Our team brings both technical expertise and business understanding to every project. 
                    We don't just build — we think about how technology can genuinely improve your operations and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
