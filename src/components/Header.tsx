import { useEffect, useState } from 'react'
import { siteContent } from '../content/siteContent'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-cream-50/90 backdrop-blur-md shadow-sm shadow-ink/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-xl font-semibold text-ink hover:text-accent transition-colors"
        >
          {siteContent.hero.firstName}
          <span className="text-accent">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {siteContent.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-ink-muted hover:text-accent transition-colors tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-ink text-cream-50 text-sm rounded-full hover:bg-accent transition-colors duration-300"
        >
          {siteContent.hero.ctaContact}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-ink"
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-6 py-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {siteContent.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-lg text-ink-muted hover:text-accent transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-4 w-full py-3 bg-ink text-cream-50 rounded-full text-center hover:bg-accent transition-colors"
            >
              {siteContent.hero.ctaContact}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
