# DATABASE_SCHEMA.md

> SmartWeb Platform
> Esquema de Base de Datos – PMV SmartWeb Express
> Versión: 1.0

---

# 1. Objetivo

Este documento define el modelo inicial de datos de SmartWeb.

La base de datos debe permitir:

* Crear sitios para negocios locales.
* Separar información por cliente.
* Gestionar contenido estructurado.
* Preparar evolución hacia SaaS multi-tenant.
* Incorporar módulos futuros.

---

# 2. Principios del modelo

## Multi-tenant ready

Desde el inicio cada dato debe poder asociarse a un negocio.

Modelo:

```
Platform

 └── Tenant

      └── Website

            └── Content
```

---

## Separación contenido / presentación

Los datos del negocio no deben estar mezclados con componentes visuales.

Ejemplo:

Incorrecto:

```
HeroComponent.tsx

"Ferretería López"
```

Correcto:

```
Database

Business Name:

Ferretería López
```

---

## Datos configurables

Crear nuevos clientes debe requerir:

* cargar información,
* seleccionar plantilla,
* configurar estilo.

No modificar código.

---

# 3. Arquitectura de datos general

```
SmartWeb Database


Tenants

    |

Businesses

    |

Websites

    |

Content

    |

Modules

    |

Analytics
```

---

# 4. Tablas principales PMV

---

# Tabla: tenants

## Objetivo

Representa una cuenta dentro de la plataforma.

En el futuro será la unidad principal multi-tenant.

---

Campos:

| Campo      | Tipo      | Descripción         |
| ---------- | --------- | ------------------- |
| id         | uuid      | Identificador       |
| name       | text      | Nombre interno      |
| status     | enum      | Estado              |
| created_at | timestamp | Fecha creación      |
| updated_at | timestamp | Última modificación |

---

Estados:

```
active
inactive
pending
```

---

# Tabla: businesses

## Objetivo

Información comercial del negocio.

---

Campos:

| Campo       | Tipo      |
| ----------- | --------- |
| id          | uuid      |
| tenant_id   | uuid      |
| name        | text      |
| slug        | text      |
| category    | text      |
| description | text      |
| phone       | text      |
| whatsapp    | text      |
| email       | text      |
| address     | text      |
| city        | text      |
| country     | text      |
| created_at  | timestamp |

---

Ejemplo:

```json
{
"name":"Mudanzas Miranda",
"category":"mudanzas",
"city":"Mendoza"
}
```

---

# Tabla: websites

## Objetivo

Configuración del sitio público.

---

Campos:

| Campo       | Tipo      |
| ----------- | --------- |
| id          | uuid      |
| tenant_id   | uuid      |
| business_id | uuid      |
| template_id | uuid      |
| domain      | text      |
| subdomain   | text      |
| status      | enum      |
| created_at  | timestamp |

---

Estados:

```
draft
published
paused
```

---

# Tabla: templates

## Objetivo

Gestionar diseños reutilizables.

---

Campos:

| Campo    | Tipo  |
| -------- | ----- |
| id       | uuid  |
| name     | text  |
| category | text  |
| version  | text  |
| config   | jsonb |

---

Ejemplo:

```json
{
"name":"restaurant-basic",
"version":"1.0"
}
```

---

# Tabla: pages

## Objetivo

Representar páginas del sitio.

---

Campos:

| Campo      | Tipo  |
| ---------- | ----- |
| id         | uuid  |
| website_id | uuid  |
| type       | text  |
| slug       | text  |
| content    | jsonb |

---

Tipos:

```
home
services
products
contact
blog
```

---

# Tabla: sections

## Objetivo

Construcción modular de páginas.

---

Campos:

| Campo     | Tipo    |
| --------- | ------- |
| id        | uuid    |
| page_id   | uuid    |
| component | text    |
| order     | integer |
| data      | jsonb   |

---

Ejemplo:

```json
{
"component":"hero",
"title":"Servicio profesional",
"image":"hero.jpg"
}
```

---

# 5. Contenido comercial

---

# Tabla: services

## Objetivo

Servicios ofrecidos por el negocio.

---

Campos:

| Campo       | Tipo    |
| ----------- | ------- |
| id          | uuid    |
| business_id | uuid    |
| title       | text    |
| description | text    |
| image       | text    |
| active      | boolean |

---

# Tabla: products

## Objetivo

Productos del negocio.

---

Campos:

| Campo       | Tipo    |
| ----------- | ------- |
| id          | uuid    |
| business_id | uuid    |
| name        | text    |
| description | text    |
| image       | text    |
| category    | text    |
| price       | numeric |
| active      | boolean |

---

