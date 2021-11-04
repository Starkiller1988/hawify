import React from "react";
import Product from "./Product"

export default function Main(props) {
    const { products } = props;
  return (
    <main className="block col-2">
      <h2>Produkte</h2>
      <div className="row">
          <Product key={product.id} product={product}></Product>
      </div>
    </main>
  );
}
