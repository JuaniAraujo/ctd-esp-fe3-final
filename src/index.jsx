import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { AppProvider } from './Context/AppContext';

import { BrowserRouter as Router } from 'react-router-dom'; 
//Está aquí para asegurarme de que envuelve toda la aplicación



// a + shit + alt para comentar muchas lineas


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);


