import react from "react";
import { paths } from "../utils/data";

export default function Moderator(prop) {
  const { moderator } = prop;
  return (
    <div>
      <div className="product-bar">
        <img src={paths[4].image} alt="product-icon" />
        <p>Бүтээгдэхүүнүүд</p>
      </div>
      {moderator &&
        moderator.map((moderators, index) => (
          <div key={index}>
            <h2>{moderators.modId}</h2>
          </div>
        ))}
    </div>
  );
}
