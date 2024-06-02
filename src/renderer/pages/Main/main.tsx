import '../../assets/main.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { themeInit } from '@renderer/common/theme';

themeInit();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
