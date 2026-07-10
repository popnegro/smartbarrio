# USER_STORIES.md

> SmartWeb Platform
> Historias de Usuario – PMV SmartWeb Express
> Versión: 1.0

---

# 1. Objetivo del documento

Este documento transforma la visión del producto en necesidades concretas de usuario.

Las historias de usuario servirán como base para:

* Diseño UX.
* Desarrollo frontend.
* Desarrollo backend.
* Diseño de base de datos.
* Testing.
* Priorización del roadmap.

---

# 2. Formato

Cada historia sigue esta estructura:

**Como** [tipo de usuario]

**Quiero** [acción]

**Para** [beneficio esperado]

---

# 3. Usuarios del sistema

SmartWeb tiene tres tipos principales de usuarios:

---

# Usuario 01 — Visitante final

Persona que busca información sobre un negocio.

Objetivo:

Encontrar información y contactar.

---

# Usuario 02 — Dueño del negocio

Cliente SmartWeb.

Objetivo:

Tener presencia digital y generar oportunidades.

---

# Usuario 03 — Administrador SmartWeb

Equipo interno.

Objetivo:

Crear, gestionar y mantener clientes.

---

# EPIC 01 — Creación de presencia digital

---

## US-001 Crear un sitio profesional

**Como** dueño de un negocio

**Quiero** tener un sitio web profesional

**Para** mostrar mi negocio y generar confianza.

### Criterios de aceptación

* El sitio debe tener diseño responsive.
* Debe funcionar correctamente en móvil.
* Debe cargar rápidamente.
* Debe representar la identidad del negocio.
* Debe incluir información comercial.

Prioridad:

P0 — Crítica

---

## US-002 Publicar información del negocio

**Como** dueño de un negocio

**Quiero** mostrar información básica

**Para** que mis clientes puedan encontrarme.

### Criterios

Debe poder mostrar:

* Nombre comercial.
* Descripción.
* Ubicación.
* Teléfono.
* WhatsApp.
* Horarios.

Prioridad:

P0

---

# EPIC 02 — Conversión de visitantes

---

## US-003 Contactar por WhatsApp

**Como** visitante

**Quiero** contactar rápidamente con el negocio

**Para** realizar una consulta.

### Criterios

* Existe botón visible.
* Abre conversación WhatsApp.
* Permite mensaje inicial personalizado.
* Funciona en móvil y escritorio.

Prioridad:

P0

---

## US-004 Enviar formulario de contacto

**Como** visitante

**Quiero** enviar una consulta

**Para** contactar cuando no utilizo WhatsApp.

### Criterios

Formulario:

* Nombre.
* Teléfono.
* Email opcional.
* Mensaje.

Debe:

* Validar campos.
* Mostrar confirmación.
* Registrar consulta.

Prioridad:

P0

---

# EPIC 03 — Servicios y productos

---

## US-005 Mostrar servicios

**Como** dueño de negocio

**Quiero** mostrar mis servicios

**Para** explicar qué ofrezco.

### Criterios

Cada servicio debe permitir:

* Nombre.
* Descripción.
* Imagen.
* Beneficios.

Prioridad:

P1

---

## US-006 Mostrar productos

**Como** dueño de negocio

**Quiero** mostrar productos

**Para** que los clientes conozcan mi oferta.

### Criterios

Producto:

* Nombre.
* Imagen.
* Descripción.
* Categoría.
* Precio opcional.

Prioridad:

P1

---

# EPIC 04 — Confianza y reputación

---

## US-007 Mostrar testimonios

**Como** dueño de negocio

**Quiero** mostrar opiniones de clientes

**Para** aumentar la confianza.

### Criterios

Debe mostrar:

* Nombre.
* Comentario.
* Valoración opcional.

Prioridad:

P1

---

## US-008 Mostrar galería

**Como** dueño de negocio

**Quiero** mostrar imágenes

**Para** demostrar la calidad de mi trabajo.

### Criterios

Debe permitir:

* Imágenes.
* Descripción opcional.
* Orden visual.

