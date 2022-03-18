import {
  FunctionComponent,
  useCallback,
  useRef,
  useState,
  useEffect,
  MutableRefObject,
} from "react";

import Loader from "../Loader/Loader";
import "./List.css";
import Modal from "../Modal/Modal";
import useFetch from "../../../hooks/useFetch";
import { useAppDispatch } from "../../../store/index";
import { List } from "../../../APIResponseTypes";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert"

interface IProps {
  listItemsGetter: string;
  ListComponent: any;
  action: any;
  list: string;
}

type Modal = true | false;

const fakeData = {
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
};

const { v4: uuidv4 } = require("uuid");

const Lists: FunctionComponent<IProps> = ({
  listItemsGetter,
  ListComponent,
  action,
  list,
}) => {
  const [open, setOpen] = useState(false as Modal);
  const currentRef: MutableRefObject<List> = useRef({} as List);
  const typeRef: MutableRefObject<string> = useRef("");
  const newValue: MutableRefObject<string> = useRef("");
  const [listItems, status, fetchData, setListItems] = useFetch(
    listItemsGetter,
    "GET"
  );

  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(action(listItems));
  }, [listItems]);

  const showItems = useCallback(
    (item) => {
      currentRef.current = item;
      setOpen(true);
    },

    [listItems]
  );

  useCallback(() => {
    if (status === "error") navigate("/error");
  }, [status]);

  const changeTheValue = (event: { target: HTMLInputElement }) => {
    newValue.current = event.target.value;
  };

  const setNewValue = (type: string) => (): void => {
    let data: List[] | object;
    if (type === "new") {
      data = [
        { name: newValue.current, id: uuidv4(), ...fakeData },
        ...listItems,
      ];
      fetchData(listItemsGetter, "POST", data).then((status: String) => {
        if (status === "success") setListItems(data);
      });
    } else {
      data =
        list === "photos"
          ? { url: newValue.current }
          : { name: newValue.current };
      let url: string = `${listItemsGetter}/${currentRef.current.id}`;
      fetchData(url, "PATCH", data).then((status: string) => {
        if (status === "success")
          setListItems(
            listItems.map((item) =>
              item.id === currentRef.current.id ? {...item, ...data} : item
            )
          );
      });
    }
    setOpen(false);
  };

  const deleteItem = (): void => {
    const data: List[] = listItems.filter((item) => {
      return item.id !== currentRef.current.id;
    });

    fetchData(listItemsGetter, "POST", data).then((status: string) => {
      if (status === "success") setListItems(data);
    });

    setOpen(false);
  };

  const changeType = (type: string) => (): void => {
    typeRef.current = type;
  };

  return (
    <>
      {status === "loaded"? (
        <div className="list-container">
          <button
            onClick={() => {
              setOpen(true);
              typeRef.current = "new";
            }}
          >
            + Add
          </button>
          <ListComponent
            list={listItems}
            showItems={showItems}
            changeType={changeType("old")}
          />
        </div>
      ) : (
        <Loader />
      )}
      {status === "success" && <Alert/>}
      {open && (
        <Modal>
          <div className="modal-content">
            <span className="modal-content__close" onClick={closeModal}>
              X
            </span>
            <div>
              <input
                type={list === "photos" ? "file" : "text"}
                onChange={changeTheValue}
              ></input>
              <button onClick={setNewValue(typeRef.current)}>Save</button>
              <button onClick={deleteItem}>delete</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Lists;