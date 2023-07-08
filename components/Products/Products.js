import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(products);
  return (
        <div className="mx-auto max-w-7xl mt-[74px]">
      <div className="grid grid-cols-5 gap-5">
        {products.map(({ id, title, thumbnail, price }) => (
          <Product key={id} id={id} title={title} thumbnail={thumbnail} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
