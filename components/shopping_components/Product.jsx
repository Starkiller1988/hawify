import React from 'react'

export default function Product(props) {
    const { product } = props;
    return (
      <div className="item_content">
          <img className="small" src={product.image} alt={product.name}></img>
          <h3>{product.name}</h3>
          <div>Ø-Preis <br /> €{product.price}</div>
          <div>
              <button className="btn_cart">Einfügen</button>
          </div>
      </div>
         );
}
