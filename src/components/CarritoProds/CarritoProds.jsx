import React from "react";

const CarritoProds = ({ cart }) => {
  console.log(cart);
  return (
    <div style={{ display: "flex" }}>
      {cart.map((item, key) => (
        <div key={key}>
          <p>{item.name}</p>
          <p>{item.id}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <img style={{ maxWidth: "250px" }} src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default CarritoProds;
