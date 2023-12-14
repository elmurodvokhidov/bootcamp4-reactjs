import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './redux/slice/UserSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    user: UserSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);