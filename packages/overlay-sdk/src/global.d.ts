// global.d.ts
interface Window {
  ethereum: any;
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const value: string;
  export default value;
}
