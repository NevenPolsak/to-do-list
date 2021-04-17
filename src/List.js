import React from "react";

const List = (props) => {
  return (
    <div>
      <div className="Item">
        <p>{props.text}</p>
        <button onClick={()=>{
          return props.onSelect(props.id)
        }}>x</button>
      </div>
    </div>
  );
};

export default List;
