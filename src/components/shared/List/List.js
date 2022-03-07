import { useCallback, useState } from "react";
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

  const showItems = useCallback((id) => {
    setCurrent(id);
  }, [listItems]);

  return (
    <>
      {listItems ? (
        <ul className="list">
            <ListComponent list={listItems} showItems={showItems}/>
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