# Portfolio · Matias Delgado

Portfolio personal de Matias Delgado, Software Engineer (React, React Native, Node.js).

**Producción:** https://porfolio-matias-dev-alpha.vercel.app

## Stack

- React 19 + TypeScript, con React Compiler
- Vite 8
- Tailwind CSS 4
- Formspree para el formulario de contacto
- Vercel para hosting y despliegue continuo

## Desarrollo local

```bash
pnpm install
pnpm dev       # servidor de desarrollo en http://localhost:5173
pnpm lint
pnpm build     # build de producción en dist/
pnpm preview   # sirve dist/ localmente
```

### Variables de entorno

| Variable        | Uso                                      |
| --------------- | ---------------------------------------- |
| `VITE_FORM_URL` | Endpoint de Formspree del formulario     |

- **Local:** copiar `.env.example` a `.env` y completar los valores. `.env` está en `.gitignore` y no se sube al repo.
- **Vercel:** cargar las mismas variables en *Settings → Environment Variables* para Production y Preview.

Las variables `VITE_*` quedan embebidas en el JavaScript público, así que nunca deben contener secretos.

## Flujo de ramas y despliegue

| Rama        | Para qué                              | Despliegue en Vercel                    |
| ----------- | ------------------------------------- | --------------------------------------- |
| `main`      | Lo publicado                          | **Production** (URL principal)          |
| `develop`   | Cambios casi confirmados, en revisión | **Preview** con URL fija de la rama     |
| `feature/*` | Trabajo en curso                      | Preview por cada push / pull request    |

1. Crear `feature/<algo>` desde `develop` y abrir un pull request hacia `develop`.
2. Revisar el preview que Vercel comenta en el pull request.
3. Cuando `develop` está aprobado, abrir un pull request `develop → main`; al mergear, Vercel publica en producción.

GitHub Actions (`.github/workflows/ci.yml`) ejecuta lint y build en cada push y pull request a `main` y `develop`.

## Estructura

```
src/
  components/   Secciones de la página y tarjetas de proyecto
  constants/    Contenido: proyectos, skills, redes y navegación
  assets/       Capturas de proyectos (WebP)
  types/        Tipos compartidos
public/         favicon, imagen Open Graph, robots.txt, sitemap.xml
public/cv/      CV descargable (se reemplaza el PDF manteniendo el nombre)
vercel.json     Headers de caché y seguridad
```

Para agregar un proyecto basta con sumar una entrada a `PROJECTS` en `src/constants/index.ts`; si tiene `details`, la tarjeta se vuelve desplegable automáticamente.
