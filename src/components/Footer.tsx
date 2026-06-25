import { siteContent } from '../content/siteContent'

export function Footer() {
  const { footer, contact } = siteContent
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-ink text-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold text-cream-50">{footer.name}</p>
            <p className="text-sm text-cream-200/60 mt-1">{footer.tagline}</p>
            <p className="text-xs text-cream-200/40 mt-4">© {year} {footer.name.split(' ')[0]}. Все права защищены.</p>
          </div>

          <div className="flex items-center gap-4">
            {contact.links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target={link.type !== 'email' ? '_blank' : undefined}
                rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center text-cream-200 hover:bg-accent hover:text-cream-50 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.type === 'email' && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {link.type === 'telegram' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                )}
                {link.type === 'linkedin' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {link.type === 'github' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.795-.735-.405-1.02-1.005-1.29-1.005-1.29-.81-.555.06-.555.06-.555 1.005.075 1.605 1.005 1.605 1.005.9 1.605 2.385 1.14 2.97.87.09-.675.315-1.14.57-1.395-2.385-.27-4.905-1.185-4.905-5.265 0-1.155.405-2.115 1.065-2.865-.105-.27-.465-1.335.105-2.685 0 0 .87-.27 2.85 1.05A9.78 9.78 0 0112 5.04c.885.015 1.785.12 2.625.345 1.98-1.32 2.85-1.05 2.85-1.05.57 1.35.21 2.415.105 2.685.66.75 1.065 1.71 1.065 2.865 0 4.095-2.52 4.995-4.905 5.265.375.33.705.945.705 1.905 0 1.365-.015 2.475-.015 2.805 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-cream-50/20 text-cream-200 hover:bg-accent hover:border-accent hover:text-cream-50 transition-colors duration-300 text-sm"
          >
            {footer.backToTop}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
