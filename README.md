# SmartWeb Platform

![SmartWeb](https://img.shields.io/badge/SmartWeb-Digital%20Infrastructure-blue)

## Infraestructura Digital para Negocios de Barrio

SmartWeb es una plataforma SaaS diseñada para ayudar a negocios locales a construir, administrar y evolucionar su presencia digital.

No construimos páginas web aisladas.

Construimos una infraestructura reutilizable capaz de generar experiencias digitales profesionales para múltiples negocios.

---

# Visión

Los pequeños negocios necesitan herramientas digitales simples, accesibles y efectivas.

SmartWeb busca convertirse en la infraestructura digital de referencia para negocios locales en Latinoamérica.

---

# Producto inicial

## SmartWeb Express

Una solución que permite crear una presencia digital profesional en menos de 24 horas.

Incluye:

* Landing profesional.
* Diseño responsive.
* SEO Local.
* Integración WhatsApp.
* Formularios de contacto.
* Hosting administrado.
* Mantenimiento continuo.

---

# Objetivo del proyecto

Validar un modelo:

```
Implementación inicial
        +
Mantenimiento mensual
        +
Evolución mediante módulos
```

El objetivo es crear un producto escalable, no solamente ofrecer desarrollo web personalizado.

---

# Arquitectura del producto

La plataforma está diseñada para evolucionar:

```
SmartWeb Platform

        |
        |

Tenant

        |
        |

Business

        |
        |

Website

        |
        |

Content

        |
        |

Modules
```

---

# Roadmap

## Fase 1 — SmartWeb Express

Estado:

🚧 En desarrollo

Incluye:

* Sistema de templates.
* Sitios configurables.
* Contenido dinámico.
* SEO.
* WhatsApp.
* Formularios.

---

## Fase 2 — SmartWeb Growth

Próximo objetivo:

* Dashboard cliente.
* Gestión de servicios.
* Productos.
* Galería.
* Promociones.

---

## Fase 3 — SmartWeb Platform

Evolución SaaS:

* Multi-tenant.
* Usuarios.
* Roles.
* Suscripciones.
* Módulos.

---

## Fase 4 — SmartWeb OS

Plataforma completa:

* IA.
* CRM.
* Automatización comercial.
* Analytics.
* Marketing digital.

---

# Stack tecnológico

## Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Shadcn/UI

## Backend

* Supabase
* PostgreSQL

## Infraestructura

* Vercel
* Cloudflare

---

# Estructura del proyecto

```
smartweb/

├── CLAUDE.md

├── docs/

│   ├── FOUNDATION.md
│   ├── PRODUCT.md
│   ├── BUSINESS_MODEL.md
│   ├── ARCHITECTURE_PMV.md
│   └── API_SPECIFICATION.md

├── marketplace/

├── components/

├── packages/

├── public/

└── README.md
```

---

# Instalación local

## Requisitos

Necesitas:

* Node.js 20+
* npm o pnpm
* Cuenta Supabase
* Cuenta Vercel (opcional)

---

## Clonar repositorio

```bash
git clone https://github.com/popnegro/smartweb.git

cd smartweb
```

---

## Instalar dependencias

```bash
npm install
```

o

```bash
pnpm install
```

---

## Variables de entorno

Crear:

```
.env.local
```

Ejemplo:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

VERCEL_TOKEN=
```

Nunca subir secretos al repositorio.

---

# Ejecutar proyecto

Modo desarrollo:

```bash
npm run dev
```

Abrir:

```
http://localhost:3000
```

---

# Convenciones de desarrollo

## Código

Priorizar:

* Componentes reutilizables.
* TypeScript.
* Arquitectura limpia.
* Código mantenible.

---

## Contenido

Nunca colocar información comercial directamente en componentes.

Incorrecto:

```tsx
<h1>Ferretería Pérez</h1>
```

Correcto:

```tsx
<h1>{business.name}</h1>
```

---

# Desarrollo con IA

Este proyecto utiliza asistentes IA como herramientas de desarrollo.

Antes de realizar cambios importantes revisar:

```
CLAUDE.md

/docs
```

La IA debe respetar:

* Arquitectura.
* Modelo de datos.
* Roadmap.
* Principios del producto.

---

# Documentación

Documentos principales:

| Documento            | Propósito        |
| -------------------- | ---------------- |
| FOUNDATION.md        | Visión           |
| PRODUCT.md           | Producto         |
| BUSINESS_MODEL.md    | Modelo comercial |
| CUSTOMER_PERSONAS.md | Clientes         |
| VALUE_PROPOSITION.md | Propuesta        |
| ARCHITECTURE_PMV.md  | Arquitectura     |
| DATABASE_SCHEMA.md   | Datos            |
| API_SPECIFICATION.md | API              |
| CLAUDE.md            | Reglas IA        |

---

# Contribución

Antes de realizar cambios:

1. Crear branch.

Ejemplo:

```bash
git checkout -b feature/nueva-funcionalidad
```

2. Implementar.

3. Ejecutar pruebas.

4. Crear commit descriptivo.

Ejemplo:

```bash
git commit -m "feat: add business template system"
```

---

# Principios del proyecto

## 1. Simple primero

No construir complejidad antes de validar.

---

## 2. Producto antes que código

Cada funcionalidad debe resolver un problema real.

---

## 3. Escalar sin rehacer

Diseñar pensando en múltiples negocios.

---

## 4. Automatizar lo repetible

La plataforma debe reducir tiempo operativo.

---

# Estado actual

Proyecto:

🟡 En construcción

Objetivo inmediato:

Construir y validar SmartWeb Express como producto vendible.

---

# Contacto

SmartWeb Platform

Infraestructura Digital para Negocios de Barrio.
