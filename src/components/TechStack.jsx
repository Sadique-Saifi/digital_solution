import { Section, SectionHeader, BackgroundOrbs } from './ui'

// Tech stack data — easily editable
const techCategories = [
  {
    label: 'Frontend',
    color: '#6366F1',
    icon: '🎨',
    techs: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    label: 'Backend',
    color: '#38BDF8',
    icon: '⚙️',
    techs: [
      { name: 'Python', icon: '🐍' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Node.js', icon: '🟢' },
    ],
  },
  {
    label: 'Database',
    color: '#A78BFA',
    icon: '🗄️',
    techs: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    label: 'AI & Automation',
    color: '#10B981',
    icon: '🤖',
    techs: [
      { name: 'Python AI/ML', icon: '🧠' },
      { name: 'AI API Integrations', icon: '🔗' },
      { name: 'Workflow Automation', icon: '⚡' },
      { name: 'AI Chatbots', icon: '💬' },
    ],
  },
  {
    label: 'Analytics',
    color: '#F59E0B',
    icon: '📊',
    techs: [
      { name: 'Power BI', icon: '📊' },
      { name: 'Python', icon: '🐍' },
      { name: 'Pandas', icon: '🐼' },
    ],
  },
]

function TechPill({ name, icon, color }) {
  const isEmoji = isNaN(Number(icon)) && icon.length <= 2 && /\p{Emoji}/u.test(icon)
  const isText = !isEmoji && icon.length <= 3

  return (
    <div
      className="tech-pill group flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-text-secondary cursor-default"
      style={{
        background: 'rgba(16,26,46,0.6)',
        border: `1px solid rgba(255,255,255,0.08)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}40`
        e.currentTarget.style.background = `${color}08`
        e.currentTarget.style.color = '#F8FAFC'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 4px 20px ${color}20`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.background = 'rgba(16,26,46,0.6)'
        e.currentTarget.style.color = '#94A3B8'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      <span
        className="text-sm flex-shrink-0 flex items-center justify-center w-5 h-5"
        style={isText ? { fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, color } : {}}
      >
        {icon}
      </span>
      <span className="whitespace-nowrap">{name}</span>
    </div>
  )
}

function CategorySection({ category, index }) {
  return (
    <div
      className="animate-on-scroll"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Category label */}
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          style={{
            background: `${category.color}15`,
            border: `1px solid ${category.color}25`,
          }}
        >
          {category.icon}
        </div>
        <div>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: category.color }}
          >
            {category.label}
          </span>
        </div>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {category.techs.map((tech) => (
          <TechPill key={tech.name} name={tech.name} icon={tech.icon} color={category.color} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <Section id="tech" className="bg-bg-secondary/30">
      <BackgroundOrbs />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="OUR TECH STACK"
          title="Powered by Modern Technology."
          description="We use industry-proven, modern technologies to build reliable, scalable, and maintainable digital products."
          className="mb-14"
        />

        {/* Tech grid */}
        <div
          className="rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: 'rgba(16, 26, 46, 0.5)',
            border: '1px solid rgba(99, 102, 241, 0.12)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {techCategories.map((cat, i) => (
              <CategorySection key={cat.label} category={cat} index={i} />
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-text-secondary/50 mt-6 animate-on-scroll">
          Our tech stack is continuously updated. All listed technologies are actively used in our projects.
        </p>
      </div>
    </Section>
  )
}
