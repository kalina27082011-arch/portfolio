import { siteContent } from '../content/siteContent'
import { Section, SectionHeader } from './Section'

export function Process() {
  const { process } = siteContent

  return (
    <Section id="process" className="py-24 md:py-32 bg-cream-100/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={process.title} subtitle={process.subtitle} />

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-cream-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.steps.map((step, index) => (
              <div key={step.number} className="relative text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream-50 border-2 border-accent text-accent font-display text-xl font-semibold mb-5 relative z-10 mx-auto lg:mx-0">
                  {step.number}
                </div>
                <h3 className="font-medium text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
                {index < process.steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute top-8 -right-4 text-cream-200 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
