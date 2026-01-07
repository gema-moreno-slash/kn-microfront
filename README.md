# KN Microfront

Este proyecto es un monorepo que implementa una arquitectura de microfrontends utilizando diversas tecnologías modernas de desarrollo frontend. A continuación se describen las tecnologías principales utilizadas y los workspaces incluidos en el repositorio.

## Tecnologías utilizadas

- **JavaScript / TypeScript**: Lenguajes principales para el desarrollo de los microfrontends.
- **React**: Utilizado en el microfrontend `micro-cat` para construir interfaces de usuario.
- **Vue.js**: Utilizado en el microfrontend `micro-dog` para construir interfaces de usuario.
- **Webpack**: Herramienta de empaquetado utilizada en todos los microfrontends para el bundle de los recursos.
- **Babel**: Utilizado para la transpilación de código moderno de JavaScript en `micro-cat`.
- **CSS**: Estilos globales y específicos de cada microfrontend.
- **HTML**: Archivos de entrada para cada microfrontend.

## Estructura de Workspaces

El proyecto está organizado en los siguientes workspaces dentro de la carpeta `packages/`:

- **micro-cat**: Microfrontend basado en React. Incluye configuración de Babel y Webpack, así como archivos fuente en JSX.
- **micro-dog**: Microfrontend basado en Vue.js. Incluye configuración de Webpack y archivos fuente en Vue y JS.
- **orq-iframe**: Microfrontend que expone funcionalidades a través de un iframe. Incluye configuración de Webpack y archivos fuente en JS.
- **orq-webpack**: Orquestador de microfrontends, encargado de integrar y mostrar los distintos microfrontends. Incluye configuración de Webpack, archivos fuente en JS y estilos globales.

## Instalación y uso

1. Instala las dependencias en la raíz del proyecto:
   ```bash
   npm install
   ```
2. Para trabajar con un microfrontend específico, navega a su carpeta y sigue las instrucciones de su README (si aplica) o ejecuta los scripts definidos en su `package.json`.

## Estructura de carpetas

```
packages/
  micro-cat/
  micro-dog/
  orq-iframe/
  orq-webpack/
```

Cada microfrontend es independiente y puede ser desarrollado y desplegado de forma aislada o integrada mediante el orquestador.

---

Para más detalles sobre la configuración y scripts disponibles, revisa los archivos `package.json` y la documentación interna de cada workspace.