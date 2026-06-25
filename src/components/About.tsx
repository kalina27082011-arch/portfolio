import { siteContent } from '../content/siteContent'
import { Section, SectionHeader } from './Section'

export function About() {
  const { about } = siteContent

  return (
    <Section id="about" className="py-24 md:py-32 bg-cream-100/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={about.title} subtitle={about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg text-ink leading-relaxed">{about.story}</p>
            <p className="text-ink-muted leading-relaxed">{about.focus}</p>
            <p className="text-ink-muted leading-relaxed border-l-2 border-accent pl-6 italic font-display text-xl">
              {about.whyMe}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {about.advantages.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-cream-50 rounded-xl border border-cream-200 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent text-sm font-semibold">{index + 1}</span>
                </div>
                <h3 className="font-medium text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
