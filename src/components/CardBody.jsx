import React, { Fragment } from "react";
import "../App.css";
import ModalComponent from "./Modal";

export const CardBody = ({ item }) => {
  return (
      <div className="cards">
        <div className="card card-1">
          <h2 className="card__title">{item.name}</h2>
          <p>Personal Info</p>
          <ul>
            <li>{item.phone}</li>
            <li>{item.website}</li>
            <li>{item.address.city}</li>
            <li>{item.address.street}</li>
          </ul>
          <p>Company Info</p>
          <ul>
            <li>{item.company.name}</li>
            <li>{item.company.bs}</li>
            <li>{item.company.catchPhrase}</li>
          </ul>
          <div className="card__apply">
            <ModalComponent item={item} />
            <b>{item.id}</b>
          </div>
        </div>
      </div>
  );
};

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
// }

//   genNew.addEventListener("click", setBg);
//   setBg();
