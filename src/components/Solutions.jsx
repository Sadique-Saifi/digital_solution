import { GraduationCap, Building2, ShoppingBag, Briefcase } from 'lucide-react'
import { Section, SectionHeader, BackgroundOrbs } from './ui'

const solutions = [
  {
    icon: GraduationCap,
    title: 'Education & Coaching Institutes',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    description:
      'Streamline student management and boost admissions with smart digital tools built for educational institutions.',
    items: [
      { label: 'Student Enquiry Management', icon: '📋' },
      { label: 'Admission Lead Tracking', icon: '🎯' },
      { label: 'Institute Websites', icon: '🌐' },
      { label: 'Student Management Dashboards', icon: '📊' },
    ],
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
  },
  {
    icon: Building2,
    title: 'Real Estate Agencies',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description:
      'Manage properties, track leads, and automate customer follow-ups with purpose-built real estate technology.',
    items: [
      { label: 'Property Listing Websites', icon: '🏠' },
      { label: 'Lead Management', icon: '🎯' },
      { label: 'Customer Follow-ups', icon: '📞' },
      { label: 'Property Management Dashboards', icon: '📊' },
    ],
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.2)',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    description:
      'Take your products online, manage inventory efficiently, and gain insights from your sales data.',
    items: [
      { label: 'Online Store Development', icon: '🛒' },
      { label: 'Inventory Management', icon: '📦' },
      { label: 'Sales Analytics', icon: '📈' },
      { label: 'Order Management', icon: '🚚' },
    ],
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
  },
  {
    icon: Briefcase,
    title: 'Service-Based Businesses',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description:
      'Build a strong online presence, manage appointments, and handle customer relationships effortlessly.',
    items: [
      { label: 'Business Websites', icon: '🌐' },
      { label: 'Appointment Management', icon: '📅' },
      { label: 'Customer Relationship Management', icon: '🤝' },
      { label: 'Automated Enquiry Handling', icon: '🤖' },
    ],
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
]

function SolutionCard({ solution, index }) {
  const Icon = solution.icon

  return (
    <div
      className="animate-on-scroll group relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
      style={{
        transitionDelay: `${index * 80}ms`,
        background: 'rgba(16, 26, 46, 0.6)',
        border: `1px solid ${solution.border}`,
        backdropFilter: 'blur(16px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = `0 12px 48px ${solution.color}20`
        e.currentTarget.style.borderColor = `${solution.color}50`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = solution.border
      }}
    >
      {/* Realistic Industry Photography Banner */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101A2E] via-[#101A2E]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101A2E]/80 via-transparent to-transparent" />

        {/* Floating icon badge */}
        <div
          className="absolute bottom-3 left-6 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 shadow-md ring-1 ring-white/10"
          style={{ background: `${solution.color}25`, border: `1px solid ${solution.color}40`, backdropFilter: 'blur(8px)' }}
        >
          <Icon className="w-6 h-6" style={{ color: solution.color }} strokeWidth={1.8} />
        </div>
      </div>

      <div className="p-6 lg:p-7 pt-2 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h3 className="text-lg font-bold text-text-primary mb-2">{solution.title}</h3>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-5">{solution.description}</p>

          {/* Solution items */}
          <ul className="space-y-2.5">
            {solution.items.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-xs"
                  style={{ background: `${solution.color}15` }}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-text-secondary">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover accent line bottom */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${solution.color}60, transparent)` }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function Solutions() {
  return (
    <Section id="solutions">
      <BackgroundOrbs />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SOLUTIONS FOR EVERY BUSINESS"
          title="Technology That Solves Real Business Problems."
          description="We understand that every industry has unique challenges. Our solutions are tailored to match your business context, goals, and operations."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} solution={solution} index={i} />
          ))}
        </div>

        {/* Industry tag cloud */}
        <div className="mt-12 animate-on-scroll">
          <p className="text-center text-xs font-medium text-text-secondary/60 uppercase tracking-widest mb-4">
            We also work with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Healthcare', 'Restaurants', 'Logistics', 'Finance & Accounting',
              'Photography Studios', 'Law Firms', 'Fitness & Wellness', 'Travel Agencies'
            ].map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-text-secondary border border-white/8 bg-white/3 hover:bg-white/8 hover:text-text-primary transition-all duration-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