Prioridad:

P1

---

# EPIC 05 — SEO Local

---

## US-009 Aparecer correctamente en Google

**Como** dueño de negocio

**Quiero** que mi sitio esté optimizado

**Para** aumentar mis posibilidades de aparecer en búsquedas locales.

### Criterios

Debe incluir:

* Metadata.
* Schema LocalBusiness.
* Sitemap.
* Robots.
* Open Graph.

Prioridad:

P0

---

## US-010 Mostrar ubicación

**Como** visitante

**Quiero** encontrar la ubicación del negocio

**Para** poder visitarlo.

### Criterios

Debe incluir:

* Mapa.
* Dirección.
* Indicaciones.

Prioridad:

P0

---

# EPIC 06 — Administración SmartWeb

---

## US-011 Crear un nuevo cliente

**Como** administrador SmartWeb

**Quiero** crear un nuevo negocio

**Para** publicar rápidamente un nuevo sitio.

### Criterios

Debe permitir:

* Crear cliente.
* Seleccionar plantilla.
* Cargar información inicial.
* Publicar.

Prioridad:

P0

---

## US-012 Reutilizar plantillas

**Como** administrador SmartWeb

**Quiero** utilizar plantillas existentes

**Para** reducir tiempos de producción.

### Criterios

Debe existir:

* Sistema de componentes reutilizables.
* Configuración por negocio.
* Personalización básica.

Prioridad:

P0

---

# EPIC 07 — Gestión futura del cliente

---

## US-013 Administrar contenido desde dashboard

**Como** dueño de negocio

**Quiero** modificar información

**Para** no depender siempre de soporte.

### Criterios futuros:

Debe permitir:

* Editar servicios.
* Editar productos.
* Editar horarios.
* Editar promociones.

Prioridad:

P2

---

# EPIC 08 — Evolución comercial

---

## US-014 Agregar nuevos módulos

**Como** administrador SmartWeb

**Quiero** activar funcionalidades

**Para** aumentar el valor del cliente.

### Criterios

Debe permitir:

* Activar módulos.
* Desactivar módulos.
* Gestionar planes.

Prioridad:

P2

---

# EPIC 09 — Analítica

---

## US-015 Medir resultados

**Como** dueño de negocio

**Quiero** conocer el rendimiento

**Para** saber si mi presencia digital funciona.

### Métricas iniciales:

* Visitas.
* Clics WhatsApp.
* Formularios.
* Fuentes de tráfico.

Prioridad:

P2

---

# 4. Historias fuera del PMV

No desarrollar inicialmente:

---

## US-016 Gestionar inventario

Motivo:

Complejidad operacional.

---

## US-017 Crear marketplace multi-vendedor

Motivo:

Fuera del objetivo inicial.

---

## US-018 Crear aplicación móvil

Motivo:

No valida la hipótesis principal.

---

# 5. Priorización general

## P0 — Obligatorio para vender

* Crear sitio.
* Mostrar negocio.
* WhatsApp.
* Formulario.
* SEO básico.
* Google Maps.
* Plantillas.

---

## P1 — Mejora comercial

* Servicios.
* Productos.
* Galería.
* Testimonios.

---

## P2 — Evolución SaaS

* Dashboard.
* Módulos.
* Analytics.
* IA.
* Automatizaciones.

---

# 6. Definición de terminado

Una historia se considera completa cuando:

* Funciona técnicamente.
* Tiene diseño aprobado.
* Es responsive.
* Tiene validaciones.
* Tiene pruebas básicas.
* Está documentada.
* Puede reutilizarse para otros clientes.

---

# 7. Regla para agentes IA

Cuando Claude, Gemini o cualquier agente trabaje sobre SmartWeb:

Debe priorizar historias P0 antes de crear funcionalidades P1 o P2.

Nunca debe agregar funcionalidades nuevas sin:

1. Justificar el valor comercial.
2. Indicar impacto técnico.
3. Confirmar que no rompe la simplicidad del producto.
