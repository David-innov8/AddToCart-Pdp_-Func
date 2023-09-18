import React from "react";
import { useCart } from "./CartContext";
import { useApi } from "./ApiContext";
import { useContext } from "react";

interface CartOverlayProps {
  onCloseOverlay: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ onCloseOverlay }) => {
  const { cartItems, removeFromCart } = useCart();
  const { apiData } = useApi();

  const totalPrice = cartItems.reduce((total, item) => {
    const product = apiData.find((product) => product.id === item.productId);

    if (product) {
      const subtotal = product.price * item.quantity;
      return total + subtotal;
    }
    return total;
  }, 0);

  return (
    <div className="fixed right-0 pr-5 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Your Cart <span className="text-xl text-black"> X</span>
        </h2>
        <ul>
          {cartItems.map((item, index) => {
            const product = apiData.find(
              (product) => product.id === item.productId
            );
            return (
              <li key={index} className="mb-2">
                {product && (
                  <div className=" flex  items-center h-[110px] w-[400px] ">
                    <img
                      src={product.images}
                      className="h-full p-4 rounded-[40px]"
                    />
                    <div>
                      <h1>{product.title}</h1>
                      <p>
                        {" "}
                        {item.quantity} x <span>${product.price}</span>{" "}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        removeFromCart({
                          productId: item.productId,
                          quantity: item.quantity,
                        })
                      }
                    >
                      X
                    </button>
                  </div>
                )}
              </li>
            );
          })}
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
          <div className="flex mb-4 px-20 justify-between">
            <h1>Subtotal: </h1>
            <p className="text-[#b97239]">{totalPrice}$</p>
          </div>

          <div className="px-16 flex justify-between">
            <button className="px-4 py-1 border border-black rounded-full ">
              View Cart{" "}
            </button>
            <button className="px-4 py-1 border border-black rounded-full ">
              Checkout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartOverlay;
