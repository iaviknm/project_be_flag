import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import productCardData from "../../data/productCardData";
import "./ProductCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          {productCardData.cards.map((card, index) => {
            return (
              <article key={index} className="card__article">
                <img src={card.image} alt="product-image" />
                <h5>{card.name}</h5>
                <p>{card.description}</p>
                <h6>{card.price}</h6>
                <button className="card__article-btn">
                  <a href="" className="card__article-btn_a">
                    <span>
                      <FontAwesomeIcon fixedWidth icon={faShoppingBasket} />
                    </span>
                  </a>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
