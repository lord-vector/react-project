import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./header.css";

export default function Header() {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsArray = await axios.get("https://dummyjson.com/products");
      console.log(productsArray.data.products);
      setProducts(productsArray.data.products);
    };
    getProducts();
  }, []);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log("I am in second useeffect of heder");
  //     }, 2000);
  //   }, [counter]);

  //   useEffect(() => {
  //     console.log("I am in third useeffect of heder");
  //   }, [counter]);

  console.log("I am out");

  return (
    <>
      <div>
        Header
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          increse counter
        </button>
        {counter}
      </div>
      <div className="cardsSection">
        {products.map((ele) => {
          return (
            <Cards
              title={ele.title}
              image={ele.images[0]}
              description={ele.description}
            />
          );
        })}
      </div>
    </>
  );
}
