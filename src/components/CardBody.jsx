import React from "react";
import ModalComponent from "./modal/Modal";
import "../../src/App.css";
import { useCustomModal } from './modal/useCustomModal';

export const CardBody = ({ item }) => {
  const {isOpen, toggle} = useCustomModal();
  return (
    <div className="cards" onClick={toggle}>
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
          <ModalComponent item={item} isOpen={isOpen} hide={toggle} />
          <b>{item.id}</b>
        </div>
      </div>
    </div>
  );
};
