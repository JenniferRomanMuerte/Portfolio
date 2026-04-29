# Proyecto: Aplicación de Facturación y Gestión de Clientes (Desktop App)

## Tipo
Proyecto personal / freelance

## Stack
Electron, React (Vite), Node.js, SQLite

## Descripción
Aplicación multiplataforma orientada a la gestión integral de clientes, sesiones, pagos y facturación automática.

Diseñada como herramienta real de trabajo para profesionales, priorizando estabilidad, claridad de flujo y automatización de tareas repetitivas.

## Funcionalidades clave
- Gestión de clientes y servicios
- Sincronización con Google Calendar
- Control de pagos en efectivo y banco
- Generación automática de facturas en PDF
- Control de estado de facturas para evitar duplicados
- Persistencia de datos en base de datos local

## Decisiones técnicas relevantes
- Separación clara entre proceso principal y renderer en Electron
- Gestión de base de datos SQLite adaptada a entorno empaquetado en producción
- Diseño de sistema de facturación con control de estado para evitar generación duplicada
- Manejo de sincronización con Google Calendar gestionando sesiones expiradas y errores externos
- Modularización del frontend en React para mantener escalabilidad

## Retos técnicos
- Integración estable entre Electron y React
- Gestión correcta del acceso a la base de datos en entorno compilado
- Sincronización con servicios externos garantizando consistencia de datos
- Manejo de errores en generación automática de PDFs

---

# Proyecto: Juego interactivo de ruleta (Spin & Guess / Gira y Adivina)

## Tipo
Proyecto personal

## Stack
React (Vite), Node.js, Express, PostgreSQL, SCSS, JWT

## Descripción
Aplicación web interactiva basada en un juego de ruleta con arquitectura frontend avanzada.

Proyecto enfocado en la gestión de estado complejo, lógica de turnos y sincronización cliente-servidor.

## Funcionalidades clave
- Gestión de turnos jugador / sistema (IA básica)
- Control de estado complejo mediante hooks personalizados
- Lógica de puntuación y progreso de partida
- Comunicación backend vía API REST
- Autenticación JWT
- Persistencia de resultados en base de datos PostgreSQL

## Decisiones técnicas relevantes
- Uso de hooks personalizados para aislar lógica de estado
- Separación clara entre capa de presentación y lógica de juego
- Implementación de autenticación JWT con control de rutas protegidas
- Diseño modular del frontend para facilitar escalabilidad
- Comunicación backend optimizada mediante endpoints REST estructurados

## Retos técnicos
- Gestión de estados complejos sin introducir inconsistencias
- Sincronización cliente-servidor en tiempo real
- Diseño de flujo de juego predecible y mantenible
- Modelado adecuado de datos en PostgreSQL

---

# Proyecto: Sistema de Registro y Gestión de Socios

## Tipo
Proyecto personal / freelance (en pruebas)

## Stack
React (Vite), Node.js, NestJS, PostgreSQL, JWT

## Descripción
Sistema completo orientado a la gestión de socios, inventario, contratos digitales y control de caja para una asociación, con panel administrativo y autenticación segura.

## Funcionalidades clave
- Panel administrativo interno
- Gestión de inventario con control de stock
- Control de caja y registro de transacciones
- Autenticación mediante JWT
- Firma digital de contratos
- Gestión diferenciada de socios y colaboradores

## Decisiones técnicas relevantes
- Uso de NestJS para estructuración robusta del backend
- Separación clara entre entidades (socios, colaboradores, contratos)
- Modelado relacional en PostgreSQL priorizando consistencia de datos
- Gestión de autenticación segura basada en tokens
- Diseño preparado para ampliaciones futuras (roles, auditoría, etc.)

---

# Proyecto: Travel Map

## Tipo
Proyecto personal

## Stack
React, Vite, Mapbox GL, Supabase, Cloudflare R2, SCSS

## Descripción
Aplicación web para guardar y visualizar viajes sobre un globo 3D interactivo. Permite registrar destinos y subir fotos y vídeos de cada lugar visitado.

## Funcionalidades clave
- Visualización de viajes sobre globo 3D con Mapbox GL
- Registro de destinos con multimedia asociada
- Subida de fotos y vídeos por destino
- Gestión multimedia con compresión de archivos
- Almacenamiento en la nube con Cloudflare R2
- Base de datos y autenticación con Supabase

---

# Proyecto: HelpCook (Proyecto Final de FP)

## Tipo
Proyecto académico (Proyecto final FP Superior DAM)

## Stack
Java, Spring Boot, SQL, Angular

## Descripción
Aplicación web completa de comunidad de recetas. Permite visualizar recetas mediante filtros de ingredientes o categorías, con registro de usuarios para subir y valorar recetas.

## Funcionalidades clave
- Catálogo de recetas con filtros por ingrediente y categoría
- Sistema de registro y autenticación de usuarios
- Subida y gestión de recetas propias
- Valoración de recetas por la comunidad
- Backend con Java y Spring Boot
- Frontend con Angular

---

# Proyecto: Desarrollo y remodelación de webs corporativas (Wix Studio)

## Tipo
Proyectos freelance reales para clientes

## Stack
Wix Studio, HTML, CSS, SEO técnico, optimización de rendimiento, configuración de dominio y correo profesional

## Descripción
Diseño, desarrollo y reestructuración de webs corporativas para distintos clientes, combinando enfoque técnico, estrategia de contenido y coherencia de marca.

## Caso 1: SAM Psicoterapia y Formación
- Diseño completo de web corporativa
- Blog autogestionable
- Implementación de SEO on-page y datos estructurados (JSON-LD)
- Configuración de dominio y correo empresarial
- Optimización de estructura de contenidos y jerarquía visual

## Caso 2: Desirée Porcel Psicóloga
- Rediseño visual y mejora de estructura de contenidos
- Optimización SEO básica
- Mejora de coherencia estética y profesionalización de imagen digital

## Enfoque profesional aplicado
- Análisis previo de arquitectura de información antes de rediseñar
- Optimización de carga eliminando recursos innecesarios
- Implementación de buenas prácticas SEO (metadatos, estructura semántica, enlazado interno)
- Adaptación del lenguaje técnico al nivel de comprensión del cliente
- Gestión iterativa del proyecto según feedback continuo
