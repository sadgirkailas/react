import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DynamicList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dynamic List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addItem}>
          Add Item
        </button>
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
