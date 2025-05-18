import React from "react";

const productcard = ({ product ,addtocart}) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-7">
      <img
        src={product.image}
        alt={product.title}
        className="aspect-square w-full rounded-md bg-gray-700 object-fit group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <h2 className="mt-4 h-10 text-sm text-gray-700">{product.title}</h2>
    
      <div className="flex justify-between mt-4 items-center">
        <p>${product.price}</p>
        <button onClick={() => addtocart(product)}  className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default productcard;
