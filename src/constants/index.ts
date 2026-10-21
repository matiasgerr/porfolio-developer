import { Github, Linkedin, Mail } from 'lucide-react';
import type { Project, ProjectType, Social, NavLink } from '../types';
import landingSaasImg from '../assets/projects/landing-saas.webp';
import yipiWebImg from '../assets/projects/yipi-web.webp';
import ejeschoolImg from '../assets/projects/ejeschool.webp';
import planiaImg from '../assets/projects/plania.webp';
import yipiAppImg from '../assets/projects/yipi-app.webp';
import planiaV2Img from '../assets/projects/plania-v2.webp';

export const CURRENT_YEAR = new Date().getFullYear();

export const CONTACT_EMAIL = 'matiasdelgadodjr@gmail.com';

export const PROJECT_TYPE_LABEL: Record<ProjectType, string> = {
  web: '/ Web App',
  mobile: '/ Mobile App',
  backend: '/ Backend',
};

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Landing Page SAAS',
    type: 'web',
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
    id: '02',
    title: 'YIPI WEB',
    type: 'web',
    description:
      'Visualización de geocercas, historial, planes, gestión de vehículos y de servicios realizados o pendientes para mantener y regularizar pagos del vehículo, además de tracking en vivo ante actividad sospechosa.',
    stack: ['React', 'Traccar', 'Tailwind', 'REST'],
    details: {
      summary:
        'Versión web de YIPI con las mismas funcionalidades de gestión de locales, consumo, costos y productos, sumando capacidades adicionales propias de la plataforma web.',
      image: { src: yipiWebImg, alt: 'Panel web de YIPI con mapa de geocercas', width: 1400, height: 788 },
    },
  },
  {
    id: '03',
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
    id: '04',
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
    id: '05',
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
    id: '06',
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
    id: '07',
    title: 'Plania V.2',
    type: 'mobile',
    description:
      'Aplicación basada en React Native para la gestión total de los locales a tu cargo, clientes y servicios, con integración de WhatsApp automatizado, notificaciones push y pagos con Wompi.',
    stack: ['React Native', 'Tailwind', 'REST', 'Meta', 'Wompi', 'Push Notifications'],
    details: {
      summary:
        'Segunda versión de Plania: gestión de locales, clientes y servicios con mensajes de WhatsApp automatizados vía Meta, notificaciones push y pagos integrados con Wompi.',
      image: { src: planiaV2Img, alt: 'App móvil Plania V2', width: 1400, height: 586 },
    },
  },
  {
    id: '08',
    title: 'Plania Backend',
    type: 'backend',
    description:
      'Proyecto backend en Node.js orientado a la gestión de datos críticos en base de datos, con APIs REST y foco en trazabilidad operativa.',
    stack: ['Node.js', 'Express', 'SQL', 'REST'],
  },
];

export const SOCIALS: Social[] = [
  { label: 'EMAIL', href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
  { label: 'GITHUB', href: 'https://github.com/MatiasDelgadoD', icon: Github },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/matiasdamiandelgado/', icon: Linkedin },
];

export const NAV_LINKS: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí', hoverColor: 'hover:text-blue-400' },
  { href: '#proyectos', label: 'Proyectos', hoverColor: 'hover:text-teal-400' },
  { href: '#contacto', label: 'Contacto', hoverColor: 'hover:text-blue-400' },
];

export const SKILLS = [
  { label: '/ WEB', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { label: '/ MOBILE', items: ['React Native', 'Tailwind CSS'] },
  { label: '/ BACKEND', items: ['API REST', 'SQL Database', 'Node.js', 'PHP'] },
];
