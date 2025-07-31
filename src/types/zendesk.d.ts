declare global {
    interface Window {
      zE?: {
        (command: string, ...args: any[]): void;
        (command: 'messenger:on', event: 'open' | 'close', callback: () => void): void;
        (command: 'messenger', action: 'loginUser', callback: (cb: (token: string) => void) => void): void;
      };
    }
  }
  
  export {};