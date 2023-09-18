import React, { createContext, useContext, useState } from "react";

//i had to creat a cart type because i needed the the product and Quantity typed. they determine what a product in the cart should look like
interface CartItem {
  productId: number;
  quantity: number;
}

// defines the shape of the context that can be used to manage the state of the shopping cart
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
}

// create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Usecart must be used within cart provider");
  }
  return context;
}

//

export function CartProvider({ children }: { children: React.ReactNode }) {
  // state that holds the carts
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // this is the onclick function that adds the items to cart
  const addToCart = (item: CartItem) => {
    // findindex method Returns the index of the first element in the array where predicate is true, and -1 otherwise. this is basically so if you add a product that is already in your cart, it just updates the quantity and not add duplicate.
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.productId === item.productId
    );

    // If the item is already in the cart, update its quantity
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    }
    // If the item is not in the cart, add it
    else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (item: CartItem) => {
    // Use the filter method to create a new array without the item to be removed.
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.productId !== item.productId
    );

    // Set the cartItems state to the updated array without the removed item.
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
