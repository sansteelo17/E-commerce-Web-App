import classes from "./Modal.module.css";

const Modal = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

export default Modal;
