import React, { useEffect } from "react";
import "./cards.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="title">{props.title}</div>
      <img src={props.image}></img>
      <div className="decription">
        <div class="description">{props.description}</div>
        <div class="buttons">
          <button>Add to Cart</button>
          <Link to={`/cards/description/${props.id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
}
