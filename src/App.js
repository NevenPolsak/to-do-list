import React, { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const InputEvent = (event) => {
    setItem(event.target.value);
  };

  const AddItems = () => {
    setNewItem((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  const DeleteItem = (id) => {
    setNewItem((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input placeholder="Add item" value={item} onChange={InputEvent} />
            <button onClick={AddItems}>+</button>
          </div>
          {newItem.map((itemVal, index) => {
            return (
              <List
                text={itemVal}
                key={index}
                id={index}
                onSelect={DeleteItem}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
