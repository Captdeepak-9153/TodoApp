import React from "react";

function Todoitem({ todoValue, onDelete, onEdit }) {
  return (
    <li className="flex items-center justify-start space-x-4 p-4 bg-gray-100 rounded-lg mb-2">
      <input
        type="checkbox"
        className="form-checkbox text-indigo-600 border-indigo-600 focus:ring-lime-300 checked:bg-yellow-900"
      />
      <h1 className="flex-grow overflow-hidden whitespace-nowrap max-w-full">
        {todoValue}
      </h1>
      <button
        onClick={onDelete}
        className="px-4 py-2 bg-red-500 text-white font-bold rounded"
      >
        Delete
      </button>
      <button
        onClick={onEdit}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
      >
        Edit
      </button>
    </li>
  );
}

export default Todoitem;
