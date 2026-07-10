# PMV_SMARTWEB_EXPRESS.md

> SmartWeb Platform
> Producto Mínimo Vendible – SmartWeb Express
> Versión: 1.0
> Estado: Documento de definición de producto

---

# 1. Resumen ejecutivo

## Nombre del producto

**SmartWeb Express**

---

## Categoría

**Infraestructura Digital para Negocios de Barrio**

---

## Descripción

SmartWeb Express es un servicio-producto que permite a pequeños negocios obtener una presencia digital profesional, optimizada para generar consultas y oportunidades comerciales, sin necesidad de conocimientos técnicos.

El producto combina:

* Sitio web profesional.
* SEO Local.
* Conversión mediante WhatsApp.
* Hosting administrado.
* Mantenimiento continuo.
* Evolución progresiva hacia herramientas digitales de gestión.

---

# 2. Objetivo del PMV

El objetivo del Producto Mínimo Vendible es validar una hipótesis comercial:

> Los negocios locales están dispuestos a invertir en una infraestructura digital simple, accesible y administrada que les permita conseguir más clientes.

---

# 3. Hipótesis a validar

## Hipótesis principal

Los negocios de barrio tienen un problema real:

* No poseen presencia digital profesional.
* Dependen únicamente de redes sociales.
* Pierden oportunidades comerciales.
* No tienen capacidad técnica para gestionar tecnología.

SmartWeb resuelve este problema ofreciendo una solución rápida y acompañada.

---

# 4. Objetivos del producto

## Objetivo comercial

Crear una oferta fácil de entender y vender:

> "Tu negocio online profesional listo en 24 horas."

---

## Objetivo del cliente

Permitir que un negocio:

* Sea encontrado en Google.
* Reciba consultas.
* Muestre sus servicios.
* Genere confianza.
* Tenga un activo digital propio.

---

## Objetivo técnico

Crear una base reutilizable para producir múltiples sitios sin desarrollar cada proyecto desde cero.

---

# 5. Cliente objetivo

## Perfil principal

Dueño de negocio local.

Ejemplos:

* Comercios.
* Profesionales independientes.
* Servicios locales.
* Gastronomía.
* Turismo.
* Oficios.
* Emprendedores.

---

## Características

* Tiene poco tiempo.
* No quiere aprender tecnología.
* Usa WhatsApp como canal principal.
* Necesita resultados rápidos.
* Busca una solución económica.

---

# 6. Problema actual

Muchos negocios locales enfrentan:

## Falta de presencia digital

* No tienen página web.
* Tienen información desactualizada.
* No aparecen correctamente en búsquedas.

---

## Dependencia de terceros

* Redes sociales.
* Plataformas externas.
* Directorios.

---

## Falta de conversión

Tienen visitas pero no generan:

* consultas,
* contactos,
* oportunidades.

---

# 7. Propuesta de valor

SmartWeb Express ofrece:

## Rapidez

Presencia digital profesional en 24 horas.

---

## Simplicidad

El cliente no necesita aprender herramientas técnicas.

---

## Accesibilidad

Una solución profesional con inversión adaptada al negocio local.

---

## Evolución

El sitio puede crecer hacia:

* dashboard,
* catálogo,
* reservas,
* automatizaciones,
* herramientas comerciales.

---

# 8. Alcance del PMV

## Incluido

---

# 8.1 Sitio web profesional

Cada negocio tendrá:

## Página principal

Incluye:

* Hero.
* Propuesta de valor.
* Servicios.
* Beneficios.
* Galería.
* Testimonios.
* Preguntas frecuentes.
* Contacto.

---

# 8.2 Diseño responsive

Debe funcionar correctamente en:

* teléfonos móviles,
* tablets,
* escritorio.

Prioridad:

Mobile First.

---

# 8.3 Integración WhatsApp

Incluye:

* Botón flotante.
* Mensaje inicial configurable.
* Acceso directo a conversación.

Objetivo:

Reducir fricción de contacto.

---

# 8.4 Formularios de contacto

Campos iniciales:

* Nombre.
* Teléfono.
* Email.
* Mensaje.

Debe permitir:

* Capturar consultas.
* Registrar oportunidades.

