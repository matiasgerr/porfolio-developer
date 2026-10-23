import {
  Database,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  Network,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import {
  siExpo,
  siFlutter,
  siGit,
  siGooglemaps,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from 'simple-icons';
import type {
  EducationItem,
  ExperienceItem,
  NavLink,
  Project,
  ProjectType,
  SkillGroup,
  Social,
} from '../types';
import landingSaasImg from '../assets/projects/landing-saas.webp';
import yipiWebImg from '../assets/projects/yipi-web.webp';
import ejeschoolImg from '../assets/projects/ejeschool.webp';
import planiaImg from '../assets/projects/plania.webp';
import yipiAppImg from '../assets/projects/yipi-app.webp';
import planiaV2Img from '../assets/projects/plania-v2.webp';
import miraImg from '../assets/projects/mira.webp';

export const CURRENT_YEAR = new Date().getFullYear();

export const CONTACT_EMAIL = 'matiasdelgadodjr@gmail.com';

export const PROFILE = {
  name: 'Matias Delgado',
  role: 'Frontend Developer',
  tagline: 'React, Next.js y TypeScript, con base en backend: Node.js, Supabase y SQL.',
  location: 'Buenos Aires, Argentina · Remoto',
};

// Source: the CV in public/cv. Items without a period are missing dates in the CV.
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Frontend Lead',
    company: 'Ejesatelital',
    project: 'YIPI · Plataforma logística y de rastreo',
    period: 'Mar 2026 — Presente',
    current: true,
    highlights: [
      'Desarrollo de una plataforma logística y de rastreo escalable con React y TypeScript.',
      'Definición de la arquitectura del frontend bajo Clean Architecture e implementación de geolocalización avanzada con Google Maps API.',
      'Paneles dinámicos adaptados a roles de usuario (negocio y cliente).',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'pnpm', 'Google Maps API'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Ejesatelital',
    project: 'Sistema de gestión para barberías',
    period: 'Abr 2026 — Presente',
    current: true,
    highlights: [
      'Diseño y ejecución integral de un sistema de gestión multisucursal.',
      'Esquema relacional para personal e inventario, con middleware de autenticación segura y persistencia de sesiones.',
      'Código modular para facilitar la escalabilidad del producto.',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'SQL'],
  },
  {
    role: 'Software Developer',
    company: 'Ejesatelital',
    project: 'Plania y Ejeschool · Plataformas educativas y de planificación',
    period: 'Ene 2026 — Mar 2026',
    highlights: [
      'Interfaces de alta fidelidad para plataformas educativas y de planificación.',
      'Entornos virtuales macOS para automatizar builds de iOS (.ipa) en proyectos Flutter.',
      'Refactorización de componentes legados para mejorar rendimiento y mantenibilidad.',
    ],
    stack: ['Flutter', 'React', 'macOS VM', 'Git Flow'],
  },
  {
    role: 'Frontend Developer',
    company: 'Gestión Globals Software',
    project: 'Landing Page SaaS / Ecommerce',
    highlights: [
      'Landing page de ecommerce con diseño responsivo y catálogo de productos.',
      'Flujo de compra integrado orientado a la conversión, con despliegue continuo en Vercel.',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'MUI', 'Vercel'],
  },
];

export const EDUCATION: EducationItem[] = [
  { title: 'Ingeniería en Informática', institution: 'Universidad de Buenos Aires', period: '2026 — Actualidad' },
  { title: 'Analista de Sistemas', institution: 'Institución de Técnica Superior' },
];

// Replace public/cv/matias-delgado-cv.pdf to update the CV; the URL stays the same.
export const CV = {
  url: '/cv/matias-delgado-cv.pdf',
  fileName: 'Matias-Delgado-CV.pdf',
};

export const PROJECT_TYPE_ICON: Record<ProjectType, LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  backend: Server,
};

export const PROJECT_TYPE_LABEL: Record<ProjectType, string> = {
  web: '/ Web App',
  mobile: '/ Mobile App',
  backend: '/ Backend',
};

