import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  //
  //
  //Busca la key cart en el LOCAL STORAGE, sino la encuentra inicializa un array vacio
  const itemsInLocal = () => {
    if (localStorage.getItem("cart") !== null) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  };
  //ARRAY DE INFO DE PRODUCTOS EN  CARRITO
  const [cart, setCart] = useState(itemsInLocal);
  //CONTEO TOTAL DE PRODUCTOS EN CARRITO
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  //   Agrega producto al carrito pasandole el obj con la info
  const addToCart = (obj) => {
    // Primero busco si ya existe dentro del array del state Cart un objeto que tenga
    // el mismo nombre que el que quiero agregar al carrito, si no existe ahi si lo agrego.
    const duplicate = cart.find((product) => product.name === obj.name);

    if (duplicate !== undefined) {
      const indexOfDuplicate = cart.findIndex(
        (product) => product.name === obj.name
      );

      cart.splice(indexOfDuplicate, 1, {
        name: obj.name,
        quantity: obj.quantity + duplicate.quantity,
        price: obj.price,
        img: obj.img,
        id: obj.id,
      });
    } else {
      setCart([
        ...cart,
        {
          name: obj.name,
          quantity: obj.quantity,
          price: obj.price,
          img: obj.img,
          id: obj.id,
        },
      ]);
    }
  };
  // Devuelve True o False si el producto esta o no en el carrito
  const isInCart = (productID) => {
    return cart.some((product) => product.id === productID);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        totalItems,
        setTotalItems,
        itemsInLocal,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
