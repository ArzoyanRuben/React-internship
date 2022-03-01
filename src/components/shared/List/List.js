import { useState } from "react";
import Loader from "../Loader/Loader";
import "./List.css";

import Modal from "../Modal";
import useFetch from "../../../hooks/useFetch";

export default function List({
  listItemsGetter,
  modalItemsGetter,
  ListComponent,
  ModalComponent,
}) {

  const [current, setCurrent] = useState(null);
  const [listItems] = useFetch(null, listItemsGetter);

  const closeModal = () => {
    setCurrent(null);
  };

  const showItems = (id) => {
    setCurrent(id);
  };

  return (
    <>
      {listItems ? (
        <ul className="list">
          {listItems.map((item) => (
            <ListComponent key={item.id} item={item} showItems={showItems} />
          ))}
          {current && (
            <Modal id="modal">
              <div className="modal-content">
                <span className="modal-content__close" onClick={closeModal}>
                  X
                </span>
                <ModalComponent itemsGetter={modalItemsGetter} id={current} />
              </div>
            </Modal>
          )}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
}