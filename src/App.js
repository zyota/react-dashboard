import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import "./style/App.css";
import Clients from "./pages/Clients";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Moderator from "./pages/Moderator";
import Settings from "./pages/Settings";

export const MainContext = createContext();

function App() {
  // const [users, setUsers] = useState("");
  // const [orders, setOrders] = useState("");
  // const [moderators, setModerators] = useState("");
  //Products data
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/products")
  //     .then((products) => setProduct(products.data));
  // }, []);
  // console.log(product);
  //Users Data
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/users")
  //     .then((user) => setUsers(user.data));
  // }, []);
  // console.log(users);
  //Orders Data
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/orders")
  //     .then((order) => setOrders(order.data));
  // }, []);
  // console.log(orders);
  //Moderator Data
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/moderators")
  //     .then((modearator) => setModerators(modearator.data));
  // }, []);
  // console.log(moderators);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/control" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Clients />} />
          <Route path="/moderators" element={<Moderator />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
