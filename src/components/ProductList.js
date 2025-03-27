import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={{
            ...product,
            images: Array.isArray(product.images)
              ? product.images
              : [product.image || product.images || ""].filter(Boolean),
          }}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
