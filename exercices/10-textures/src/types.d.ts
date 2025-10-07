// TypeScript declarations for webkit fullscreen methods and image imports
declare global {
  interface HTMLCanvasElement {
    webkitRequestFullscreen?: () => Promise<void>;
  }

  interface Document {
    webkitExitFullscreen?: () => Promise<void>;
    webkitFullscreenElement?: Element | null;
  }
}

// Image file declarations for imports
declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

export {};