---

# 8.5 SEO Local básico

Incluye:

## SEO técnico

* Title.
* Description.
* Sitemap.
* Robots.
* Open Graph.

---

## SEO Local

* Nombre comercial.
* Categoría.
* Ciudad.
* Ubicación.
* Schema LocalBusiness.

---

# 8.6 Google Maps

Incluye:

* Ubicación.
* Dirección.
* Acceso desde móvil.

---

# 8.7 Hosting administrado

Incluye:

* Deploy.
* Configuración inicial.
* Mantenimiento técnico.

---

# 9. Administración inicial

## Decisión PMV

No se desarrolla dashboard en la primera versión.

---

## Flujo operativo

```text
Cliente entrega información

↓

SmartWeb configura contenido

↓

Cliente revisa

↓

Sitio publicado

↓

Mantenimiento mensual
```

---

# 10. Modelo de contenido

La información debe estar separada del código.

Ejemplo:

```json
{
"name": "Negocio Demo",
"category": "servicios",
"city": "Mendoza",
"services": [],
"gallery": [],
"contact": {}
}
```

---

# 11. Arquitectura técnica

## Stack

Frontend:

* Next.js.
* TypeScript.
* Tailwind CSS.
* Shadcn/UI.

Backend:

* Supabase.
* PostgreSQL.

Infraestructura:

* Vercel.
* Cloudflare.

---

# 12. Sistema de plantillas

El producto debe utilizar templates reutilizables.

Ejemplo:

```text
Templates

├── Servicios
├── Comercio
├── Gastronomía
├── Turismo
└── Profesional
```

---

# 13. Fuera del alcance PMV

No desarrollar inicialmente:

## Dashboard cliente

Motivo:

Primero validar necesidad real.

---

## Marketplace completo

Motivo:

Mayor complejidad operativa.

---

## Ecommerce

Motivo:

No es necesario para validar propuesta.

---

## CRM

Motivo:

Producto futuro.

---

## IA avanzada

Motivo:

Debe incorporarse luego de validar casos de uso.

---

# 14. Roadmap evolución

---

# Versión 1.0

SmartWeb Express

Incluye:

* Sitio profesional.
* SEO.
* WhatsApp.
* Formularios.

---

# Versión 2.0

SmartWeb Growth

Incluye:

* Dashboard.
* Gestión de servicios.
* Productos.
* Galería.
* Promociones.

---

# Versión 3.0

SmartWeb Platform

Incluye:

* Multi-tenant.
* Usuarios.
* Roles.
* Suscripciones.
* Módulos.

---

# Versión 4.0

SmartWeb OS

Incluye:

* IA.
* CRM.
* Automatización.
* Marketing.
* Analytics.

---

# 15. Métricas de éxito

## Comercial

Medir:

* Cantidad de clientes adquiridos.
* Conversión de propuestas.
* Renovaciones mensuales.

---

## Producto

Medir:

* Tiempo de creación de un sitio.
* Reutilización de componentes.
* Cantidad de templates.

---

## Cliente

Medir:

* Visitas.
* Contactos generados.
* Clics WhatsApp.

---

# 16. Criterios de aceptación

El PMV estará listo cuando:

* Se pueda crear un sitio nuevo mediante configuración.
* Exista al menos una plantilla funcional.
* El contenido sea dinámico.
* El sitio tenga SEO básico.
* Exista integración WhatsApp.
* Exista formulario de contacto.
* Pueda desplegarse rápidamente.

---

# 17. Reglas para desarrollo

Todo desarrollo debe respetar:

## No crear páginas aisladas

Construir:

* componentes,
* templates,
* módulos.

---

## No hardcodear clientes

Los datos deben venir de configuración o base de datos.

---

## Pensar en plataforma

Cada decisión debe considerar:

* múltiples clientes,
* mantenimiento sencillo,
* evolución SaaS.

---

# 18. Principio final

SmartWeb Express no es una página web económica.

Es el primer paso hacia una infraestructura digital accesible para miles de negocios locales.

La primera versión debe ser:

* simple,
* vendible,
* repetible,
* escalable.

---

**Construir rápido.
Validar mercado.
Evolucionar con clientes reales.**
