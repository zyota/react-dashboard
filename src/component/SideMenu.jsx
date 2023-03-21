import {React, useState} from "react";
import "../style/sidemenu.css";
import { useNavigate } from "react-router-dom";
import {paths} from "../utils/data";

export default function SideMenu() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  function activeButtn(paths) {
    navigate(`${paths.url}`);
    setActiveButton(paths.name);
  }

  return (
    <div className="sideMenu">
      {paths.map((paths, index) => {
        return (
          <div className="dashboard-Btn" key={index}>
            <button className={
              activeButton === paths.name 
                ? "Active dashboard-Btn" 
                : "inactive dashboard-Btn"
            }
            onClick = {()=>activeButtn(paths)}
            >
              <img className="dashboard-buttons-img" src={paths.image} alt="icon" />
              <p>{paths.name}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}
{/* <button onClick={urlHome}>Хянах самбар</button>
      <button onClick={urlProduct}>Бүтээгдэхүүнүүд</button>
      <button onClick={urlOrders}>Захиалгууд</button>
      <button onClick={urlClients}>Хэрэглэгчид</button> */}