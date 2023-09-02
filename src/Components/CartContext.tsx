import React,{createContext, useContext, useState} from "react";

interface CartItem {
    productId: number;
    quantity: number;
  }
interface CartContextType{
    cartItems: CartItem[]
    addToCart: (item: CartItem)=>void;
}


const CartContext = createContext<CartContextType| undefined>(undefined);

export function useCart(){
    const context = useContext(CartContext)
    if(!context){
        throw new Error('Usecart must be used within cart provider')
    }
    return context
}

export function CartProvider({children}: {children: React.ReactNode}){
    const [cartItems , setCartItems] = useState<CartItem[]>([])

    const addToCart = (item: CartItem)=>{
        
        const existingItemIndex = cartItems.findIndex((cartItem)=> cartItem.productId === item.productId )
  

        if(existingItemIndex !== -1){
            const updatedCartItems = [...cartItems]
            updatedCartItems[existingItemIndex].quantity += item.quantity
            setCartItems(updatedCartItems)
        }else{
            setCartItems((prevItems)=>[...prevItems, item])
        }
  }
    return(
        <CartContext.Provider value={{cartItems, addToCart }}>
                {children}
        </CartContext.Provider>
    )

}