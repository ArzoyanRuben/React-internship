import { useState } from "react";

import "./List.css"

import Modal from "../Modal";

export default function List({listItems, modalItems, ListComponent, ModalComponent}) {
  const [current, setCurrent] = useState(null);

  const closeModal = () => {
    setCurrent(null);
  };

  const showItems = (id) => {
    setCurrent(id);
  };

  return (
    <div className="list">
      {listItems ? (
        <>
          {listItems.map((item) => (
            <ListComponent key={item.id} item={item} showItems={showItems} />
          ))}
        </>
      ) : (
        <h1>...Loading</h1>
      )}
      {current && (
        <Modal id="modal" open={current}>
          <div className="modal-content">
            <span className="modal-content__close" onClick={closeModal}>
              X
            </span>
            <ModalComponent items={modalItems} id={current} />
          </div>
        </Modal>
      )}
    </div>
  );
}