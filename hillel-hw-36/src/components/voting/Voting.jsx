import React from "react";
import reactions from "../../data/reactions.js";
import Item from "../item/Item.jsx";
import "./Voting.css";

function Voting() {
  return (
    <div className="wrapper">
      <div className="container">
        {reactions.map((reaction, index) => (
          <Item reaction={reaction} key={reaction} />
        ))}
      </div>
    </div>
  );
}

export default Voting;
