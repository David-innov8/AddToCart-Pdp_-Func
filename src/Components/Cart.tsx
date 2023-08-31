
import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: string[];
  addTocart:(item: CartItem)=>void;
}

const CartContext = createContext<CartContextType | undefined>

const Cart: React.FC = () => {
  

  return (
    <div>
        
    </div>
  )
};

export default Cart;
