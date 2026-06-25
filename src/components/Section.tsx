import { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  const { ref, isInView } = useInView<HTMLSectionElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-ink-muted text-lg max-w-2xl mx-auto font-light">{subtitle}</p>
      )}
      <div className={`mt-6 h-px w-16 bg-accent ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
