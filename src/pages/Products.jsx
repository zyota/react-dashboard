import React, { useContext, useState } from "react";
// import AddProduct from "../component/icons/AddProduct";
import EditIcon from "../component/icons/Edit";
import "../style/products.css";
import { paths } from "../utils/data";
import AddButton from "../component/subcomp/AddButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { ProductsContext } from "../context/ProductProvider";

export default function Products(prop) {
  const { product } = useContext(ProductsContext);
  // console.log(product && product);
  const { test } = prop;
  const [show, setShow] = useState(false);
  function deleteHandler(id) {
    axios.delete(`http://localhost:4000/products/${id}`);
    location.reload();
  }

  // const [product, setProduct]= useContext(MainContext);
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-bar">
          <img src={paths[1].image} alt="product-icon" />
          <p>Бүтээгдэхүүнүүд</p>
        </div>
        <AddButton show={show} setShow={setShow} data={product} />
        {/* <button className="add-product"> */}
        {/* <AddButton /> */}
        {/* <AddProduct />
          Бараа нэмэх
        </button> */}

        <div className="filter">
          <button>All</button>
          <input type="search" placeholder="Хайх" />
        </div>
        <div className="product-main"></div>
        <div className="prod-info">
          <p className="prod-detail">Зураг</p>
          <p className="prod-detail">Барааны нэр</p>
          <p className="prod-detail">Үнэ</p>
          <p className="prod-detail">Үлдэгдэл</p>
          <p className="prod-detail">Хямдрал %</p>
          <p className="prod-detail">Категори</p>
          <button>
            <EditIcon />
          </button>
        </div>
        <div className="products">
          {product &&
            product.map((product, index) => (
              <div key={index} className="product-list">
                <img
                  src={product.image}
                  alt="product-picture"
                  className="prod-image"
                />
                <p className="prod-detail">{product && product.name}</p>
                <p className="prod-detail">{product.price}</p>
                <p className="prod-detail">{product.stock}</p>
                <p className="prod-detail">{product.sale}</p>
                <div className="prod-category">{product.category}</div>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-btn">
                    <EditIcon />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => {
                        setProduct(product);
                        setShow(true);
                      }}
                    >
                      Өөрчлөх
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => deleteHandler(product.id)}
                    >
                      Устгах
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Вебсайтаас нуух
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <button>

                  <EditIcon />
                </button> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
