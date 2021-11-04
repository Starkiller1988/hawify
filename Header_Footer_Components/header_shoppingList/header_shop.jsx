import React from "react";
import "./header_shop.css";

const HeaderShop = () => {

    return (

        <header className="block center row">
            <div>
                <a href='#/'>
                    <h1>Einkaufsliste</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Korb</a>
            </div>

        </header>

    )

}

export default HeaderShop;
