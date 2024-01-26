import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");
  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleClick() {
    if (task.trim() === "") {
      alert("Enter Something in the Task");
      return;
    }
    setTask("");
    onAdd(task);
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="w-[16rem] px-2 py-1 rounded-sm bg-stone-200"
        value={task}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
