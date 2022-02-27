import { useEffect, useRef } from "react";

import ReactDOM from "react-dom";

import "./Modal.css";

export default function Modal({ children, id, open }) {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(el.current);
    el.current.classList.add(id);
    return () => {
      el.current.parentElement.removeChild(el.current);
    };
  }, []);

  return <>{open ? ReactDOM.createPortal(children, el.current) : null}</>;
}
