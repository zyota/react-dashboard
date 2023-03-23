import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProduct from "../icons/AddProduct";
import "../../style/substyle/addbutton.css";
import axios from "axios";

export default function Example(prop) {
  const { show, setShow, data, setProduct } = prop;

  const handleClose = () => {
    setShow(false);
    setProduct(undefined);
  };
  const handleShow = () => setShow(true);

  function submitHandler(e) {
    e.preventDefault();
    let name = e.target.productName.value;
    let price = e.target.productPrice.value;
    let stock = e.target.productStock.value;
    let sale = e.target.productSale.value;
    let cap = e.target.productCap.value;
    let elect = e.target.productElect.value;
    let voltage = e.target.productVol.value;
    let size = e.target.productSize.value;
    let expDate = e.target.productExp.value;
    let descrip = e.target.productDescrip.value;
    let category = e.target.productCategory.value;
    let brand = e.target.productBrand.value;
    let id = data && data.id;
    let proObject = {
      id,
      name,
      price,
      stock,
      sale,
      cap,
      elect,
      voltage,
      size,
      expDate,
      descrip,
      category,
      brand,
    };

    // console.log(data.id);
    if (data) {
      axios.put(`http://localhost:4000/addproduct/${data.id}`, proObject);
      console.log(proObject);
    } else {
      axios.post("http://localhost:4000/addproduct", proObject);

      console.log(proObject);
    }
    location.reload();
    // handleClose;
  }
  function uploadHandler() {
    console.log("Uploading");
    fetch("http://localhost:4000/file").then((res) => console.log(res));
  }

  return (
    <div className="main-button">
      <Button variant="primary" className="add-button" onClick={handleShow}>
        <AddProduct />
        Бараа нэмэх
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Бараа нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler}>
            <div className="add-detail">
              <div className="right-detail">
                <div className="product-info">
                  <input type="file" />

                  <input
                    type="button"
                    value={"Upload"}
                    onClick={uploadHandler}
                  />
                  <p>Барааны нэр</p>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="productName"
                    defaultValue={data ? data.name : ""}
                  />
                </div>
                <div>
                  <p>Үлдэгдэл</p>
                  <input
                    type="text"
                    placeholder="Stock"
                    name="productStock"
                    defaultValue={data ? data.stock : ""}
                  />
                </div>
              </div>
              <div className="left-detail">
                <div className="product-info">
                  <p>Барааны үнэ (₮)</p>
                  <input
                    type="text"
                    placeholder="Price"
                    name="productPrice"
                    defaultValue={data ? data.price : ""}
                  />
                </div>
                <div className="product-info">
                  <p>Хямдрал (%-иар)</p>
                  <input
                    type="text"
                    placeholder="Sale"
                    name="productSale"
                    defaultValue={data ? data.sale : ""}
                  />
                </div>
              </div>
            </div>
            <h5>Үзүүлэлтүүд</h5>
            <div className="add-detail">
              <div className="right-detail">
                <div className="product-info">
                  <p>Багтаамж</p>
                  <input
                    type="text"
                    placeholder="Capacity"
                    name="productCap"
                    defaultValue={data ? data.cap : ""}
                  />
                </div>
                <div className="product-info">
                  <p>Хүчдэл</p>
                  <input
                    type="text"
                    placeholder="voltage"
                    name="productVol"
                    defaultValue={data ? data.voltage : ""}
                  />
                </div>
                <div className="product-info">
                  <p>Баталгаат хугацаа</p>
                  <input
                    type="text"
                    placeholder="Expire Date"
                    name="productExp"
                    defaultValue={data ? data.expDate : ""}
                  />
                </div>
                <div className="product-info">
                  <h6>Категори сонгох</h6>
                  <select
                    name="productCategory"
                    defaultValue={data ? data.category : ""}
                  >
                    <option>ЗУРАГТ, ТВ, ДЭЛГЭЦ</option>
                    <option>ГАР УТАС, ЦАГ</option>
                    <option>ГАЛ ТОГОО</option>
                    <option>КОМПЬЮТЕР, ПРИНТЕР</option>
                    <option>БУСАД</option>
                  </select>
                </div>
              </div>
              <div className="left-detail">
                <div className="product-info">
                  <p>Цахилгаан зарцуулалт</p>
                  <input
                    type="text"
                    placeholder="Elect"
                    name="productElect"
                    defaultValue={data ? data.elect : ""}
                  />
                </div>
                <div className="product-info">
                  <p>Хэмжээ</p>
                  <input
                    type="text"
                    placeholder="Size"
                    name="productSize"
                    defaultValue={data ? data.size : ""}
                  />
                </div>
                <div className="product-info">
                  <p>Тайлбар</p>
                  <input
                    type="text"
                    placeholder="Descripsion"
                    name="productDescrip"
                    defaultValue={data ? data.descrip : ""}
                  />
                </div>
                <div className="product-info">
                  <h6>Брэнд сонгох</h6>
                  <select
                    name="productBrand"
                    defaultValue={data ? data.brand : ""}
                  >
                    <option>SAMSUNG</option>
                    <option>LG</option>
                    <option>IPHONE</option>
                  </select>
                </div>
              </div>
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Хаах
              </Button>
              <button type="submit">save</button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
