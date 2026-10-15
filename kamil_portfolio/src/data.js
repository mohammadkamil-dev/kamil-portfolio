export const profile = {
  name: 'Mohammad Kamil',
  roles: ['Full Stack Developer', 'React Native Engineer', 'NestJS Backend Builder', 'AI-Accelerated Coder'],
  email: 'dev.mohammadkamil@gmail.com',
  phone: '+91 78802 48433',
  location: 'Indore, India',
  linkedin: 'https://linkedin.com/in/mohammad-kamil-2b80aa444',
  about:
    'Full Stack Developer with 3+ years building production-grade web and mobile apps at Mataaf Technologies, promoted twice for ownership and consistent delivery. I ship reliable, scalable products on Node.js/NestJS and React, and cross-platform mobile apps for Android and iOS with React Native — from API design and database modelling to responsive interfaces.',
  about2:
    'I care about clean code and thorough reviews, and I speed up delivery with AI-powered development (Claude, Cursor, GitHub Copilot, Antigravity). I work closely with designers, QA and stakeholders, from design to deployment.',
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 2, suffix: '×', label: 'Promotions' },
  { value: 90, suffix: '%', label: 'TDD Coverage' },
  { value: 2, suffix: '', label: 'App Stores Published' },
]

export const jobs = [
  {
    role: 'Full Stack Developer',
    org: 'Mataaf Technologies · Product Ownership',
    date: '2026 – Present',
    points: [
      'Own features end-to-end across frontend, backend and mobile, from requirements to release.',
      'Build and publish React Native apps for Android and iOS, managing Google Play and App Store listings and releases.',
      'Take product-level responsibility — technical decisions, planning and stakeholder collaboration.',
    ],
  },
  {
    role: 'Full Stack Developer',
    org: 'Mataaf Technologies',
    date: '2025 – 2026',
    points: [
      'Built frontend and backend features for web apps on Node.js/NestJS & React.',
      'Designed REST APIs and databases and took modules from development to deployment.',
    ],
  },
  {
    role: 'Web Application Developer',
    org: 'Mataaf Technologies',
    date: '2024 – 2025',
    points: ['Built responsive web application UIs and reusable components from designs.'],
  },
]

export const skills = [
  { title: 'Backend', icon: '⚙', items: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'REST APIs', 'GraphQL', 'OAuth', 'Webhooks'] },
  { title: 'Frontend', icon: '◧', items: ['React', 'Next.js', 'Angular'] },
  { title: 'Mobile', icon: '▯', items: ['React Native', 'Expo', 'Android Studio', 'Xcode', 'Push Notifications', 'Firebase', 'Play Store & App Store'] },
  { title: 'Real-Time', icon: '≋', items: ['WebRTC', 'WebSockets', 'Socket.IO'] },
  { title: 'Data & Cloud', icon: '◉', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'CI/CD'] },
  { title: 'AI Development', icon: '✦', items: ['Claude', 'Cursor', 'GitHub Copilot', 'Antigravity'] },
]

export const projects = [
  {
    name: 'Quran Living',
    kind: 'Mobile App · Google Play',
    role: 'Built',
    desc: 'AI Quran companion — read, listen, memorize and ask AI. 100% free.',
    tags: ['AI', 'Quran', 'Android'],
    link: 'https://play.google.com/store/apps/details?id=com.mataaf.quranliving',
    cta: 'View on Play Store',
    accent: '#00e5ff',
    visual: 'phone',
    appIcon: '/projects/quran-icon.png',
    images: ['/projects/quran-1.png', '/projects/quran-2.png', '/projects/quran-3.png', '/projects/quran-4.png', '/projects/quran-5.png'],
  },
  {
    name: 'Ezy POS',
    kind: 'Mobile App · Google Play',
    role: 'Built',
    desc: 'Fast POS app for restaurants and shops: orders, tables, KOT and bills.',
    tags: ['POS', 'Orders', 'KOT & Billing'],
    link: 'https://play.google.com/store/apps/details?id=com.mataaftech.ezy',
    cta: 'View on Play Store',
    accent: '#2dff8f',
    visual: 'phone',
    appIcon: '/projects/ezy-icon.png',
    images: ['/projects/ezy-1.png', '/projects/ezy-2.png', '/projects/ezy-3.png', '/projects/ezy-4.png', '/projects/ezy-5.png'],
  },
  {
    name: 'GloFi',
    kind: 'Mobile App · Google Play',
    role: 'Contributed',
    desc: 'AI-powered crypto wallet. Buy, sell, swap & send crypto — just ask GloFi AI.',
    tags: ['AI', 'Crypto Wallet', 'Web3'],
    link: 'https://play.google.com/store/apps/details?id=io.glofi.glofiapp',
    cta: 'View on Play Store',
    accent: '#8b5cf6',
    visual: 'phone',
    appIcon: '/projects/glofi-icon.png',
    images: ['/projects/glofi-1.png', '/projects/glofi-2.png', '/projects/glofi-3.png', '/projects/glofi-4.jpg', '/projects/glofi-5.png'],
  },
  {
    name: 'Maaz Memon Portfolio',
    kind: 'Website · Live',
    role: 'Built',
    desc: 'Portfolio website for Maaz Memon — Driving the Future of Digital Payments & Web3.',
    tags: ['Portfolio', 'Web3', 'Payments'],
    link: 'https://www.maazmemon.com/',
    cta: 'Visit website',
    accent: '#ff4ecd',
    visual: 'browser',
    host: 'maazmemon.com',
    images: ['/projects/maaz.jpg'],
  },
  {
    name: 'MataafHR',
    kind: 'Web Platform · HRMS',
    role: 'Built',
    desc: 'Employee management platform covering leave, attendance and salary calculation.',
    tags: ['Leave', 'Attendance', 'Payroll'],
    link: null,
    cta: 'Internal platform',
    accent: '#ffb347',
    visual: 'dashboard',
    images: [],
  },
]
