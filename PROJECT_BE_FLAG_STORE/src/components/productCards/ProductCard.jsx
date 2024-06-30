import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const [productCardData, setProductCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        console.log("Attempting to fetch data...");
        const response = await fetch("http://localhost:3000/products");

        const data = await response.json();
        console.log("Data fetched successfully:", data);

        setProductCardData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);

        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const addProduct = (product) => {
    const arrayProducts =
      JSON.parse(localStorage.getItem("arrayProducts")) || [];

    const productInfo = {
      product,
      quantity: 1,
    };

    console.log(productInfo);

    arrayProducts.push(productInfo);
    localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts));
  };

  return (
    <div className="container">
      <div className="card">
        {productCardData.map((card, index) => (
          <article key={index} className="card__article">
            <img src={"http://localhost:3000/" + card.image} alt="product" />
            <h5>{card.name}</h5>
            <p>{card.description}</p>
            <h6>{card.price} €</h6>
            <button
              className="card__article-btn"
              onClick={() => addProduct(card)}
            >
              <span>
                <FontAwesomeIcon fixedWidth icon={faShoppingBasket} />
              </span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
