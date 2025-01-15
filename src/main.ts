import { createElement } from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';
// import 'reset-css';
const app = document.getElementById('app')
if (app == null) throw new Error('app element not found');
createRoot(app).render(createElement(App));
