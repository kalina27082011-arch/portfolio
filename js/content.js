const siteContent = {
  meta: {
    title: 'Портфолио — Веб-разработчик',
    description:
      'Создаю современные сайты и веб-приложения. Быстро, понятно, с индивидуальным подходом.',
  },

  nav: [
    { id: 'about', label: 'Обо мне' },
    { id: 'skills', label: 'Навыки' },
    { id: 'audience', label: 'Для кого' },
    { id: 'portfolio', label: 'Работы' },
    { id: 'process', label: 'Этапы' },
    { id: 'contact', label: 'Контакты' },
  ],

  hero: {
    firstName: 'Людмила',
    lastName: 'Киселева',
    role: 'Веб-разработчик & создатель цифровых продуктов',
    description:
      'Помогаю предпринимателям и экспертам превращать идеи в работающие сайты и веб-приложения. Сочетаю современные технологии с продуманным UX — чтобы ваш продукт выглядел профессионально и приносил результат.',
    avatarAlt: 'Фото Людмилы',
    ctaContact: 'Связаться',
    ctaPortfolio: 'Посмотреть работы',
  },

  about: {
    title: 'Обо мне',
    subtitle: 'Кто я и чем могу помочь',
    story:
      'Я занимаюсь веб-разработкой и созданием цифровых продуктов. Работаю с предпринимателями, экспертами и стартапами — от первой идеи до готового MVP.',
    focus:
      'Помогаю клиентам быстро запускать проекты: лендинги, портфолио, небольшие веб-приложения и прототипы. Моя цель — чтобы вы получили понятный, красивый и работающий продукт без лишней сложности.',
    whyMe:
      'Со мной удобно работать: я объясняю технические решения простым языком, держу вас в курсе на каждом этапе и всегда открыта к обратной связи.',
    advantages: [
      {
        title: 'Быстрая реализация идей',
        description: 'От концепции до рабочего прототипа — в сжатые сроки, без потери качества.',
      },
      {
        title: 'Понятная коммуникация',
        description: 'Объясняю технические решения простым языком и держу вас в курсе на каждом этапе.',
      },
      {
        title: 'Современные технологии',
        description: 'React, TypeScript, AI-инструменты — актуальный стек для надёжных решений.',
      },
      {
        title: 'Индивидуальный подход',
        description: 'Каждый проект уникален — подстраиваю решение под ваши задачи и бюджет.',
      },
    ],
  },

  skills: {
    title: 'Навыки',
    subtitle: 'Инструменты и технологии, с которыми я работаю',
    categories: [
      {
        name: 'Разработка',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
      },
      {
        name: 'AI-инструменты',
        items: ['Cursor', 'ChatGPT', 'Claude', 'Генерация контента', 'Автоматизация задач'],
      },
      {
        name: 'Дополнительно',
        items: ['UX/UI мышление', 'Создание MVP', 'Прототипирование', 'Работа с API'],
      },
    ],
  },

  audience: {
    title: 'Для кого я могу быть полезна',
    subtitle: 'Работаю с разными форматами бизнеса и проектов',
    cards: [
      {
        title: 'Предпринимателям',
        description:
          'Нужен сайт или лендинг для продвижения бизнеса? Создам современное решение, которое привлекает клиентов.',
        icon: 'briefcase',
      },
      {
        title: 'Экспертам',
        description:
          'Портфолио, личный бренд, платформа для курсов — помогу представить вашу экспертизу в цифровом формате.',
        icon: 'star',
      },
      {
        title: 'Малому бизнесу',
        description:
          'Каталог услуг, форма записи, интеграции — всё, что нужно для работы онлайн, без лишних затрат.',
        icon: 'store',
      },
      {
        title: 'Стартапам',
        description:
          'MVP за короткий срок: прототип, тестирование гипотез, масштабируемая архитектура для роста.',
        icon: 'rocket',
      },
    ],
  },

  portfolio: {
    title: 'Портфолио',
    subtitle: 'Примеры проектов и реализованных решений',
    projects: [
      {
        id: 1,
        title: 'Лендинг для студии дизайна',
        description: 'Одностраничный сайт с портфолио работ, формой заявки и адаптивной вёрсткой.',
        technologies: ['React', 'Tailwind CSS', 'TypeScript'],
        demoUrl: '#',
        githubUrl: '#',
        theme: 'red',
      },
      {
        id: 2,
        title: 'Каталог услуг для салона',
        description: 'Сайт с каталогом услуг, онлайн-записью и интеграцией с мессенджерами.',
        technologies: ['Next.js', 'CSS Modules', 'API'],
        demoUrl: '#',
        githubUrl: '#',
        theme: 'yellow',
      },
      {
        id: 3,
        title: 'Портфолио фотографа',
        description: 'Галерея работ, фильтрация по категориям и контактная форма для заказов.',
        technologies: ['React', 'Framer Motion', 'Tailwind'],
        demoUrl: '#',
        githubUrl: '#',
        theme: 'white',
      },
      {
        id: 4,
        title: 'MVP для EdTech-стартапа',
        description: 'Платформа с курсами, личным кабинетом и системой прогресса обучения.',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
        demoUrl: '#',
        githubUrl: '#',
        theme: 'mix',
      },
      {
        id: 5,
        title: 'Корпоративный сайт',
        description: 'Многостраничный сайт компании с блогом, вакансиями и CRM-интеграцией.',
        technologies: ['React', 'Node.js', 'Headless CMS'],
        demoUrl: '#',
        githubUrl: '#',
        theme: 'red',
      },
      {
        id: 6,
        title: 'Приложение для учёта задач',
        description: 'Веб-приложение с drag-and-drop, фильтрами и совместной работой в команде.',
        technologies: ['React', 'TypeScript', 'Firebase'],
        demoUrl: '#',
        githubUrl: '#',
        theme: 'yellow',
      },
    ],
    demoLabel: 'Демо',
    githubLabel: 'GitHub',
  },

  process: {
    title: 'Этапы работы',
    subtitle: 'Прозрачный процесс от идеи до запуска',
    steps: [
      {
        number: '01',
        title: 'Обсуждение задачи',
        description: 'Выясняем цели, аудиторию, сроки и бюджет. Фиксируем ожидания и формат результата.',
      },
      {
        number: '02',
        title: 'Подготовка решения',
        description: 'Предлагаю структуру, дизайн-концепцию и технический план. Согласовываем до старта.',
      },
      {
        number: '03',
        title: 'Разработка',
        description: 'Реализую проект поэтапно с промежуточными показами. Вы видите прогресс на каждом шаге.',
      },
      {
        number: '04',
        title: 'Тестирование',
        description: 'Проверяем работу на разных устройствах, исправляем замечания и доводим до идеала.',
      },
      {
        number: '05',
        title: 'Запуск проекта',
        description: 'Деплой, передача доступов, инструкции по использованию. Поддержка после запуска.',
      },
    ],
  },

  contact: {
    title: 'Контакты',
    subtitle: 'Готова обсудить ваш проект',
    description: 'Напишите — отвечу в течение рабочего дня. Расскажите о задаче, и мы найдём лучшее решение.',
    links: [
      { type: 'email', label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
      { type: 'telegram', label: 'Telegram', value: '@username', href: 'https://t.me/username' },
      { type: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/username', href: 'https://linkedin.com/in/username' },
      { type: 'github', label: 'GitHub', value: 'github.com/username', href: 'https://github.com/username' },
    ],
    form: {
      nameLabel: 'Имя',
      namePlaceholder: 'Как к вам обращаться',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Расскажите о вашем проекте...',
      submitLabel: 'Отправить сообщение',
      successTitle: 'Сообщение отправлено!',
      successMessage: 'Спасибо за обращение. Я свяжусь с вами в ближайшее время.',
      resendLabel: 'Отправить ещё одно сообщение',
    },
  },

  footer: {
    name: 'Людмила Киселева',
    tagline: 'Веб-разработка & цифровые продукты',
    backToTop: 'Наверх',
    rights: 'Все права защищены.',
  },
}
