# API_SPECIFICATION.md

> SmartWeb Platform
> Especificación de API – PMV SmartWeb Express
> Versión: 1.0

---

# 1. Objetivo

Este documento define la arquitectura de comunicación entre los diferentes componentes de SmartWeb.

La API debe permitir:

* Obtener información de negocios.
* Renderizar sitios dinámicos.
* Gestionar contenido estructurado.
* Preparar la futura plataforma SaaS.
* Integrar dashboard, módulos y automatizaciones.

---

# 2. Principios de API

## API First

Toda funcionalidad debe diseñarse pensando en una separación entre:

* Datos.
* Lógica.
* Presentación.

---

## Configuración sobre código

Crear un nuevo cliente no debe requerir nuevos componentes.

Debe resolverse mediante:

* Configuración.
* Datos.
* Plantillas.

---

## Preparada para multi-tenant

Todas las consultas deben considerar el contexto del negocio.

Ejemplo:

```text
Request

↓

Tenant

↓

Website

↓

Content

```

---

# 3. Arquitectura general

```text
                Client Browser

                      |

                      |

                 Next.js App

                      |

                      |

              SmartWeb Data Layer

                      |

                      |

                 Supabase

                      |

                      |

              PostgreSQL Database
```

---

# 4. Capas de API

SmartWeb tendrá tres niveles:

---

# Layer 1 — Public API

Uso:

Sitios públicos.

Permite:

* Obtener información del negocio.
* Renderizar páginas.
* Mostrar servicios.
* Mostrar productos.

---

# Layer 2 — Internal API

Uso:

Administración SmartWeb.

Permite:

* Crear clientes.
* Actualizar contenido.
* Gestionar sitios.

---

# Layer 3 — Future SaaS API

Uso:

Dashboard cliente.

Permite:

* Usuarios.
* Roles.
* Módulos.
* Suscripciones.

---

# 5. Convenciones

## Base URL

Desarrollo:

```text
/api/v1
```

Producción:

```text
https://api.smartweb.com/v1
```

---

## Formato

Todas las respuestas utilizan JSON.

Ejemplo:

```json
{
 "success": true,
 "data": {}
}
```

---

# 6. Public API

---

# GET Business

Obtiene información comercial.

Endpoint:

```http
GET /business/{slug}
```

---

Response:

```json
{
"id":"123",
"name":"Negocio Demo",
"category":"servicios",
"city":"Mendoza",
"description":"Descripción"
}
```

---

# GET Website

Obtiene configuración del sitio.

Endpoint:

```http
GET /website/{slug}
```

---

Response:

```json
{
"template":"professional",
"theme":{
"primary":"#000000"
}
}
```

---

# GET Pages

Obtiene páginas públicas.

Endpoint:

```http
GET /website/{slug}/pages
```

---

Response:

```json
[
 {
  "type":"home",
  "sections":[]
 }
]
```

---

# GET Services

Obtiene servicios.

Endpoint:

```http
GET /business/{id}/services
```

---

Response:

```json
[
 {
  "title":"Servicio 1",
  "description":"..."
 }
]
```

---

# GET Products

Obtiene productos.

Endpoint:

```http
GET /business/{id}/products
```

---

Response:

```json
[
 {
  "name":"Producto",
  "image":"url"
 }
]
```

---

# 7. Contact API

---

# POST Lead

Registra consulta.

Endpoint:

```http
POST /leads
```

---

Request:

```json
{
"name":"Juan",
"phone":"+549...",
"message":"Consulta"
}
```

---

Response:

```json
{
"success":true,
"id":"lead123"
}
```

---

# 8. Internal API

---

# POST Create Business

Crear nuevo cliente.

Endpoint:

```http
POST /admin/businesses
```

---

Request:

```json
{
"name":"Nuevo negocio",
"category":"restaurant",
"template":"basic"
}
```

---

# PUT Update Business

Actualizar información.

Endpoint:

```http
PUT /admin/businesses/{id}
```

---

# POST Publish Website

Publicar sitio.

Endpoint:

```http
POST /admin/websites/{id}/publish
```

---

# 9. Future Dashboard API

---

# Authentication

Preparado para:

* Supabase Auth.
* JWT.
* Roles.

---

# GET Current User

```http
GET /user/me
```

---

Response:

```json
{
"id":"123",
"role":"owner"
}
```

---

# 10. Modules API

(Futuro)

---

# GET Available Modules

```http
GET /modules
```

---

Response:

```json
[
{
"name":"seo",
"active":true
}
]
```

---

# POST Activate Module

```http
POST /modules/{id}/activate
```

---

# 11. Subscription API

(Futuro)

---

# GET Current Plan

```http
GET /subscription
```

---

Response:

```json
{
"plan":"growth",
"modules":[
"seo",
"products"
]
}
```

---

# 12. Error handling

Formato estándar:

```json
{
"success":false,
"error":{
"code":"NOT_FOUND",
"message":"Resource not found"
}
}
```

---

Códigos:

| Código | Uso             |
| ------ | --------------- |
| 400    | Datos inválidos |
| 401    | No autorizado   |
| 403    | Sin permisos    |
| 404    | No encontrado   |
| 500    | Error servidor  |

---

# 13. Seguridad

Implementar:

* Validación de inputs.
* Rate limiting.
* Protección contra abuso.
* Variables privadas.
* RLS Supabase.

---

# 14. Cache

Aplicar cache en:

* Datos públicos.
* Páginas.
* Imágenes.
* Configuración del sitio.

Objetivo:

Reducir consultas y mejorar velocidad.

---

# 15. SEO y API

La API debe entregar:

* Metadata.
* Schema.
* Información geográfica.
* Datos estructurados.

Ejemplo:

```json
{
"type":"LocalBusiness",
"name":"Negocio",
"city":"Mendoza"
}
```

---

# 16. Webhooks futuros

Preparar integración con:

* Pagos.
* CRM.
* WhatsApp API.
* Analytics.
* Automatizaciones.

---

# 17. Versionado

La API debe versionarse:

Actual:

```text
/v1
```

Futuro:

```text
/v2
```

Nunca romper clientes existentes.

---

# 18. Testing

Cada endpoint debe tener:

* Validación de entrada.
* Caso exitoso.
* Caso error.
* Seguridad.
* Performance.

---

# 19. Fuera del PMV

No implementar inicialmente:

* API pública externa.
* Marketplace API.
* Integraciones complejas.
* Webhooks avanzados.
* GraphQL.

---

# 20. Reglas para desarrollo con IA

Claude/Gemini deben:

* Mantener contratos API claros.
* No acceder directamente a tablas desde componentes visuales.
* Separar lógica de negocio.
* Crear servicios reutilizables.
* Documentar nuevos endpoints.

---

# Principio final

La API de SmartWeb no debe servir únicamente páginas web.

Debe convertirse en la capa de servicios que permita operar una plataforma completa de infraestructura digital para negocios locales.
