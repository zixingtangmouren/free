/// <reference types="vite/client" />

declare module '*.svg?react' {
  const icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default icon;
}
