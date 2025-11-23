import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-blue-700 tracking-wide">
        FakeStore <span className="text-gray-900">Shop</span>
      </h1>

      <button
        onClick={openCart}
        className="relative px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md"
      >
        Cart
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
          {cartCount}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
