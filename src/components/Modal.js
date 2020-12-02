import Dialog from "@reach/dialog";
import {
  cloneElement,
  useState,
  createContext,
  useContext,
  useEffect,
  memo,
} from "react";

import "@reach/dialog/styles.css";

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

const ModalContext = createContext();

function Modal(props) {
  const { onHide } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (onHide) {
      setIsOpen(false);
    }
  }, [isOpen, onHide]);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalButton({ children }) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(children, {
    onClick: callAll(() => setIsOpen(true), children.props.onClick),
  });
}

function ModalDismissButton({ children }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      setIsOpen(false);
    },
  });
}

function ModalContent(props) {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  const { children } = props;
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      style={{
        width: "70vw",
        position: "relative",
      }}
      {...props}
    >
      <ModalDismissButton>
        <button
          className="close-button"
          style={{
            position: "absolute",
            top: 0,
            right: 10,
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#E91E63",
          }}
        >
          <span aria-hidden>×</span>
        </button>
      </ModalDismissButton>
      {children}
    </Dialog>
  );
}
// eslint-disable-next-line no-func-assign
Modal = memo(Modal);
export { Modal, ModalButton, ModalContent };
