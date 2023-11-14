import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextFunction from './context/ContextData';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextFunction>
        <App />
      </ContextFunction>
    </BrowserRouter>
  </React.StrictMode>
);