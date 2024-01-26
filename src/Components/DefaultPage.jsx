export default function Default({ onClick }) {
  return (
    <div className="flex justify-center items-center w-full">
      <div>
        <button
          className="px-4 py-2 md:text-base text-xs rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onClick}
        >
          Create New projects
        </button>
      </div>
    </div>
  );
}
