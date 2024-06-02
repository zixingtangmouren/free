import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

// const store = new Store();

// Custom APIs for renderer
export interface Api {
  noop: () => void;
}
const api: Api = {
  noop: () => {}
};

export interface Theme {
  shouldUseDarkColors: () => boolean;
}
const theme: Theme = {
  shouldUseDarkColors: () => true
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
    contextBridge.exposeInMainWorld('theme', theme);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
