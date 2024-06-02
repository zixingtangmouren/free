import { BrowserWindow } from 'electron';
import { is } from '@electron-toolkit/utils';
import { join } from 'path';

export function createMainWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 728,
    show: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  });

  win.on('ready-to-show', () => {
    win.show();
  });

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/main');
  } else {
    win.loadFile(join(__dirname, '../renderer/pages/Main/index.html'));
  }

  return win;
}
