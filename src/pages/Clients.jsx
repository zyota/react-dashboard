import React from "react";
import { useState } from "react";
import axios from "axios";

const newProduct = { name: "Iphone 17", price: 210000 };
export default function Clients(prop) {
  const { user } = prop;
  const [singleProd, setSingleProd] = useState(undefined);

  function getSingleProdHandler() {
    fetch("http://localhost:4000/users/1")
      .then((res) => res.json())
      .then((res) => setSingleProd(res))
      .catch((err) => {
        console.log("Error:", err.message);
      });
  }
  function addProductHandler(product) {
    axios.post("http://localhost:4000/add", product);
    // fetch("http://localhost:2021/add", {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(product)
    // })
  }
  function deleteProductHandler(id) {
    axios.delete(`http://localhost:4000/product/${id}`);
  }
  return (
    <div style={{ fontSize: "30px" }}>
      <button onClick={getSingleProdHandler}>Get single prod</button>
      {singleProd && <p>{singleProd.name}</p>}
      {/* cannot read "name" property of undefined */}
      <button onClick={() => addProductHandler(newProduct)}>
        Add new Product
      </button>
      <button onClick={() => deleteProductHandler("2")}>delete product</button>
    </div>
  );
}
{
  /* <div>
    {user && user.map((users, index) => (
          <div key={index}>
            <h2>{users.surname}</h2>
          </div>
        ))}
  </div>; */
}
