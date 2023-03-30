import { Fragment } from "react";
import ReactDOM from "react-dom";
const Call = () => {
  return <div id="google_translate_element"></div>;
};
const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return <Fragment>{ReactDOM.createPortal(<Call />, portalElement)}</Fragment>;
};
export default Modal;
