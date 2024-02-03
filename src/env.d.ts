/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly STRAPI_URL: string;
}
  
// colorthief.d.ts
declare module 'colorthief' {
  type Color = [number, number, number];
  export default class ColorThief {
     getColor: (img: HTMLImageElement | null) => Color;
     getPalette: (img: HTMLImageElement | null) => Color[];
  }
 }
 