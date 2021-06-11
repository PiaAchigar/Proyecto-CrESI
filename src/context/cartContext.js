import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
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
    //Busco producto con el mismo nombre
    const duplicate = cart.find((product) => product.id === obj.id);

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

  //Quitar o Agregar cantidad de un producto ya en carrito
  const changeQty = (operator, id) => {
    //Index de elemento a agregar o restar cantidad
    const indexOfProduct = cart.findIndex((product) => product.id === id);
    //Creo una copia del array de cart
    let newArray = [...cart];
    //Le agrego uno a la cantidad
    if (operator === "+") {
      newArray[indexOfProduct] = {
        ...newArray[indexOfProduct],
        quantity: newArray[indexOfProduct].quantity + 1,
      };
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    //Le resto uno a la cantidad
    if (operator === "-") {
      newArray[indexOfProduct] = {
        ...newArray[indexOfProduct],
        quantity: newArray[indexOfProduct].quantity - 1,
      };
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  // Devuelve True o False si el producto esta o no en el carrito
  const isInCart = (productID) => {
    return cart.some((product) => product.id === productID);
  };

  // Cantidad de items en el carrito
  const cartTotalItems = cart
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  //Borrar item segund id
  const deleteItemById = (id) => {
    const editedItems = cart.filter((product) => product.id !== id);
    setCart(editedItems);
    localStorage.setItem("cart", JSON.stringify(editedItems));
  };

  //Total $$ de carrito, suma total de todos los productos.
  const cartTotal = cart
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        cartTotal,
        totalItems,
        setTotalItems,
        itemsInLocal,
        isInCart,
        cartTotalItems,
        deleteItemById,
        changeQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
