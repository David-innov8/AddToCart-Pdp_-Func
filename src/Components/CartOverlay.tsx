import React from  "react";
import { useCart } from "./CartContext";
import { useApi } from "./ApiContext";
import { useContext } from "react";

interface CartOverlayProps{
  onCloseOverlay:()=> void
}

const CartOverlay: React.FC<CartOverlayProps> =({onCloseOverlay})=>{
    const {cartItems} = useCart();
    const {apiData} = useApi()


    const totalPrice = cartItems.reduce((total,item)=>{
      const product = apiData.find((product)=> product.id === item.productId)

      if (product) {
        const subtotal = product.price * item.quantity;
        return total + subtotal;
      }
      return total
    },0)
 
    return(
        <div className='fixed right-0 pr-5 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Your Cart <span className="text-xl text-black" > X</span></h2>
          <ul>
            {cartItems.map((item, index) => {
              const product = apiData.find(
                (product)=> product.id === item.productId
               );
               return(
                <li key={index} className='mb-2'>
                {product && (
                  <div>
                    <span>{product.title}</span> - <span>${product.price}</span>{" "}
                    - <span>Quantity: {item.quantity}</span>
                  </div>
                )}
              </li>
               )
            })}
          </ul>
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
        </div>
      </div>
    )
}


export default CartOverlay