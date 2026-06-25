import { siteContent } from '../content/siteContent'
import { Section, SectionHeader } from './Section'

export function Portfolio() {
  const { portfolio } = siteContent

  return (
    <Section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-cream-50 border border-cream-200 hover:shadow-xl hover:border-accent/20 transition-all duration-300"
            >
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/5" />
                <span className="font-display text-6xl font-bold text-ink/10 group-hover:text-accent/20 transition-colors">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-cream-200 text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-cream-200">
                  <a
                    href={project.demoUrl}
                    className="text-sm font-medium text-accent hover:text-accent-dark transition-colors flex items-center gap-1.5"
                  >
                    {portfolio.demoLabel}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-sm font-medium text-ink-muted hover:text-ink transition-colors flex items-center gap-1.5"
                  >
                    {portfolio.githubLabel}
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.795-.735-.405-1.02-1.005-1.29-1.005-1.29-.81-.555.06-.555.06-.555 1.005.075 1.605 1.005 1.605 1.005.9 1.605 2.385 1.14 2.97.87.09-.675.315-1.14.57-1.395-2.385-.27-4.905-1.185-4.905-5.265 0-1.155.405-2.115 1.065-2.865-.105-.27-.465-1.335.105-2.685 0 0 .87-.27 2.85 1.05A9.78 9.78 0 0112 5.04c.885.015 1.785.12 2.625.345 1.98-1.32 2.85-1.05 2.85-1.05.57 1.35.21 2.415.105 2.685.66.75 1.065 1.71 1.065 2.865 0 4.095-2.52 4.995-4.905 5.265.375.33.705.945.705 1.905 0 1.365-.015 2.475-.015 2.805 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
