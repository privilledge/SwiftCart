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
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:9090/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imagePath = await response.text();
        return imagePath;
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const addToCart = async (product, imageFile) => {
    const imagePath = await uploadImage(imageFile);
    const productWithImage = { ...product, image: imagePath };
    try {
      const response = await fetch("http://localhost:9090/cart/add", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productWithImage),
      });
      if (response.ok) {
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
      } else {
        console.log("Failed to add item to cart");
      }
    } catch (error) {
      console.log("Failed to add item to cart", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`http://localhost:9090/cart/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== productId)
        );
      } else {
        console.log("Failed to delete item");
      }
    } catch (error) {
      console.log("Failed to delete item", error);
    }
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
