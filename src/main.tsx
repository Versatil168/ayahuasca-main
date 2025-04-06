import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext'; // Asegúrate de importar el provider
import './index.css'; // O el nombre correcto de tu archivo de estilos


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider> {/* Envuelve App con el proveedor */}
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
