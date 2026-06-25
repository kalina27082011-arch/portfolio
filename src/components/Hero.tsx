import { siteContent } from '../content/siteContent'

export function Hero() {
  const { hero } = siteContent

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
              {hero.role}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink leading-[1.1] animate-fade-up">
              {hero.firstName}
              <br />
              <span className="italic text-accent">{hero.lastName}</span>
            </h1>
            <p className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed font-light animate-fade-up [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
              {hero.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 bg-accent text-cream-50 rounded-full font-medium hover:bg-accent-dark transition-colors duration-300 shadow-lg shadow-accent/20"
              >
                {hero.ctaContact}
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="px-8 py-3.5 border border-ink/20 text-ink rounded-full font-medium hover:border-accent hover:text-accent transition-colors duration-300"
              >
                {hero.ctaPortfolio}
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/20 rounded-2xl rotate-3" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-cream-200 to-accent-light/30 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-accent/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <img
                  src="/avatar.jpg"
                  alt={hero.avatarAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-faint animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-ink-faint/40 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
