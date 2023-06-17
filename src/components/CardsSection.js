import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./CardsSection.css";

export default function CardsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsArray = await axios.get("https://dummyjson.com/products");
      console.log(productsArray.data.products);
      setProducts(productsArray.data.products);
    };
    getProducts();
  }, []);
  return (
    <div className="cardsSection">
      {products.map((ele) => {
        return (
          <Cards
            id={ele.id}
            title={ele.title}
            image={ele.images[0]}
            description={ele.description}
          />
        );
      })}
    </div>
  );
}
