// English copy. Arrays are index-aligned with their Spanish counterparts in ./index.ts;
// projects are keyed by id.
export const EXPERIENCE_EN = [
  {
    role: 'Frontend Lead',
    project: 'YIPI · Logistics and tracking platform',
    period: 'Mar 2026 — Present',
    highlights: [
      'Development of a scalable logistics and tracking platform with React and TypeScript.',
      'Definition of the frontend architecture under Clean Architecture and implementation of advanced geolocation with the Google Maps API.',
      'Dynamic dashboards tailored to user roles (business and client).',
    ],
  },
  {
    role: 'Full Stack Developer',
    project: 'Management system for barbershops',
    period: 'Apr 2026 — Present',
    highlights: [
      'End-to-end design and delivery of a multi-branch management system.',
      'Relational schema for staff and inventory, with secure authentication middleware and session persistence.',
      'Modular code to make the product easier to scale.',
    ],
  },
  {
    role: 'Full Stack Developer',
    project: 'Platform for managing courses, mentoring and live classes',
    period: 'Oct 2026',
    highlights: [
      'A system that handles course management, access and data for teachers who want their own website to offer mentoring, courses or live classes.',
      'JWT authentication with OTP code verification: teacher sign-up and validation, student sign-up and login, and role-based permissions.',
      'Course catalog by subject or specialization and a calendar with class schedules.',
      'Payments with the Mercado Pago API (checkout and webhooks) and an admin panel with metrics, users, courses and orders.',
    ],
  },
  {
    role: 'Software Developer',
    project: 'Plania and Ejeschool · Educational and planning platforms',
    period: 'Jan 2026 — Mar 2026',
    highlights: [
      'High-fidelity interfaces for educational and planning platforms.',
      'Virtual macOS environments to automate iOS builds (.ipa) in Flutter projects.',
      'Refactoring of legacy components to improve performance and maintainability.',
    ],
  },
  {
    role: 'Software Developer',
    project: 'Appointment and clinical data management system',
    highlights: [
      'Appointment system to organize and resolve the hospital care schedule.',
      'Dedicated database for critical information: health records, receipts and other patient data.',
      'Java backend with REST APIs and data validation to keep information consistent and traceable.',
    ],
  },
  {
    role: 'Frontend Developer',
    project: 'SaaS / Ecommerce landing page',
    highlights: [
      'Responsive ecommerce landing page with a product catalog.',
      'Conversion-focused checkout flow, with continuous deployment on Vercel.',
    ],
  },
];

export const EDUCATION_EN = [
  {
    title: 'Computer Engineering',
    institution: 'University of Buenos Aires',
    period: '2026 — Present',
    status: 'In progress',
  },
  { title: 'Systems Analyst', institution: 'Higher Technical Institute', period: '2026', status: 'Completed' },
  { title: 'IT Technician', status: 'Completed' },
];

export const NAV_EN: Record<string, string> = {
  '#sobre-mi': 'About',
  '#experiencia': 'Experience',
  '#proyectos': 'Projects',
  '#contacto': 'Contact',
};

export const SKILL_LABEL_EN: Record<string, string> = {
  '/ FRONTEND': '/ FRONTEND',
  '/ MÓVIL': '/ MOBILE',
  '/ BACKEND': '/ BACKEND',
  '/ HERRAMIENTAS': '/ TOOLS',
};

export const METRICS_EN = [
  { value: '2+', label: 'years of experience' },
  { label: 'projects' },
  { value: 'Lead', label: 'frontend at Ejesatelital' },
  { value: 'Web + Mobile', label: 'platforms' },
];

interface ProjectEn {
  title?: string;
  description: string;
  summary?: string;
  alt?: string;
  stack?: string[];
}

export const PROJECTS_EN: Record<string, ProjectEn> = {
  mira: {
    description:
      'A service born from the need to look after elderly people, adapted to health monitoring. The watch detects falls and wandering thanks to its firmware and, from the app, the care group can call the watch, request its location, log medication and check heart rate, blood pressure, temperature and blood oxygen.',
    stack: ['Mobile app', 'Real-time GPS', 'Wearables', 'Health alerts'],
    summary: 'A service born from the need to look after elderly people, adapted to health monitoring.',
    alt: 'MIRA app: health alerts, help center and GPS tracking',
  },
  'plania-v2': {
    description:
      'All-in-one management for barbershops: daily schedule, public booking link, business stats, team performance and most requested services, with automated WhatsApp messages, push notifications and Wompi payments.',
    summary:
      'Second version of Plania: management of locations, clients and services with automated WhatsApp messages via Meta, push notifications and payments integrated with Wompi.',
    alt: 'Plania V2 app: barbershop overview, schedule and stats',
  },
  'bio-class': {
    description:
      'A system that handles course management, access and data for teachers who offer mentoring, courses or live classes: authentication with teacher sign-up and validation, student login, catalog by subject or specialization, class calendar and payments with the Mercado Pago API.',
    summary:
      'Course platform with role-based authentication, catalog, class schedule calendar, Mercado Pago payments and an admin panel.',
    alt: 'Home page of the Bio Class course platform',
  },
  'yipi-web': {
    description:
      'Vehicle tracking platform: geofences, history, plans and vehicle and service management, with live tracking on suspicious activity.',
    summary:
      'Web version of YIPI with the same management features for locations, consumption, costs and products, plus extra capabilities specific to the web platform.',
    alt: 'YIPI web dashboard with a geofence map',
  },
  'landing-saas': {
    description:
      'Modern ecommerce landing page with a responsive design, product catalog and integrated checkout flow.',
    summary:
      'Modern ecommerce landing page with a responsive design, product catalog and integrated checkout flow.',
    alt: 'Gestión Globals ecommerce landing page',
  },
  ejeschool: {
    description:
      'Family View app to manage, track and review the history of completed or live trips through subscriptions.',
    summary:
      'React Native app that helps you control and manage your students’ travel expenses and monitor their route with a tracking system, plus push notifications with Expo.',
    alt: 'Ejeschool mobile app showing active routes',
  },
  plania: {
    description:
      'React Native app for full management of the locations you run: consumption, costs, products and services, plus an integrated payment plan.',
    summary:
      'React Native app for full management of the locations you run: consumption, costs, products and services, plus an integrated payment plan.',
    alt: 'Plania mobile app for location management',
  },
  'yipi-app': {
    description:
      'React Native app to track your vehicle and its status, manage maintenance and services, and create geofences to find nearby repair shops, with an integrated payment plan.',
    summary:
      'Mobile app with tracking features that consumes REST services, built with React Native, native styles and Tailwind.',
    alt: 'YIPI mobile app with vehicle tracking',
  },
  'eje-satelital': {
    description:
      'Java backend project focused on managing critical data in a database, with REST APIs and an emphasis on operational traceability.',
    summary:
      'Java backend solution that centralizes database operations and exposes REST services for internal use. Includes a layered design (controller, service, repository), data validation and event traceability to ease auditing and maintenance.',
  },
  'plania-backend': {
    description:
      'Node.js backend project focused on managing critical data in a database, with REST APIs and an emphasis on operational traceability.',
  },
};
