import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="text-right">
        <button className="bg-stone-700 px-4 rounded-md py-2 text-white my-3 mr-2">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
