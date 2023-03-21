import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function MainHandlers({ children }) {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  function deleteHandler(name) {
    axios
      .delete(`http://localhost:4000/DeleteProduct?name=${name}`)
      .then((res) => res.statusText === "OK" && alert("Delete"));
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/getProduct")
      .then((response) => setProduct(response.data));
  }, []);
  return (
    <ProductsContext.Provider value={{ product, count, setCount, setProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}
