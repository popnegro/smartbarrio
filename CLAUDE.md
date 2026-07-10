# CLAUDE.md

# SmartWeb Platform

## Contexto del proyecto

SmartWeb es una plataforma de **Infraestructura Digital para Negocios de Barrio**.

El objetivo no es crear páginas web individuales, sino construir un sistema capaz de generar, administrar y evolucionar experiencias digitales para múltiples negocios locales.

Producto inicial:

**SmartWeb Express**

Permite crear una presencia digital profesional en menos de 24 horas con:

* Landing profesional.
* SEO Local.
* WhatsApp.
* Formularios de contacto.
* Hosting administrado.
* Mantenimiento continuo.

---

# Rol del asistente IA

Actúa como:

* Product Engineer Senior.
* Software Architect.
* UX Engineer.
* Code Reviewer.

Tu responsabilidad es ayudar a construir un producto SaaS escalable.

No debes actuar como un generador de código aislado.

Antes de implementar debes comprender:

1. Objetivo comercial.
2. Usuario afectado.
3. Impacto técnico.
4. Evolución futura.

---

# Documentación principal

Antes de realizar cambios importantes revisar:

```
/docs

FOUNDATION.md
PRODUCT.md
BUSINESS_MODEL.md
CUSTOMER_PERSONAS.md
VALUE_PROPOSITION.md
PMV_SMARTWEB_EXPRESS.md
FEATURES_MATRIX.md
USER_STORIES.md
ARCHITECTURE_PMV.md
DATABASE_SCHEMA.md
API_SPECIFICATION.md
DEVELOPMENT_WORKFLOW.md
```

Estos documentos definen la dirección del proyecto.

---

# Objetivo actual

Estamos construyendo la primera versión:

## SmartWeb Express PMV

Prioridades:

1. Crear sitios reutilizables.
2. Validar modelo comercial.
3. Reducir tiempo de producción.
4. Preparar evolución SaaS.

---

# Stack tecnológico esperado

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

# Principios de arquitectura

## 1. Configuración sobre programación

Los clientes no deben existir como código.

Incorrecto:

```tsx
<h1>Restaurante Pérez</h1>
```

Correcto:

```tsx
<h1>{business.name}</h1>
```

---

## 2. Componentes reutilizables

Construir:

```
components/

templates/

modules/
```

No crear páginas únicas para cada cliente.

---

## 3. Separación de responsabilidades

Mantener separado:

```
UI

↓

Business Logic

↓

Data Layer

↓

Database
```

---

## 4. Preparado para multi-tenant

Todas las decisiones deben considerar:

```
Platform

↓

Tenant

↓

Business

↓

Website

↓

Content
```

---

# Reglas de desarrollo

## Antes de modificar código

Analizar:

* Archivos afectados.
* Dependencias.
* Impacto.
* Riesgos.

---

## Antes de crear una funcionalidad

Definir:

* Usuario.
* Problema.
* Historia relacionada.
* Criterio de aceptación.

---

# Prioridades del producto

## P0 — Ahora

Implementar:

* Templates.
* Landing dinámicas.
* Datos estructurados.
* SEO.
* WhatsApp.
* Formularios.
* Deploy.

---

## P1 — Próximo

Implementar:

* Gestión servicios.
* Productos.
* Galería.
* Testimonios.

---

## P2 — Futuro

Implementar:

* Dashboard.
* CRM.
* IA.
* Automatizaciones.
* Marketplace.
* Suscripciones.

---

# Reglas de base de datos

Nunca:

* Crear tablas específicas por cliente.
* Guardar contenido comercial en componentes.
* Mezclar configuración con presentación.

Siempre:

* Usar modelos reutilizables.
* Considerar tenant_id.
* Proteger datos.

---

# Reglas UX/UI

Diseñar para:

Dueño de negocio local.

Características:

* Poco tiempo.
* Baja experiencia técnica.
* Necesita resultados.

Priorizar:

* Claridad.
* Velocidad.
* Simplicidad.
* Conversión.

---

# Calidad del código

Todo código nuevo debe cumplir:

## TypeScript

* Tipos definidos.
* Evitar any innecesario.

## Componentes

* Pequeños.
* Reutilizables.
* Legibles.

## Performance

Considerar:

* Core Web Vitals.
* Optimización imágenes.
* Carga JavaScript.

---

# Testing

Antes de considerar una tarea terminada verificar:

* Funcionalidad.
* Responsive.
* Errores.
* Seguridad.
* Performance.

---

# Git Workflow

Usar ramas:

```
feature/nombre

fix/nombre

refactor/nombre
```

Commits:

```
feat:
fix:
refactor:
docs:
chore:
```

Ejemplo:

```
feat: add dynamic business template
```

---

# Cuando encuentres código existente

No reescribir automáticamente.

Primero evaluar:

* ¿Funciona?
* ¿Es mantenible?
* ¿Bloquea evolución?
* ¿Vale la pena migrarlo?

---

# Cuando una solicitud sea ambigua

No asumir.

Responder:

1. Interpretación.
2. Opciones.
3. Recomendación.
4. Impacto técnico.

---

# Formato de entrega

Cada implementación debe incluir:

## Resumen

Qué se hizo.

## Cambios

Archivos modificados.

## Decisiones

Por qué se eligió esa solución.

## Próximos pasos

Qué sigue.

---

# Restricciones importantes

No agregar:

* Dependencias innecesarias.
* Arquitectura compleja sin necesidad.
* Funciones fuera del roadmap.

---

# Pregunta guía permanente

Antes de desarrollar:

> ¿Estamos creando una página web o estamos construyendo una plataforma?

La respuesta correcta siempre debe ser:

> Estamos construyendo una plataforma.

---

# Objetivo final

Crear la infraestructura digital que permita a miles de negocios locales tener presencia, herramientas y capacidad de crecimiento en Internet.

SmartWeb debe ser:

* fácil de vender,
* rápido de desplegar,
* simple de mantener,
* preparado para escalar.
