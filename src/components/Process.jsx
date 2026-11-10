import { Section, BackgroundOrbs } from './ui'

const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding Your Business',
    description:
      'We start by listening. We understand your business, requirements, challenges, and goals before writing a single line of code.',
    items: ['Requirements gathering', 'Business goal alignment', 'Technical assessment', 'Project scoping'],
    color: '#6366F1',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Plan & Design',
    subtitle: 'Blueprint & Experience Design',
    description:
      'We create the solution structure, user experience design, and development roadmap so you know exactly what to expect.',
    items: ['Solution architecture', 'UI/UX wireframes', 'Technology selection', 'Project roadmap'],
    color: '#38BDF8',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Develop & Launch',
    subtitle: 'Build, Test & Deploy',
    description:
      'Our team develops, thoroughly tests, and launches your digital solution — keeping you involved throughout the process.',
    items: ['Development sprints', 'Quality assurance testing', 'Client review & feedback', 'Deployment & launch'],
    color: '#A78BFA',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Support & Improve',
    subtitle: 'Ongoing Partnership',
    description:
      'We provide support, maintenance, and continuous improvements as your business grows and your needs evolve.',
    items: ['Technical support', 'Regular updates', 'Performance monitoring', 'Feature enhancements'],
    color: '#10B981',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

function StepCard({ step, index, isLast }) {
  return (
    <div className="animate-on-scroll flex flex-col items-center text-center" style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Step number icon */}
      <div className="relative mb-6">
        {/* Outer ring */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: `${step.color}10`,
            border: `1px solid ${step.color}30`,
          }}
        >
          {/* Inner circle */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${step.color}CC, ${step.color}99)`,
              boxShadow: `0 0 30px ${step.color}30`,
            }}
          >
            {step.icon}
          </div>
        </div>

        {/* Step number badge */}
        <div
          className="absolute -top-1 -right-1 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center text-white shadow-md"
          style={{ background: step.color }}
        >
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-xs">
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: step.color }}>
          Step {step.number}
        </p>
        <h3 className="text-xl font-bold text-text-primary mb-1">{step.title}</h3>
        <p className="text-xs font-medium text-text-secondary/70 mb-3">{step.subtitle}</p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">{step.description}</p>

        {/* Sub-items */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {step.items.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${step.color}10`,
                color: step.color,
                border: `1px solid ${step.color}20`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <Section id="process">
      <BackgroundOrbs />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-badge mb-4 inline-flex">OUR PROCESS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight tracking-tight">
            From Your Idea to a Working{' '}
            <span className="text-gradient">Digital Solution.</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A simple, transparent process designed to deliver results efficiently and collaboratively.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              background: 'linear-gradient(90deg, #6366F1, #38BDF8, #A78BFA, #10B981)',
              opacity: 0.3,
            }}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center animate-on-scroll">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-sm"
            style={{
              background: 'rgba(99,102,241,0.06)',
              border: '1px solid rgba(99,102,241,0.15)',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-secondary">
              Most projects are delivered within{' '}
              <span className="text-text-primary font-semibold">2–6 weeks</span> depending on complexity.
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}
