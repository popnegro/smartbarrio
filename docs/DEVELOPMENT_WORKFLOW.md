# DEVELOPMENT_WORKFLOW.md

> SmartWeb Platform
> Flujo de Desarrollo y Operación del Proyecto
> Versión: 1.0

---

# 1. Objetivo

Este documento define el proceso de trabajo técnico para construir, mantener y evolucionar SmartWeb.

El objetivo es garantizar:

* Desarrollo ordenado.
* Código mantenible.
* Evolución segura.
* Velocidad de implementación.
* Calidad de producto.

---

# 2. Rol del equipo

Durante el desarrollo, cada participante debe asumir responsabilidades claras.

## Product Owner

Responsable de:

* Visión del producto.
* Priorización.
* Validación comercial.
* Decisiones estratégicas.

---

## Claude / AI Engineering Assistant

Actúa como:

* Product Engineer.
* Arquitecto técnico.
* Revisor de código.
* Analista de impacto.

Responsabilidades:

* Proponer soluciones.
* Crear código.
* Revisar arquitectura.
* Detectar riesgos.
* Mantener documentación.

---

## Developer

Responsable de:

* Implementación.
* Testing.
* Deploy.
* Mantenimiento.

---

# 3. Flujo general de desarrollo

Todo cambio debe seguir:

```text
Idea

↓

Análisis

↓

Definición

↓

Implementación

↓

Testing

↓

Review

↓

Deploy

↓

Documentación
```

---

# 4. Antes de desarrollar

Antes de escribir código:

Analizar:

## Producto

* ¿Qué problema resuelve?
* ¿Qué usuario beneficia?
* ¿Está dentro del roadmap?

---

## Arquitectura

* ¿Afecta estructura existente?
* ¿Es reutilizable?
* ¿Impacta multi-tenant?

---

## Negocio

* ¿Genera valor?
* ¿Puede venderse?
* ¿Aumenta retención?

---

# 5. Gestión de funcionalidades

Toda nueva funcionalidad debe clasificarse:

## P0 — Crítica

Necesaria para vender.

Ejemplos:

* Landing.
* SEO.
* WhatsApp.
* Templates.

---

## P1 — Importante

Mejora producto.

Ejemplos:

* Gestión servicios.
* Productos.
* Galería.

---

## P2 — Futuro

Expansión.

Ejemplos:

* IA.
* CRM.
* Automatizaciones.

---

# 6. Proceso para nuevas features

Antes de crear una feature:

Crear documento:

```text
/features/NOMBRE_FEATURE.md
```

Debe incluir:

* Objetivo.
* Usuario.
* Problema.
* Solución.
* User stories relacionadas.
* Diseño.
* Impacto técnico.
* Criterios aceptación.

---

# 7. Organización del repositorio

Estructura recomendada:

```text
smartweb/

├── apps/

│   ├── marketing/
│   ├── client-sites/
│   └── admin/


├── packages/

│   ├── ui/
│   ├── components/
│   ├── templates/
│   ├── database/
│   └── utils/


├── docs/

├── tests/

├── scripts/

└── README.md
```

---

# 8. Convenciones de código

## Naming

Componentes:

```typescript
BusinessCard.tsx
```

Funciones:

```typescript
getBusinessData()
```

Variables:

```typescript
businessName
```

---

# 9. Componentes

Reglas:

Los componentes deben ser:

* pequeños.
* reutilizables.
* independientes.

Evitar:

```text
HugeComponent.tsx
```

Preferir:

```text
Hero/

├── Hero.tsx

├── Hero.types.ts

└── Hero.utils.ts
```

---

# 10. Gestión de contenido

Nunca almacenar contenido comercial directamente en componentes.

Incorrecto:

```tsx
<h1>
Mudanzas Miranda
</h1>
```

Correcto:

```tsx
<h1>
{business.name}
</h1>
```

---

# 11. Flujo Git

## Branch principal

```text
main
```

Debe contener código estable.

---

## Desarrollo

Crear ramas:

```text
feature/nombre-feature

fix/nombre-error

refactor/nombre-cambio
```

---

Ejemplos:

```text
feature/client-dashboard

feature/seo-module

fix/mobile-navbar
```

---

# 12. Commits

Usar commits descriptivos.

Formato:

```text
tipo: descripción
```

Ejemplos:

```text
feat: add business template system

fix: resolve mobile menu issue

refactor: improve content loader

docs: update architecture
```

---

# 13. Pull Requests

Antes de fusionar:

Revisar:

## Código

* Funciona.
* Está limpio.
* No duplica lógica.

---

## Producto

* Resuelve la necesidad.

---

## Arquitectura

* Mantiene escalabilidad.

---

# 14. Testing

Cada funcionalidad importante debe tener:

## Testing funcional

Verificar:

* Usuario puede completar tarea.
* Flujo principal funciona.

---

## Testing técnico

Verificar:

* Errores.
* Performance.
* Responsive.

---

# 15. Deploy Workflow

Proceso:

```text
Código

↓

Git Push

↓

CI Validation

↓

Build

↓

Preview Deployment

↓

Review

↓

Production
```

---

# 16. Variables de entorno

Nunca almacenar:

* API keys.
* Tokens.
* Secretos.

Usar:

```text
.env.local
```

Ejemplo:

```env
DATABASE_URL=
SUPABASE_KEY=
VERCEL_TOKEN=
```

---

# 17. Seguridad

Revisar siempre:

* Inputs usuario.
* Autenticación.
* Permisos.
* Datos sensibles.
* APIs.

---

# 18. Performance

Toda implementación debe considerar:

* Core Web Vitals.
* Optimización imágenes.
* Carga JavaScript.
* SEO.
* Mobile.

---

# 19. Documentación obligatoria

Actualizar documentación cuando cambie:

* Arquitectura.
* Base datos.
* API.
* Features.
* Instalación.

---

# 20. Uso de IA durante desarrollo

Claude debe:

## Antes de modificar:

Analizar:

* Archivos afectados.
* Dependencias.
* Riesgos.

---

## Durante implementación:

Explicar:

* Qué cambia.
* Por qué.
* Alternativas.

---

## Después:

Entregar:

* Resumen.
* Archivos modificados.
* Próximos pasos.

---

# 21. Reglas de refactor

No hacer refactors grandes sin motivo.

Antes:

Evaluar:

* Impacto.
* Riesgo.
* Beneficio.

---

Prioridad:

1. Código que bloquea crecimiento.
2. Código repetido.
3. Código difícil de mantener.

---

# 22. Manejo de deuda técnica

Registrar:

```text
/docs/TECH_DEBT.md
```

Cada deuda debe incluir:

* Problema.
* Impacto.
* Prioridad.
* Solución propuesta.

---

# 23. Revisión semanal

Cada semana revisar:

## Producto

* ¿Estamos acercándonos a ventas?

## Código

* ¿La arquitectura mejora?

## Cliente

* ¿Aporta valor real?

---

# 24. Regla para Claude

Cuando una solicitud sea ambigua:

No asumir.

Debe:

1. Explicar interpretación.
2. Proponer solución.
3. Indicar impacto.
4. Pedir confirmación si cambia arquitectura.

---

# 25. Criterio final

Una buena implementación SmartWeb debe ser:

* Fácil de vender.
* Fácil de mantener.
* Fácil de replicar.
* Fácil de evolucionar.

---

# Principio final

La velocidad crea oportunidades.

La arquitectura permite crecer.

SmartWeb necesita ambas.
