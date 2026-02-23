import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item, index) => index !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);