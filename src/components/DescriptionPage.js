import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DescriptionPage.css";

export default function DescriptionPage() {
  const [productDetails, setProductDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      const productsArray = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProductDetails(productsArray.data);
    };
    getProductDetails();
  }, []);
  console.log(productDetails);
  return (
    <div className="description-products">
      <div className="items">{productDetails.brand}</div>
      <div className="items">{productDetails.category}</div>
      <div className="items">{productDetails.description}</div>
      <div className="items">{productDetails.price}</div>
      <div className="items">{productDetails.rating}</div>
      <img className="items img" src={productDetails.thumbnail} />
    </div>
  );
}
