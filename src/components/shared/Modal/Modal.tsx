import { useEffect, useRef, FunctionComponent, MutableRefObject } from "react";

import { createPortal } from "react-dom";

import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal: FunctionComponent = ({ children }) => {
  const elRef: MutableRefObject<HTMLDivElement> = useRef(
    document.createElement("div")
  );

  useEffect(() => {
    if (!modalRoot || !elRef.current) {
      return;
    }
    elRef.current.classList.add("modal")
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
