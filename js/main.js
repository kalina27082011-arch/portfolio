const ICONS = {
  briefcase: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>',
  star: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
  store: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
  rocket: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>',
  email: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  telegram: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  linkedin: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  github: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.795-.735-.405-1.02-1.005-1.29-1.005-1.29-.81-.555.06-.555.06-.555 1.005.075 1.605 1.005 1.605 1.005.9 1.605 2.385 1.14 2.97.87.09-.675.315-1.14.57-1.395-2.385-.27-4.905-1.185-4.905-5.265 0-1.155.405-2.115 1.065-2.865-.105-.27-.465-1.335.105-2.685 0 0 .87-.27 2.85 1.05A9.78 9.78 0 0112 5.04c.885.015 1.785.12 2.625.345 1.98-1.32 2.85-1.05 2.85-1.05.57 1.35.21 2.415.105 2.685.66.75 1.065 1.71 1.065 2.865 0 4.095-2.52 4.995-4.905 5.265.375.33.705.945.705 1.905 0 1.365-.015 2.475-.015 2.805 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
  external: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
  avatar: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  check: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
  arrowUp: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>',
  menu: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>',
}

function sectionHeader(title, subtitle) {
  return `
    <div class="section-header">
      <h2 class="section-title">${title}</h2>
      ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
      <div class="section-divider"></div>
    </div>
  `
}

function renderHeader() {
  const { hero, nav } = siteContent
  const navLinks = nav.map((item) =>
    `<button class="header__nav-link" data-scroll="${item.id}">${item.label}</button>`
  ).join('')

  const mobileLinks = nav.map((item) =>
    `<button class="header__mobile-link" data-scroll="${item.id}">${item.label}</button>`
  ).join('')

  return `
    <header class="header" id="header">
      <div class="header__inner">
        <button class="header__logo" data-scroll="hero">
          ${hero.firstName}<span class="header__logo-dot">.</span>
        </button>
        <nav class="header__nav">${navLinks}</nav>
        <button class="header__cta" data-scroll="contact">${hero.ctaContact}</button>
        <button class="header__burger" id="menu-toggle" aria-label="Меню">${ICONS.menu}</button>
      </div>
      <div class="header__mobile" id="mobile-menu">
        ${mobileLinks}
        <button class="header__mobile-cta" data-scroll="contact">${hero.ctaContact}</button>
      </div>
    </header>
  `
}

function renderHero() {
  const { hero } = siteContent
  return `
    <section class="hero" id="hero">
      <div class="hero__blob-1"></div>
      <div class="hero__blob-2"></div>
      <div class="container">
        <div class="hero__grid">
          <div>
            <p class="hero__role hero-animate">${hero.role}</p>
            <h1 class="hero__title hero-animate hero-animate-delay-1">
              ${hero.firstName}<br>
              <span class="hero__title-accent">${hero.lastName}</span>
            </h1>
            <p class="hero__desc hero-animate hero-animate-delay-1">${hero.description}</p>
            <div class="hero__actions hero-animate hero-animate-delay-2">
              <button class="btn btn--primary" data-scroll="contact">${hero.ctaContact}</button>
              <button class="btn btn--outline" data-scroll="portfolio">${hero.ctaPortfolio}</button>
            </div>
          </div>
          <div class="hero__avatar-wrap hero-animate hero-animate-delay-3">
            <div class="hero__avatar-frame">
              <div class="hero__avatar-border"></div>
              <div class="hero__avatar">
                <div class="hero__avatar-placeholder">${ICONS.avatar}</div>
                <img src="avatar.jpg" alt="${hero.avatarAlt}" onerror="this.style.display='none'">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__scroll">
        <span>Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>
  `
}

