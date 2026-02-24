# 🚀 Portfolio --- Jennifer Román

Portfolio profesional desarrollado con **React + TypeScript + Vite**,
que integra un sistema **RAG (Retrieval-Augmented Generation)** propio
para responder preguntas sobre mi experiencia basándose exclusivamente
en mis documentos.

No es un chatbot genérico: el asistente solo responde con información
contenida en mis propios archivos estructurados.

------------------------------------------------------------------------

# 🧠 Arquitectura General

El proyecto combina:

-   SPA en React
-   Netlify Functions como backend serverless
-   Índice vectorial generado a partir de Markdown
-   Búsqueda semántica con similitud coseno
-   Llamada condicional al modelo (optimización de coste)

### Flujo del sistema RAG

1.  El usuario formula una pregunta desde el modal AI.
2.  Se envía un `POST` a `/.netlify/functions/chat`.
3.  La function:
    -   Genera embedding de la pregunta.
    -   Calcula similitud coseno contra los chunks del índice.
    -   Selecciona los más relevantes.
4.  Si la similitud máxima supera el umbral (0.55):
    -   Se envía el contexto al modelo.
5.  Si no:
    -   Se devuelve una respuesta directa sin invocar el modelo.

Esto evita consumo innecesario de tokens y respuestas fuera de contexto.

------------------------------------------------------------------------

# 🛠 Stack Tecnológico

## Frontend

-   React
-   TypeScript
-   Vite
-   React Router
-   React Icons
-   CSS modular y animaciones personalizadas
-   Three.js (`three`, `@react-three/fiber`, `@react-three/drei`)

## Backend (Serverless)

-   Netlify Functions
-   Node.js

## AI

-   OpenAI API
-   Embeddings
-   Similitud coseno personalizada
-   Threshold semántico para control de coste

------------------------------------------------------------------------

# 📂 Estructura del Proyecto

    /src
      /components
      /pages

    /public
      /rag
        index.json

    /rag
      CV.md
      EXPERIENCIA.md
      FAQ.md
      PROYECTOS.md

    /netlify/functions
      chat.js

    /scripts
      build-rag-index.js

------------------------------------------------------------------------

# 📄 Secciones del Portfolio

-   **Home** --- Portada con vídeo y slider visual.
-   **About** --- Presentación con animaciones y enfoque personal.
-   **Projects** --- Proyectos técnicos destacados.
-   **Experience** --- Timeline con experiencia profesional y formación.
-   **AI Modal** --- Sistema RAG interactivo.

------------------------------------------------------------------------

# ⚙ Instalación Local

``` bash
npm install
npm run dev
```

Scripts disponibles:

``` bash
npm run dev
npm run build
npm run preview
npm run lint
```

------------------------------------------------------------------------

# 🔐 Variables de Entorno

Crear archivo `.env` en la raíz:

    OPENAI_API_KEY=tu_clave

⚠ Nunca subir este archivo al repositorio.

En producción (Netlify) la variable debe configurarse en:

Site Settings → Environment Variables.

------------------------------------------------------------------------

# 🧠 Generar o Actualizar el Índice RAG

Cuando se modifiquen los archivos dentro de `/rag`:

``` bash
node scripts/build-rag-index.js
```

Esto regenerará:

    public/rag/index.json

El archivo es sobrescrito completamente en cada ejecución.

------------------------------------------------------------------------

# 🧪 Probar Netlify Functions en Local

Para que funcione la ruta:

    /.netlify/functions/chat

Usar:

``` bash
npx netlify dev
```

------------------------------------------------------------------------

# 🚀 Despliegue

-   Build: `npm run build`
-   Output: `dist/`
-   Netlify Functions: `netlify/functions/chat.js`
-   Variable `OPENAI_API_KEY` configurada en entorno de producción

------------------------------------------------------------------------

# 💰 Optimización de Coste

El sistema implementa un **umbral de similitud semántica**.

Si la pregunta no tiene suficiente relación con los documentos:

-   No se invoca el modelo.
-   Se devuelve respuesta directa.
-   Se minimiza el consumo de tokens.

Esto evita llamadas innecesarias y mejora robustez.

------------------------------------------------------------------------

# 🎯 Objetivo del Proyecto

Demostrar:

-   Capacidad de estructurar proyectos desde cero.
-   Implementación real de RAG en producción.
-   Integración frontend + serverless + embeddings.
-   Control consciente de arquitectura y coste.
-   Documentación técnica clara.

------------------------------------------------------------------------

# 📬 Contacto

-   GitHub: JenniferRomanMuerte
-   LinkedIn: jenniferromanmuerte
-   Email: jenniferromanmuerte@gmail.com