export const PROJECTS: Project[] = [
  {
    id: 'mira',
    title: 'MIRA',
    type: 'mobile',
    featured: true,
    description:
      'Servicio nacido de la necesidad de supervisar a personas de tercera edad, adaptado al seguimiento de salud. El reloj detecta caídas y extravíos gracias a su firmware y, desde la app, el grupo de cuidado puede llamar al reloj, pedir su ubicación, cargar medicamentos y ver ritmo cardíaco, presión, temperatura y oxígeno en sangre.',
    // TODO: replace with the real tech stack once confirmed
    stack: ['App móvil', 'GPS en tiempo real', 'Wearables', 'Alertas de salud'],
    details: {
      summary:
        'Servicio nacido de la necesidad de supervisar a personas de tercera edad, adaptado al seguimiento de salud.',
      image: { src: miraImg, alt: 'App MIRA: alertas de salud, centro de ayuda y seguimiento GPS', width: 1400, height: 600 },
    },
  },
  {
    id: 'plania-v2',
    title: 'Plania V2',
    type: 'mobile',
    featured: true,
    description:
      'Gestión integral para barberías: agenda del día, link público de reservas, estadísticas del negocio, rendimiento del equipo y servicios más pedidos, con WhatsApp automatizado, notificaciones push y pagos con Wompi.',
    stack: ['React Native', 'Tailwind', 'REST', 'Meta', 'Wompi', 'Push Notifications'],
    details: {
      summary:
        'Segunda versión de Plania: gestión de locales, clientes y servicios con mensajes de WhatsApp automatizados vía Meta, notificaciones push y pagos integrados con Wompi.',
      image: { src: planiaV2Img, alt: 'App Plania V2: resumen, agenda y estadísticas de la barbería', width: 1400, height: 600 },
    },
  },
  {
    id: 'yipi-web',
    title: 'YIPI Web',
    type: 'web',
    featured: true,
    description:
      'Plataforma de rastreo vehicular: geocercas, historial, planes y gestión de vehículos y servicios, con tracking en vivo ante actividad sospechosa.',
    stack: ['React', 'Traccar', 'Tailwind', 'REST'],
    details: {
      summary:
        'Versión web de YIPI con las mismas funcionalidades de gestión de locales, consumo, costos y productos, sumando capacidades adicionales propias de la plataforma web.',
      image: { src: yipiWebImg, alt: 'Panel web de YIPI con mapa de geocercas', width: 1400, height: 788 },
    },
  },
  {
    id: 'landing-saas',
    title: 'Landing Page SaaS',
    type: 'web',
    featured: true,
    description:
      'Landing page de ecommerce moderna con diseño responsivo, catálogo de productos y flujo de compra integrado.',
    stack: ['NextJS', 'Tailwind', 'Vercel', 'MUI'],
    link: 'https://gestion-globals-nexjs-seven.vercel.app/',
    details: {
      summary:
        'Landing page de ecommerce moderna con diseño responsivo, catálogo de productos y flujo de compra integrado.',
      image: { src: landingSaasImg, alt: 'Landing page de ecommerce Gestión Globals', width: 1400, height: 761 },
    },
  },
  {
    id: 'ejeschool',
    title: 'Ejeschool Application',
    type: 'mobile',
    description:
      'Aplicación Family View para gestionar, hacer tracking y consultar el historial de viajes realizados o en vivo mediante suscripciones.',
    stack: ['React Native', 'Expo', 'Tailwind', 'REST', 'Traccar', 'Push Notifications'],
    details: {
      summary:
        'Aplicación basada en React Native que ayuda a controlar y gestionar los gastos de viaje de tus estudiantes y monitorear el recorrido mediante un sistema de trackeo, además de ofrecer notificaciones push con Expo.',
      image: { src: ejeschoolImg, alt: 'App móvil Ejeschool mostrando rutas activas', width: 1400, height: 594 },
    },
  },
  {
    id: 'plania',
    title: 'Plania Application',
    type: 'mobile',
    description:
      'Aplicación basada en React Native para la gestión total de los locales a tu cargo: consumo, costos, productos y servicios, además de la integración de un plan de pago.',
    stack: ['React Native', 'Tailwind', 'REST'],
    details: {
      summary:
        'Aplicación basada en React Native para la gestión total de los locales a tu cargo: consumo, costos, productos y servicios, además de la integración de un plan de pago.',
      image: { src: planiaImg, alt: 'App móvil Plania para gestión de locales', width: 1400, height: 594 },
    },
  },
  {
    id: 'yipi-app',
    title: 'YIPI Application',
    type: 'mobile',
    description:
      'Aplicación basada en React Native para el tracking de tu vehículo y su estado, gestión de mantenimientos y servicios, y creación de geocercas para encontrar talleres cercanos, con plan de pago integrado.',
    stack: ['React Native', 'Tailwind', 'REST'],
    details: {
      summary:
        'Aplicación móvil con funcionalidades de tracking que consume servicios REST, desarrollada con React Native, estilos nativos y Tailwind.',
      image: { src: yipiAppImg, alt: 'App móvil YIPI con tracking de vehículos', width: 1400, height: 594 },
    },
  },
  {
    id: 'eje-satelital',
    title: 'Eje Satelital',
    type: 'backend',
    description:
      'Proyecto backend en Java orientado a la gestión de datos críticos en base de datos, con APIs REST y foco en trazabilidad operativa.',
    stack: ['Java', 'Spring Boot', 'SQL', 'REST'],
    details: {
      summary:
        'Solución backend en Java para centralizar operaciones de base de datos y exponer servicios REST para consumo interno. Incluye diseño de capas (controller, service, repository), validación de datos y trazabilidad de eventos para facilitar auditoría y mantenimiento.',
    },
  },
  {
    id: 'plania-backend',
    title: 'Plania Backend',
    type: 'backend',
    description:
      'Proyecto backend en Node.js orientado a la gestión de datos críticos en base de datos, con APIs REST y foco en trazabilidad operativa.',
    stack: ['Node.js', 'Express', 'SQL', 'REST'],
  },
];

