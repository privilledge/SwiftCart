// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    async function fetchCartItem() {
      try {
        const response = await fetch("http://localhost:9090/cart");
        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          console.log("Failed to fetch cart items");
        }
      } catch {
        console.log("failed to fetch cart items");
      }
    }
    fetchCartItem();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateItemQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
