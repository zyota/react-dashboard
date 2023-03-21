import React, { useContext } from "react";
import EditIcon from "../component/icons/Edit";
import ImageIcon from "../component/icons/ImageIcon";
import "../style/home.css";
import Dropdown from "react-bootstrap/Dropdown";
import { paths } from "../utils/data";
import axios from "axios";
import { MainContext } from "../App";
import { ProductsContext } from "../context/ProductProvider";

export default function Home() {
  const { product } = useContext(ProductsContext);
  function deleteHandler(id) {
    axios.delete(`http://localhost:4000/products/${id}`);
    location.reload();
  }
  return (
    <div className="dashboard-content">
      <div className="dashboard">
        <div className="dashboard-bar">
          <img src={paths[0].image} alt="product-icon" />
          <p>Хянах самбар</p>
        </div>
        <div className="later-sold">
          <p>Сүүлд зарагдсан</p>
          <ImageIcon />
        </div>
        <div className="dash-info">
          <p>Зураг</p>
          <p>Барааны нэр</p>
          <p>Үнэ</p>
          <p>Үлдэгдэл </p>
          <p>Хямдрал %</p>
          <p>Категори</p>
          <button>
            <EditIcon />
          </button>
        </div>
        {product &&
          product.map((products, index) => (
            <div key={index} className="product-list">
              <img src={products.image} alt="" />
              <p className="list-name">{products.name}</p>
              <p>{products.price}</p>
              <p>{products.stock}</p>
              <p>{products.sale}</p>
              <div className="product-category">{products.category}</div>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <EditIcon />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Өөрчлөх</Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => deleteHandler(products.id)}
                  >
                    Устгах
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Вебсайтаас нуух
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
      </div>
    </div>
  );
}
