import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextFunc } from './context/Context';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

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