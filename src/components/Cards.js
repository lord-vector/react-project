import React, { useEffect } from "react";
import axios from "axios";
import "./cards.css";

export default function Cards(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="title">{props.title}</div>
      <img src={props.image}></img>
      <div className="decription">{props.description}</div>
    </div>
  );
}
