import React from "react";
import "../style/header.css";
import HeaderIcon from "./icons/HeaderIcon";
import LogoutIcon from "./icons/LogoutIcon";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <HeaderIcon />

        <div className="search-input">
          <input type="search" placeholder="Search" />
          <button className="search-button">Search</button>
        </div>
        <button className="logout">
          <LogoutIcon />
          Гарах
        </button>
      </div>
    </div>
  );
}
