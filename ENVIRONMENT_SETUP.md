# ENVIRONMENT_SETUP.md

> SmartWeb Platform
> Configuración de Entorno de Desarrollo
> Versión: 1.0

---

# 1. Objetivo

Este documento define el proceso para configurar un entorno local de desarrollo para SmartWeb.

Debe permitir que un nuevo colaborador pueda:

* Clonar el repositorio.
* Instalar dependencias.
* Configurar servicios externos.
* Ejecutar el proyecto.
* Desplegar una versión funcional.

---

# 2. Arquitectura del entorno

```text
Developer Machine

        |

        |

GitHub Repository

        |

        |

Next.js Application

        |

        |

Supabase Backend

        |

        |

Vercel Deployment

        |

        |

Cloudflare Domain
```

---

# 3. Requisitos del sistema

## Software requerido

### Node.js

Versión recomendada:

```bash
Node.js 20 LTS+
```

Verificar:

```bash
node -v
```

---

### Package Manager

Preferido:

```bash
npm
```

Alternativas:

```bash
pnpm
yarn
```

---

### Git

Verificar:

```bash
git --version
```

---

### Editor recomendado

Visual Studio Code.

Extensiones sugeridas:

* ESLint.
* Prettier.
* Tailwind CSS IntelliSense.
* GitHub Copilot.
* Gemini Code Assist.
* Claude Code.

---

# 4. Clonar repositorio

```bash
git clone https://github.com/popnegro/smartweb.git
```

Ingresar:

```bash
cd smartweb
```

---

# 5. Instalar dependencias

Ejecutar:

```bash
npm install
```

Verificar:

```bash
npm list
```

---

# 6. Variables de entorno

Crear archivo:

```bash
.env.local
```

Nunca subir este archivo al repositorio.

---

# 7. Variables principales

Ejemplo:

```env
# Application

NEXT_PUBLIC_APP_URL=http://localhost:3000


# Supabase

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=


# Vercel

VERCEL_TOKEN=

VERCEL_ORG_ID=

VERCEL_PROJECT_ID=


# AI Services

GEMINI_API_KEY=
```

---

# 8. Descripción de variables

---

## NEXT_PUBLIC_APP_URL

URL pública de la aplicación.

Desarrollo:

```text
http://localhost:3000
```

Producción:

```text
https://dominio.com
```

---

## Supabase

### NEXT_PUBLIC_SUPABASE_URL

URL pública del proyecto Supabase.

Ejemplo:

```text
https://xxxxx.supabase.co
```

---

### NEXT_PUBLIC_SUPABASE_ANON_KEY

Clave pública para cliente.

Uso:

* consultas frontend.
* autenticación.

---

### SUPABASE_SERVICE_ROLE_KEY

Clave privada.

Uso:

* backend.
* procesos administrativos.

Nunca exponer al navegador.

---

## Vercel

### VERCEL_TOKEN

Token para:

* deploy.
* automatizaciones.
* integración CI/CD.

---

### VERCEL_ORG_ID

Identificador organización.

---

### VERCEL_PROJECT_ID

Identificador proyecto.

---

## Gemini

### GEMINI_API_KEY

Usada para:

* generación IA.
* automatizaciones.
* asistentes.

---

# 9. Configuración Supabase

## Crear proyecto

Crear proyecto:

SmartWeb Platform

Configurar:

* PostgreSQL.
* Authentication.
* Storage.
* Row Level Security.

---

# 10. Base de datos inicial

Crear tablas:

```text
tenants

businesses

websites

templates

pages

sections

services

products

seo_settings

leads
```

Referencia:

```text
DATABASE_SCHEMA.md
```

---

# 11. Seguridad Supabase

Activar:

* Row Level Security.
* Policies.
* Validación permisos.

Regla:

Un negocio nunca debe acceder a datos de otro negocio.

---

# 12. Ejecutar aplicación

Modo desarrollo:

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

---

# 13. Scripts esperados

Ejemplo:

```json
{
"scripts":{
"dev":"next dev",
"build":"next build",
"start":"next start",
"lint":"next lint"
}
}
```

---

# 14. Build local

Antes de desplegar:

```bash
npm run build
```

Validar:

* errores TypeScript.
* errores build.
* rutas.
* variables.

---

# 15. Configuración Vercel

Conectar repositorio:

GitHub → Vercel.

Configurar:

Framework:

```text
Next.js
```

---

Agregar variables:

```text
.env.local
```

en:

Vercel Dashboard:

Project Settings → Environment Variables

---

# 16. Deploy

Proceso:

```text
Git Push

↓

Vercel Build

↓

Preview

↓

Production
```

---

# 17. Configuración Cloudflare

Uso:

* DNS.
* SSL.
* Seguridad.
* Cache.

Configurar:

* Dominio.
* CNAME hacia Vercel.
* SSL Full.
* HTTPS obligatorio.

---

# 18. Flujo Git recomendado

Crear rama:

```bash
git checkout -b feature/nombre
```

Trabajar.

Commit:

```bash
git add .

git commit -m "feat: descripcion"
```

Push:

```bash
git push origin feature/nombre
```

---

# 19. Checklist nuevo entorno

## Sistema

* [ ] Node instalado.
* [ ] Git configurado.
* [ ] Editor instalado.

---

## Proyecto

* [ ] Repositorio clonado.
* [ ] Dependencias instaladas.
* [ ] `.env.local` creado.

---

## Servicios

* [ ] Supabase conectado.
* [ ] Variables configuradas.
* [ ] Base inicial creada.

---

## Desarrollo

* [ ] Proyecto inicia.
* [ ] Build funciona.
* [ ] Linter correcto.

---

# 20. Troubleshooting

---

## Error: módulo no encontrado

Ejecutar:

```bash
rm -rf node_modules

rm package-lock.json

npm install
```

---

## Error variables undefined

Verificar:

* nombre exacto variable.
* reiniciar servidor.
* configuración Vercel.

---

## Error Supabase

Revisar:

* URL.
* Keys.
* permisos RLS.

---

# 21. Reglas para IA

Claude/Gemini deben:

Antes de modificar configuración:

* revisar variables existentes.
* no crear secretos falsos.
* documentar nuevas variables.

---

# 22. Entornos

SmartWeb debe manejar:

```text
Development

↓

Preview

↓

Production
```

---

# 23. Objetivo final

El entorno debe permitir:

* desarrollo rápido.
* despliegue seguro.
* colaboración.
* evolución SaaS.

---

# Principio final

Un buen entorno elimina fricción.

SmartWeb debe permitir pasar de una idea a un negocio digital funcionando con la menor cantidad de pasos posible.
