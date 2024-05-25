import productCardData from "../../data/productCardData";
import "./ProductCard.css";

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
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
