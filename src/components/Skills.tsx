import { siteContent } from '../content/siteContent'
import { Section, SectionHeader } from './Section'

export function Skills() {
  const { skills } = siteContent

  return (
    <Section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={skills.title} subtitle={skills.subtitle} />

        <div className="grid md:grid-cols-3 gap-8">
          {skills.categories.map((category) => (
            <div
              key={category.name}
              className="group p-8 rounded-2xl bg-cream-100/60 border border-cream-200 hover:border-accent/20 transition-all duration-300"
            >
              <h3 className="font-display text-2xl font-semibold text-ink mb-6 group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
