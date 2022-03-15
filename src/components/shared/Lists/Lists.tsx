import {
  FunctionComponent,
  ReducerAction,
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

interface IProps {
  listItemsGetter: string;
  ListComponent: any
  action: any;
  list: string;
}

type Modal = true | false;

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
  const [listItems, error, setListItems] = useFetch(listItemsGetter);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(action(listItems));
  }, [listItems]);

  const showItems = useCallback(
    (item)=> {
      currentRef.current = item;
      setOpen(true);
    },

    [listItems]
  );

  const changeTheValue = (event: { target: HTMLInputElement }) => {
    newValue.current = event.target.value;
  };

  const setNewValue = (type: string) => (): void => {
    if (type === "new") {
      setListItems([
        { name: newValue.current, id: listItems.length + 1 },
        ...listItems,
      ]);
    } else {
      setListItems(
        listItems.map((item) => {
            return item.id === currentRef.current.id
              ? list === "photos"
                ? { ...item, url: newValue.current }
                : { ...item, name: newValue.current }
              : item;
        })
      );
    }
    setOpen(false);
  };

  const deleteItem = (): void => {
    setListItems(
      listItems.filter((item) => {
        return item.id !== currentRef.current.id;
      })
    );
  };

  const changeType = (type: string) => (): void => {
    typeRef.current = type;
  };

  return (
    <>
      {listItems ? (
        <ul className="list">
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
        </ul>
      ) : (
        <Loader />
      )}
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
