/// <reference types="react-scripts" />

declare module '*.pdf';
declare module '*.png';
declare module 'react-in-viewport' {
  function handleViewport(block: ReactNode, options?: any, config?: any): any
  export = handleViewport
}
declare module 'animejs/lib/anime.es.js';
declare module 'react-scroll';