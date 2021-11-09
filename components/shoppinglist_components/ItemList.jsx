import React from "react";
import Item from "./Items";

export default function ItemList({ items, toggleItem }) {
  return (
    <div className="item-list">
      <div className="leftitems">
        {items.filter((item) => !item.complete).length} Item(s) übrig
      </div>
      <div className="title_itemlist">
        <h2 className="title_item">Einkaufsliste</h2>
      </div>
      <div className="back">
        <div className="value_item">
          {items.map((item) => {
            return <Item key={item.id} toggleItem={toggleItem} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
