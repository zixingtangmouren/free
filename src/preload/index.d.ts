import { ElectronAPI } from '@electron-toolkit/preload';
import { Theme } from './index';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    theme: Theme;
  }
}