// Metrics shown under the hero; keep them verifiable (sourced from the CV and PROJECTS).
export const METRICS = [
  { value: '2+', label: 'años de experiencia' },
  { value: String(PROJECTS.length), label: 'proyectos' },
  { value: 'Lead', label: 'frontend en Ejesatelital' },
  { value: 'Web + Mobile', label: 'plataformas' },
];

export const SOCIALS: Social[] = [
  { label: 'EMAIL', href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
  { label: 'GITHUB', href: 'https://github.com/MatiasDelgadoD', icon: Github },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/matiasdamiandelgado/', icon: Linkedin },
];

export const NAV_LINKS: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí', hoverColor: 'hover:text-blue-400' },
  { href: '#experiencia', label: 'Experiencia', hoverColor: 'hover:text-teal-400' },
  { href: '#proyectos', label: 'Proyectos', hoverColor: 'hover:text-blue-400' },
  { href: '#contacto', label: 'Contacto', hoverColor: 'hover:text-teal-400' },
];

export const SKILLS: SkillGroup[] = [
  {
    label: '/ FRONTEND',
    items: [
      { name: 'React', icon: siReact },
      { name: 'Next.js', icon: siNextdotjs },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'MUI', icon: siMui },
    ],
  },
  {
    label: '/ MOBILE',
    items: [
      { name: 'React Native', icon: siReact },
      { name: 'Flutter', icon: siFlutter },
      { name: 'Expo', icon: siExpo },
    ],
  },
  {
    label: '/ BACKEND',
    items: [
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'Supabase', icon: siSupabase },
      { name: 'SQL', fallbackIcon: Database },
      { name: 'APIs REST', fallbackIcon: Network },
    ],
  },
  {
    label: '/ HERRAMIENTAS',
    items: [
      { name: 'Git Flow', icon: siGit },
      { name: 'Vercel', icon: siVercel },
      { name: 'Google Maps API', icon: siGooglemaps },
      { name: 'Clean Architecture', fallbackIcon: Layers },
    ],
  },
];
