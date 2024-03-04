import React from 'react';

function Header() {
  return (
    <div className=" bg-gradient-to-r from-yellow-300 to-orange-400  py-4 px-6 rounded-md shadow-md">
    <h1 className="text-4xl font-bold text-white mb-4">Todo</h1>
    <input
      type="text"
      className="w-full py-2 px-4 border-2 border-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Add item...."
    />
  </div>
  
  );
}

export default Header;