function renderAbout() {
  const { about } = siteContent
  const cards = about.advantages.map((item, i) => `
    <div class="about__card">
      <div class="about__card-num">${i + 1}</div>
      <h3 class="about__card-title">${item.title}</h3>
      <p class="about__card-desc">${item.description}</p>
    </div>
  `).join('')

  return `
    <section class="section section--alt reveal" id="about">
      <div class="container">
        ${sectionHeader(about.title, about.subtitle)}
        <div class="about__grid">
          <div class="about__text">
            <p>${about.story}</p>
            <p>${about.focus}</p>
            <p class="about__quote">${about.whyMe}</p>
          </div>
          <div class="about__cards">${cards}</div>
        </div>
      </div>
    </section>
  `
}

function renderSkills() {
  const { skills } = siteContent
  const categories = skills.categories.map((cat) => `
    <div class="skills__category">
      <h3 class="skills__category-title">${cat.name}</h3>
      <ul class="skills__list">
        ${cat.items.map((item) => `<li><span class="skills__dot"></span>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('')

  return `
    <section class="section reveal" id="skills">
      <div class="container">
        ${sectionHeader(skills.title, skills.subtitle)}
        <div class="skills__grid">${categories}</div>
      </div>
    </section>
  `
}

function renderAudience() {
  const { audience } = siteContent
  const cards = audience.cards.map((card) => `
    <div class="audience__card">
      <div class="audience__icon">${ICONS[card.icon] || ''}</div>
      <h3 class="audience__title">${card.title}</h3>
      <p class="audience__desc">${card.description}</p>
    </div>
  `).join('')

  return `
    <section class="section section--alt reveal" id="audience">
      <div class="container">
        ${sectionHeader(audience.title, audience.subtitle)}
        <div class="audience__grid">${cards}</div>
      </div>
    </section>
  `
}

function renderPortfolio() {
  const { portfolio } = siteContent
  const cards = portfolio.projects.map((project) => `
    <article class="portfolio__card">
      <div class="portfolio__thumb thumb--${project.theme}">
        <span class="portfolio__thumb-num">${String(project.id).padStart(2, '0')}</span>
      </div>
      <div class="portfolio__body">
        <h3 class="portfolio__title">${project.title}</h3>
        <p class="portfolio__desc">${project.description}</p>
        <div class="portfolio__tags">
          ${project.technologies.map((t) => `<span class="portfolio__tag">${t}</span>`).join('')}
        </div>
        <div class="portfolio__links">
          <a href="${project.demoUrl}" class="portfolio__link portfolio__link--demo">
            ${portfolio.demoLabel} ${ICONS.external}
          </a>
          <a href="${project.githubUrl}" class="portfolio__link portfolio__link--github">
            ${portfolio.githubLabel} ${ICONS.github}
          </a>
        </div>
      </div>
    </article>
  `).join('')

  return `
    <section class="section reveal" id="portfolio">
      <div class="container">
        ${sectionHeader(portfolio.title, portfolio.subtitle)}
        <div class="portfolio__grid">${cards}</div>
      </div>
    </section>
  `
}

function renderProcess() {
  const { process } = siteContent
  const steps = process.steps.map((step) => `
    <div class="process__step">
      <div class="process__step-num">${step.number}</div>
      <h3 class="process__step-title">${step.title}</h3>
      <p class="process__step-desc">${step.description}</p>
    </div>
  `).join('')

  return `
    <section class="section section--alt reveal" id="process">
      <div class="container">
        ${sectionHeader(process.title, process.subtitle)}
        <div class="process__steps">${steps}</div>
      </div>
    </section>
  `
}

function renderContact() {
  const { contact } = siteContent
  const links = contact.links.map((link) => `
    <a href="${link.href}" class="contact__link"${link.type !== 'email' ? ' target="_blank" rel="noopener noreferrer"' : ''}>
      <div class="contact__link-icon">${ICONS[link.type] || ''}</div>
      <div>
        <p class="contact__link-label">${link.label}</p>
        <p class="contact__link-value">${link.value}</p>
      </div>
    </a>
  `).join('')

  const { form } = contact

  return `
    <section class="section reveal" id="contact">
      <div class="container">
        ${sectionHeader(contact.title, contact.subtitle)}
        <div class="contact__grid">
          <div>
            <p class="contact__desc">${contact.description}</p>
            <div class="contact__links">${links}</div>
          </div>
          <div class="contact__form-wrap">
            <form id="contact-form" class="contact-form">
              <div class="form-group">
                <label class="form-label" for="name">${form.nameLabel}</label>
                <input class="form-input" type="text" id="name" name="name" placeholder="${form.namePlaceholder}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="email">${form.emailLabel}</label>
                <input class="form-input" type="email" id="email" name="email" placeholder="${form.emailPlaceholder}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">${form.messageLabel}</label>
                <textarea class="form-textarea" id="message" name="message" placeholder="${form.messagePlaceholder}" required></textarea>
              </div>
              <button type="submit" class="btn btn--dark">${form.submitLabel}</button>
            </form>
            <div id="form-success" class="form-success hidden">
              <div class="form-success__icon">${ICONS.check}</div>
              <h3 class="form-success__title">${form.successTitle}</h3>
              <p class="form-success__text">${form.successMessage}</p>
              <button type="button" class="form-success__again" id="form-reset">${form.resendLabel}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderFooter() {
  const { footer, contact } = siteContent
  const year = new Date().getFullYear()
  const firstName = footer.name.split(' ')[0]

  const socials = contact.links.map((link) => `
    <a href="${link.href}" class="footer__social" aria-label="${link.label}"${link.type !== 'email' ? ' target="_blank" rel="noopener noreferrer"' : ''}>
      ${ICONS[link.type] || ''}
    </a>
  `).join('')

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div>
            <p class="footer__name">${footer.name}</p>
            <p class="footer__tagline">${footer.tagline}</p>
            <p class="footer__copy">© ${year} ${firstName}. ${footer.rights}</p>
          </div>
          <div class="footer__socials">${socials}</div>
          <button class="footer__top" id="back-to-top">
            ${footer.backToTop} ${ICONS.arrowUp}
          </button>
        </div>
      </div>
    </footer>
  `
}

function renderPage() {
  const app = document.getElementById('app')
  app.innerHTML = [
    renderHeader(),
    '<main>',
    renderHero(),
    renderAbout(),
    renderSkills(),
    renderAudience(),
    renderPortfolio(),
    renderProcess(),
    renderContact(),
    '</main>',
    renderFooter(),
  ].join('')
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function setupScrollLinks() {
  document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scroll')
      if (id) scrollToSection(id)
      closeMobileMenu()
    })
  })
}

