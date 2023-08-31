import React,{createContext, useContext, useState} from "react";

interface CartContextType{
    cartItems: string[];
    addToCart: (item: string)=>void;
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
    const [cartItems , setCartItems] = useState<string[]>([])

    const addToCart = (item: string)=>{
        setCartItems(prevItems =>[...prevItems, item])
    }


    return(
        <CartContext.Provider value={{cartItems, addToCart }}>
                {children}
        </CartContext.Provider>
    )

}