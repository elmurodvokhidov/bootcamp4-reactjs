import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextFunc from './context/ContextData';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextFunc>
        <App />
      </ContextFunc>
    </BrowserRouter>
  </React.StrictMode>
);