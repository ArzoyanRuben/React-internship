import { useCallback, useRef, useState } from "react";
import Loader from "../Loader/Loader";
import "./List.css";
import Modal from "../Modal";
import useFetch from "../../../hooks/useFetch";

export default function List({ listItemsGetter, ListComponent, action }) {
  const [current, setCurrent] = useState(null);
  const [type, setType] = useState(null)
  const newValue = useRef();
  const [listItems, setListItems] = useFetch(null, listItemsGetter, action);

  const closeModal = () => {
    setCurrent(null);
  };

  const showItems = useCallback(
    (user) => {
      setCurrent(user);
    },
    [listItems]
  );

  const changeTheValue = ({ target: { value } }) => {
    newValue.current = value;
  };

  const setNewValue = (type) => () => {
    if (type === "new") {
      setListItems([
        { name: newValue.current, id: listItems.length + 1 },
        ...listItems,
      ]);
    } else {
      setListItems(
        listItems.map((item) => {
          return item.id === current.id
            ? { ...item, name: newValue.current }
            : item;
        })
      );
    }
    setCurrent(null);
  };

  const deleteItem = () => {
    setListItems(
      listItems.filter((item) => {
        return item.id !== current.id;
      })
    );
    setCurrent(null);
  };

  const changeType = (type) => () => {
     setType(type)
  }

  return (
    <>
      {listItems ? (
        <ul className="list">
          <button
            onClick={() => {
              setCurrent("  ");
              changeType("new")
            }}
          >
            + Add
          </button>
          <ListComponent list={listItems} showItems={showItems} changeType={changeType("old")}/>
        </ul>
      ) : (
        <Loader />
      )}
      {current && (
        <Modal id="modal">
          <div className="modal-content">
            <span className="modal-content__close" onClick={closeModal}>
              X
            </span>
            <div>
              <input
                onChange={changeTheValue}
                defaultValue={current.name}
              ></input>
              <button onClick={setNewValue(type)}>Save</button>
              <button onClick={deleteItem}>delete</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}