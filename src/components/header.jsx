import React from "react";

const Navbar = ({cartCount,cartopen}) => {
  return <nav className="bg-gray-400 px-40 py-4 flex justify-between  items-center">
    <div className="text-3xl font-bold 

"> Shopping Costumes</div>
    <div className="flex gap-4">
      <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
      <a href="#" className="text-gray-800 hover:text-gray-600">Products</a>
      <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
      <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a> </div>
      <div className="flex gap-4 rounded-full">
      <button className="bg-gray-800 cursor-pointer text-white p-2 rounded flex items-center gap-4">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/user.png" alt="user" className="w-8 h-8" />
      </button>
    <button onClick={cartopen} className="bg-gray-800 cursor-pointer text-white p-2 rounded flex items-center gap-4">{cartCount}
      <img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="cart" className="w-8 h-8" />
      
    </button>
    </div>

  </nav>;
};

export default Navbar;
