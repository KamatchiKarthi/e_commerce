import React from "react";
import ProductCard from "./productcard";

const ProductList = ({ products, addtocart }) => {
  return (
    <div className=" grid grid-cols-1 mx-30  gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          v
          addtocart={addtocart}
        />
      ))}
    </div>
  );
};
export default ProductList;
