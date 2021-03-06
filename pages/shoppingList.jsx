import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ItemList from "../components/shoppinglist_components/ItemList";
import { v4 as uuid } from "uuid";
import IMG1 from '../components/images/arrowwhite.png'

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();
  const LOCAL_STORAGE_KEY = "itemApp.items";

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function toggleItem(id) {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === id);
    item.complete = !item.complete;
    setItems(newItems);
  }

  function handleClearItems() {
    const newItems = items.filter((item) => !item.complete);
    setItems(newItems);
  }

  function handleAddItem(e) {
    const name = itemNameRef.current.value;
    if (name === "") return;
    console.log(name);
    setItems((prevItems) => {
      return [...prevItems, { id: uuid(), name: name, complete: false }];
    });
    itemNameRef.current.value = null;
  }

  return (
    <>
      <div className="content">

      <Link to="/" className="start">
      <img src={IMG1} alt="arrow" className="arrow"/>
      </Link>

        <ItemList items={items} toggleItem={toggleItem} />

        <input
          ref={itemNameRef}
          type="form"
          className="input_items"
          placeholder="Hier eingeben..."
        />

        <div className="delete_clear">
          <button onClick={handleAddItem} className="add_item">
            Item hinzufügen
          </button>
          <button onClick={handleClearItems} className="delete_item">
            Item entfernen
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
