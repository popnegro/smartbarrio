# ARCHITECTURE_PMV.md

> SmartWeb Platform
> Arquitectura Técnica – PMV SmartWeb Express
> Versión: 1.0

---

# 1. Objetivo

Este documento define la arquitectura inicial de SmartWeb Express.

La arquitectura debe cumplir dos objetivos simultáneos:

1. Permitir vender y desplegar sitios comerciales rápidamente.
2. Construir una base tecnológica preparada para evolucionar hacia una plataforma SaaS multi-tenant.

---

# 2. Principios arquitectónicos

## Simplicidad primero

La primera versión debe resolver el problema comercial principal:

Crear infraestructura digital para negocios locales rápidamente.

No debe incorporar complejidad innecesaria.

---

## Evolución progresiva

Cada decisión técnica debe permitir crecimiento futuro.

El PMV no es código descartable.

Es la primera versión de una plataforma.

---

## Reutilización

Los componentes deben construirse una vez y utilizarse en múltiples negocios.

---

## Configuración sobre programación

Crear nuevos clientes debe requerir modificar datos, no escribir código nuevo.

---

# 3. Arquitectura general

SmartWeb estará compuesto por:

```
SmartWeb Platform

        |
        |

Marketing Website

        |

Client Sites

        |

Content Layer

        |

Future Dashboard

        |

Platform Services
```

---

# 4. Stack tecnológico

## Frontend

### Framework

Next.js

Responsabilidades:

* Renderizado.
* SEO.
* Routing.
* Performance.
* Generación de páginas.

---

### Lenguaje

TypeScript

Objetivos:

* Seguridad.
* Mantenibilidad.
* Escalabilidad.

---

### UI

Tailwind CSS

*

Shadcn/UI

Objetivos:

* Componentes reutilizables.
* Diseño consistente.
* Velocidad de desarrollo.

---

# 5. Arquitectura de aplicación

Estructura recomendada:

```
smartweb-platform/


apps/

 ├── marketing/
 │
 ├── client-sites/
 │
 └── admin/


packages/

 ├── ui/
 │
 ├── components/
 │
 ├── templates/
 │
 ├── seo/
 │
 ├── config/
 │
 └── database/


data/

 └── clients/


docs/

```

---

# 6. Aplicaciones principales

---

# Marketing App

Objetivo:

Sitio comercial de SmartWeb.

Incluye:

* Landing.
* Pricing.
* Casos.
* Blog.
* Captación de clientes.

---

# Client Sites App

Objetivo:

Renderizar sitios de clientes.

Responsabilidades:

* Cargar configuración.
* Renderizar plantilla.
* Mostrar contenido.
* Aplicar SEO.

---

# Admin App (futuro)

Objetivo:

Dashboard del cliente.

No forma parte del PMV.

Preparar arquitectura para incorporarlo.

---

# 7. Modelo de contenido

SmartWeb debe utilizar contenido estructurado.

Ejemplo:

```
Client

{
 id,
 name,
 slug,
 category,
 city,
 theme,
 content
}
```

---

Contenido:

```
Business

├── Information

├── Services

├── Products

├── Gallery

├── Reviews

├── Contact

└── SEO
```

---

# 8. Modelo multi-tenant futuro

Aunque el PMV no tendrá dashboard, debe preparar separación lógica.

Modelo futuro:

```
Platform

|

Tenant

|

Website

|

Modules

|

Users
```

---

Ejemplo:

```
SmartWeb

 ├── Cliente A

 │     ├── Landing

 │     ├── Services

 │     └── SEO


 ├── Cliente B

 │     ├── Landing

 │     ├── Products

 │     └── Gallery
```

---

# 9. Base de datos

Inicialmente:

Supabase PostgreSQL.

---

Tablas iniciales:

## clients

Información del negocio.

Campos:

* id
* name
* slug
* category
* city
* status

---

## websites

Configuración del sitio.

Campos:

* id
* client_id
* template
* theme
* domain

---

## content

Contenido dinámico.

Campos:

* id
* client_id
* type
* data

---

## future tables

Preparadas:

* users
* roles
* subscriptions
* modules
* analytics
* leads

---

# 10. Sistema de plantillas

Las plantillas serán componentes configurables.

Ejemplo:

```
templates/

restaurant/

services/

professional/

commerce/
```

Cada plantilla tendrá:

```
Template

├── Hero

├── Services

├── Products

├── Gallery

├── Testimonials

├── Contact
```

---

# 11. Sistema de temas

Cada cliente debe poder tener configuración visual.

Ejemplo:

```
theme:

{
 primaryColor,
 secondaryColor,
 font,
 logo,
 images
}
```

---

# 12. SEO Architecture

SEO debe ser parte del núcleo.

Cada sitio debe generar:

* Metadata dinámica.
* Sitemap.
* Robots.
* Schema.org.
* OpenGraph.

---

# 13. Deployment

## Hosting

Vercel.

---

## CDN

Cloudflare.

---

## Dominio

Opciones:

Inicial:

```
cliente.smartweb.com
```

Futuro:

```
cliente.com
```

---

# 14. Flujo de creación de cliente

Proceso objetivo:

```
Nuevo cliente

↓

Seleccionar plantilla

↓

Cargar información

↓

Generar configuración

↓

Deploy automático

↓

Sitio activo
```

---

# 15. Seguridad inicial

Implementar:

* Variables de entorno seguras.
* Validación de datos.
* Protección API.
* Sanitización contenido.
* HTTPS.

---

# 16. Performance

Objetivos:

* Mobile First.
* Carga rápida.
* Optimización imágenes.
* Componentes livianos.
* Buen Core Web Vitals.

---

# 17. Observabilidad

Preparar:

* Logs.
* Errores.
* Analytics.
* Métricas básicas.

---

# 18. Fuera de alcance PMV

No implementar:

* Dashboard cliente.
* Roles.
* Facturación.
* Marketplace real.
* CRM.
* IA.
* Automatizaciones.
* Aplicación móvil.

---

# 19. Evolución técnica

## Fase 1

Sitios configurables.

---

## Fase 2

CMS + Dashboard.

---

## Fase 3

Multi-tenant SaaS.

---

## Fase 4

SmartWeb OS.

Módulos:

* CRM.
* IA.
* Automatización.
* Marketing.
* Analytics.

---

# 20. Reglas para desarrollo con IA

Claude/Gemini deben seguir:

## Antes de crear código:

Revisar:

* FOUNDATION.md.
* PRODUCT.md.
* BUSINESS_MODEL.md.
* FEATURES_MATRIX.md.
* USER_STORIES.md.

---

## Toda implementación debe:

* Ser modular.
* Evitar duplicación.
* Mantener separación de responsabilidades.
* Priorizar reutilización.
* Preparar evolución SaaS.

---

## Prohibido:

* Crear funcionalidades fuera del roadmap.
* Hardcodear clientes.
* Crear páginas independientes sin arquitectura común.
* Introducir dependencias innecesarias.

---

# 21. Definición de éxito técnico

La arquitectura será considerada correcta cuando:

* Crear un nuevo cliente sea principalmente configuración.
* Una mejora pueda aplicarse a todos los sitios.
* Exista separación clara entre contenido y componentes.
* La plataforma pueda evolucionar hacia SaaS.

---

# Principio final

SmartWeb Express debe construirse como el primer ladrillo de una plataforma de infraestructura digital.

La velocidad del PMV es importante.

Pero la decisión arquitectónica más importante es no construir un conjunto de páginas web independientes.

Construimos una plataforma que puede alimentar cientos o miles de negocios locales.
