import React from "react";
import { paths } from "../utils/data";

export default function Orders(prop) {
  const { order } = prop;
  return (
    <div>
      <div className="product-bar">
        <img src={paths[2].image} alt="product-icon" />
        <p>Захиалгууд</p>
      </div>
      {order &&
        order.map((orders, index) => (
          <div key={index}>
            <h2>{orders.orderNo}</h2>
          </div>
        ))}
    </div>
  );
}
