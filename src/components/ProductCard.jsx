import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-xl shadow-lg p-5 bg-white hover:shadow-2xl transition-all duration-300">

      <img
        src={product.image}
        alt={product.title}
        className="h-56 mx-auto object-contain mb-4 hover:scale-105 transition-transform duration-300"
      />

      <h2 className="font-semibold text-sm line-clamp-2 min-h-[40px]">
        {product.title}
      </h2>

      <p className="text-xl font-bold mt-3 text-green-600">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white py-2 rounded-lg w-full hover:bg-blue-700 transition-all shadow"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
