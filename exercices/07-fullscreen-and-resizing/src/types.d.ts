// TypeScript declarations for webkit fullscreen methods
declare global {
  interface HTMLCanvasElement {
    webkitRequestFullscreen?: () => Promise<void>;
  }

  interface Document {
    webkitExitFullscreen?: () => Promise<void>;
    webkitFullscreenElement?: Element | null;
  }
}

export {};
