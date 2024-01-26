import { useRef } from "react";
import Modal from "./Modal";
export default function NewProjects({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const due = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDue = due.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDue.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      due: enteredDue,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-stone-500 my-4 text-xl font-bold">Invalid Input</h2>
        <p className="text-stone-900 my-2 text-lg">
          Oops! Looks like you forgot a value
        </p>
        <p className="text-stone-900 my-2 text-lg">
          Please provide a valid value
        </p>
      </Modal>
      <div className="w-full mx-auto flex flex-col gap-6 justify-center">
        <div className="w-1/2 mx-auto">
          <div className="text-right">
            <button onClick={onCancel} className="text-lg p-3">
              cancel
            </button>
            <button
              className="bg-stone-700 px-4 rounded-md py-2 text-white"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          <form className="flex flex-col ">
            <label>Title</label>
            <input
              ref={title}
              className="bg-stone-300 py-1 rounded-md outline-none"
              type="text"
            />
            <label>Description</label>
            <textarea
              ref={description}
              className="bg-stone-300 py-1 rounded-md outline-none"
              placeholder="Enter the description"
            ></textarea>
            <label>Dute date</label>
            <input
              ref={due}
              className="bg-stone-300 py-1 rounded-md outline-none"
              type="date"
            />
          </form>
        </div>
      </div>
    </>
  );
}
