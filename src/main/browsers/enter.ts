import { BrowserWindow } from 'electron';
import { is } from '@electron-toolkit/utils';
import { join } from 'path';

export function createEnterWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    show: false,
    webPreferences: {}
  });

  win.on('ready-to-show', () => {
    win.show();
  });

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/enter');
  } else {
    win.loadFile(join(__dirname, '../renderer/pages/Enter/index.html'));
  }

  return win;
}
