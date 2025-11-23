import React from "react";

const CartModal = ({ cartItems, closeCart, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
      <div className="bg-white rounded-xl w-96 max-h-[80vh] p-6 overflow-y-auto shadow-2xl">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-red-500 text-2xl font-bold"
          >
            ✖
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-3 rounded-lg mb-3 flex items-center gap-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm line-clamp-2">{item.title}</p>
                <p className="text-green-600 font-bold">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm bg-red-600 text-white px-3 py-1 rounded shadow"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartModal;