function setupHeader() {
  const header = document.getElementById('header')
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40)
  }, { passive: true })
}

const mobileMenu = () => document.getElementById('mobile-menu')
const menuToggle = () => document.getElementById('menu-toggle')

function closeMobileMenu() {
  mobileMenu()?.classList.remove('open')
  menuToggle()?.classList.remove('open')
}

function setupMobileMenu() {
  let open = false
  menuToggle()?.addEventListener('click', () => {
    open = !open
    mobileMenu()?.classList.toggle('open', open)
    menuToggle().innerHTML = open ? ICONS.close : ICONS.menu
  })
}

function setupForm() {
  const form = document.getElementById('contact-form')
  const success = document.getElementById('form-success')
  const resetBtn = document.getElementById('form-reset')

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    form.classList.add('hidden')
    success?.classList.remove('hidden')
    form.reset()
  })

  resetBtn?.addEventListener('click', () => {
    success?.classList.add('hidden')
    form?.classList.remove('hidden')
  })
}

function setupBackToTop() {
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

function init() {
  document.title = siteContent.meta.title
  renderPage()
  setupScrollLinks()
  setupHeader()
  setupMobileMenu()
  setupForm()
  setupBackToTop()
  setupReveal()
}

document.addEventListener('DOMContentLoaded', init)
