# Proyecto: Aplicación de Facturación y Gestión de Clientes (Desktop App)

## Tipo
Proyecto personal / freelance

## Stack
Electron, React (Vite), Node.js, SQLite

## Descripción
Aplicación multiplataforma orientada a la gestión integral de clientes, sesiones, pagos y facturación automática.

Diseñada como herramienta real de trabajo para profesionales, priorizando estabilidad, claridad de flujo y automatización de tareas repetitivas.

---

## Funcionalidades clave

- Gestión de clientes y servicios
- Sincronización con Google Calendar
- Control de pagos en efectivo y banco
- Generación automática de facturas en PDF
- Control de estado de facturas generadas para evitar duplicados
- Persistencia de datos en base de datos local

---

## Decisiones técnicas relevantes

- Separación clara entre proceso principal y renderer en Electron.
- Gestión de base de datos SQLite adaptada a entorno empaquetado en producción.
- Diseño de sistema de facturación con control de estado para evitar generación duplicada de documentos.
- Manejo de sincronización con Google Calendar gestionando sesiones expiradas y errores externos.
- Modularización del frontend en React para mantener escalabilidad y mantenibilidad.

---

## Retos técnicos

- Integración estable entre Electron y React.
- Gestión correcta del acceso a la base de datos en entorno compilado.
- Sincronización con servicios externos garantizando consistencia de datos.
- Manejo de errores en generación automática de PDFs.

---

# Proyecto: Juego interactivo de ruleta (Spin & Guess)

## Tipo
Proyecto personal

## Stack
React (Vite), Node.js, Express, PostgreSQL, SCSS, JWT

## Descripción
Aplicación web interactiva basada en un juego de ruleta con arquitectura frontend avanzada.

Proyecto enfocado en la gestión de estado complejo, lógica de turnos y sincronización cliente-servidor.

---

## Funcionalidades clave

- Gestión de turnos jugador / sistema (IA básica)
- Control de estado complejo mediante hooks personalizados
- Lógica de puntuación y progreso de partida
- Comunicación backend vía API REST
- Autenticación JWT
- Persistencia de resultados en base de datos PostgreSQL

---

## Decisiones técnicas relevantes

- Uso de hooks personalizados para aislar lógica de estado.
- Separación clara entre capa de presentación y lógica de juego.
- Implementación de autenticación JWT con control de rutas protegidas.
- Diseño modular del frontend para facilitar escalabilidad.
- Comunicación backend optimizada mediante endpoints REST estructurados.

---

## Retos técnicos

- Gestión de estados complejos sin introducir inconsistencias.
- Sincronización cliente-servidor en tiempo real.
- Diseño de flujo de juego predecible y mantenible.
- Modelado adecuado de datos en PostgreSQL.

---

# Proyecto: Sistema de Registro y Gestión de Socios

## Tipo
Proyecto personal / freelance (en desarrollo)

## Stack
React (Vite), Node.js, NestJS, PostgreSQL, JWT

## Descripción
Sistema completo orientado a la gestión de socios, inventario, contratos digitales y control de caja para una asociación.

Proyecto diseñado como solución integral con panel administrativo y autenticación segura.

---

## Funcionalidades clave

- Panel administrativo interno
- Gestión de inventario con control de stock
- Control de caja y registro de transacciones
- Autenticación mediante JWT
- Firma digital de contratos
- Gestión diferenciada de socios y colaboradores

---

## Decisiones técnicas relevantes

- Uso de NestJS para estructuración robusta del backend.
- Separación clara entre entidades (socios, colaboradores, contratos).
- Modelado relacional en PostgreSQL priorizando consistencia de datos.
- Gestión de autenticación segura basada en tokens.
- Diseño preparado para ampliaciones futuras (roles, auditoría, etc.).

---

## Retos técnicos

- Definición de arquitectura clara desde el inicio del proyecto.
- Modelado de relaciones entre entidades complejas.
- Gestión de estados financieros sin inconsistencias.
- Implementación de firma digital integrada en flujo administrativo.

---

# Proyecto: Desarrollo y remodelación de webs corporativas (Wix Studio)

## Tipo
Proyectos freelance reales para clientes

## Stack
Wix Studio, HTML, CSS, SEO técnico, optimización de rendimiento, configuración de dominio y correo profesional

## Descripción
Diseño, desarrollo y reestructuración de webs corporativas para distintos clientes, combinando enfoque técnico, estrategia de contenido y coherencia de marca.

Trabajo orientado a traducir necesidades de clientes no técnicos en estructuras digitales claras, funcionales y optimizadas para posicionamiento orgánico.

---

## Caso 1: SAM Psicoterapia y Formación

- Diseño completo de web corporativa
- Blog autogestionable
- Implementación de SEO on-page y datos estructurados (JSON-LD)
- Configuración de dominio y correo empresarial
- Coordinación entre identidad digital y elementos físicos (vinilos y cartelería)
- Optimización de estructura de contenidos y jerarquía visual

---

## Caso 2: People Asociación

- Remodelación estructural de la web existente
- Reorganización de contenidos y arquitectura de información
- Mejora de experiencia de usuario y claridad en llamadas a la acción
- Optimización de rendimiento
- Ajuste visual para coherencia de identidad

---

## Caso 3: Desirée Porcel Psicóloga

- Rediseño visual y mejora de estructura de contenidos
- Optimización SEO básica
- Ajuste de textos y jerarquías para mejorar conversión
- Mejora de coherencia estética y profesionalización de imagen digital

---

## Enfoque profesional aplicado en proyectos web

- Análisis previo de arquitectura de información antes de rediseñar.
- Optimización de carga eliminando recursos innecesarios.
- Implementación de buenas prácticas SEO (metadatos, estructura semántica, enlazado interno).
- Adaptación del lenguaje técnico al nivel de comprensión del cliente.
- Gestión iterativa del proyecto según feedback continuo.