import ProductCard from "../../components/productCards/ProductCard";
import productsData from "../../data/productsData";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h1 className="title">{productsData.title}</h1>

        <div className="products__card">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Products;
