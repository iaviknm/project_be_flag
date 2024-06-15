import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { formData } from "../../data/data";

import "./Style.css";

const EditProduct = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "inStock" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      setLocation("/");
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2 className="form__title">Editar Produto</h2>
      <br />

      <div className="mb-3">
        <label className="form-label">{formData.imgLabel}</label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Imagem"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{formData.nameLabel}</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{formData.descriptionLabel}</label>
        <textarea
          className="form-control"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Descrição"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{formData.priceLabel}</label>
        <input
          type="text"
          className="form-control"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Preço"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{formData.quantityLabel}</label>
        <input
          type="number"
          className="form-control"
          name="inStock"
          value={product.inStock}
          onChange={handleChange}
          placeholder="Quantidade"
          required
          min="1"
        />
      </div>
      <button type="submit" className="btn">
        Atualizar Produto
      </button>
    </form>
  );
};

export default EditProduct;
