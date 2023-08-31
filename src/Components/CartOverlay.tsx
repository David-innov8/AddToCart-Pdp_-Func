import React from "react";
import { useCart } from "./CartContext";

interface CartOverlayProps{
  onCloseOverlay:()=> void
}

const CartOverlay: React.FC<CartOverlayProps> =({onCloseOverlay})=>{
    const {cartItems} = useCart();
 
    return(
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Your Cart <span className="text-xl text-black" > X</span></h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className='mb-2'>
                {item}
              </li>
            ))}
          </ul>
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
        </div>
      </div>
    )
}


export default CartOverlay