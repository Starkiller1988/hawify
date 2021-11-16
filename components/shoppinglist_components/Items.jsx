import React from "react";

export default function Item({ item, toggleItem }) {
  function handleItemClick() {
    toggleItem(item.id);
  }

  return (
    <div className="numberofitems">
      <label className="labelitems">
        <div>
          <input
            type="checkbox"
            checked={item.complete}
            onChange={handleItemClick}
            className="check"
          />
        </div>
        <div className="item">{item.name}</div>
      </label>
    </div>
  );
}
