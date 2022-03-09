import "./Modal.css";
import { POSTS_URL } from "../../constants/Urls";
import useFetch from "../Hook/useFetch/useFetch";

function Modal({ name, id1 }) {
  const [data] = useFetch(POSTS_URL );
  return Modal ? (
    <>
      <div>{name}</div>
      {data.map((item) =>
        id1 === item.userId ? (
          <div key={item.id} className="modal-post">
            <p> {item.title} </p>
          </div>
        ) : null
      )}
    </>
  ) : null;
}
export default Modal;
