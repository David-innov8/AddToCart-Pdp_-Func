import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './Components/CartContext';
import { ApiProvider } from './Components/ApiContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

      <CartProvider>
        <ApiProvider>
          <App />

        </ApiProvider>
                

      </CartProvider>

  
);