# Tabla: gallery

## Objetivo

Imágenes comerciales.

---

Campos:

| Campo       | Tipo    |
| ----------- | ------- |
| id          | uuid    |
| business_id | uuid    |
| url         | text    |
| title       | text    |
| order       | integer |

---

# Tabla: testimonials

## Objetivo

Opiniones de clientes.

---

Campos:

| Campo       | Tipo    |
| ----------- | ------- |
| id          | uuid    |
| business_id | uuid    |
| name        | text    |
| message     | text    |
| rating      | integer |
| active      | boolean |

---

# 6. SEO

---

# Tabla: seo_settings

## Objetivo

Configuración SEO individual.

---

Campos:

| Campo       | Tipo  |
| ----------- | ----- |
| id          | uuid  |
| website_id  | uuid  |
| title       | text  |
| description | text  |
| keywords    | jsonb |
| schema      | jsonb |

---

Ejemplo schema:

```json
{
"type":"LocalBusiness",
"name":"Negocio Local"
}
```

---

# 7. Formularios y leads

(Futuro cercano)

---

# Tabla: leads

## Objetivo

Registrar consultas generadas.

---

Campos:

| Campo       | Tipo      |
| ----------- | --------- |
| id          | uuid      |
| business_id | uuid      |
| name        | text      |
| phone       | text      |
| email       | text      |
| message     | text      |
| source      | text      |
| created_at  | timestamp |

---

# 8. Usuarios y autenticación

(Futuro Dashboard)

---

# Tabla: users

## Objetivo

Usuarios del sistema.

---

Campos:

| Campo     | Tipo |
| --------- | ---- |
| id        | uuid |
| tenant_id | uuid |
| email     | text |
| role_id   | uuid |

---

Roles:

```
owner
admin
editor
viewer
```

---

# 9. Planes y módulos

(Futuro SaaS)

---

# Tabla: plans

Campos:

| Campo    | Tipo  |
| -------- | ----- |
| id       | uuid  |
| name     | text  |
| features | jsonb |

---

Ejemplo:

```json
{
"seo":true,
"products":false,
"analytics":false
}
```

---

# Tabla: modules

Campos:

| Campo       | Tipo |
| ----------- | ---- |
| id          | uuid |
| name        | text |
| description | text |

---

Ejemplos:

```
seo
products
reservations
analytics
ai
crm
```

---

# Tabla: tenant_modules

Objetivo:

Activar funcionalidades por cliente.

---

Campos:

| Campo     | Tipo    |
| --------- | ------- |
| id        | uuid    |
| tenant_id | uuid    |
| module_id | uuid    |
| active    | boolean |

---

# 10. Analytics

(Futuro)

---

# Tabla: events

Campos:

| Campo      | Tipo      |
| ---------- | --------- |
| id         | uuid      |
| website_id | uuid      |
| event      | text      |
| metadata   | jsonb     |
| created_at | timestamp |

---

Eventos:

```
page_view

whatsapp_click

form_submit

phone_click
```

---

# 11. Relaciones principales

```
tenants

 1

 |

 *

businesses


businesses

 1

 |

 *

websites


websites

 1

 |

 *

pages


pages

 1

 |

 *

sections
```

---

# 12. Seguridad Supabase

Implementar:

* Row Level Security.
* Políticas por tenant.
* Validación de permisos.
* Separación de datos.

---

Ejemplo:

Un usuario del tenant A nunca puede acceder a datos del tenant B.

---

# 13. Índices recomendados

Crear índices para:

```
businesses.slug

businesses.city

websites.domain

websites.subdomain

content.type

leads.created_at
```

---

# 14. Datos del PMV

Para SmartWeb Express solamente serán necesarios inicialmente:

## Obligatorios

* tenants
* businesses
* websites
* templates
* pages
* sections
* services
* gallery
* seo_settings

---

## Posteriores

* users
* modules
* plans
* analytics
* leads avanzados

---

# 15. Migración futura

La evolución será:

## PMV

Sitios configurables.

↓

## Dashboard

Gestión de contenido.

↓

## SaaS

Usuarios, planes y módulos.

↓

## Plataforma

Automatización e IA.

---

# 16. Regla para desarrollo con IA

Claude/Gemini deben:

* Mantener separación por tenant.
* Evitar tablas específicas por cliente.
* Usar contenido dinámico.
* Evitar hardcodear información comercial.
* Diseñar pensando en módulos activables.

---

# Principio final

La base de datos de SmartWeb no debe almacenar páginas web.

Debe almacenar negocios, capacidades y configuraciones que permitan generar infinitas experiencias digitales a partir de una misma plataforma.
