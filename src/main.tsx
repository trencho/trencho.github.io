import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import './styles/global.scss';

const root = document.getElementById('root');
if (!root) throw new Error('index.html is missing the #root element');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
