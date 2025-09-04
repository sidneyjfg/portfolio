import React from 'react';
import ReactDOM from 'react-dom/client';
import PortfolioModern from './App'; // pode omitir .tsx
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error("Elemento #root não encontrado no index.html");
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <PortfolioModern />
  </React.StrictMode>
);
