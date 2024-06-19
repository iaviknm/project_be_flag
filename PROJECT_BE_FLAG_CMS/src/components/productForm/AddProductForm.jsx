import { useState } from "react";
import { useLocation } from "wouter";
import "./Style.css";

import { formData } from "../../data/data";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
    inStock: 1,
  });

  const [location, setLocation] = useLocation();

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
      await fetch("http://localhost:3000/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // multipart form data
        },
        body: JSON.stringify(product),
      });
      setLocation("/");
    } catch (error) {
      console.error("Error creating product", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2 className="form__title">{formData.title}</h2>
      <br />

      <div className="mb-4">
        <label className="form-label">{formData.imgLabel}</label>
        <input
          type="file"
          className="form-control"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Imagem"
          required
        />
      </div>

      <div className="mb-4">
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
      <div className="mb-4">
        <label className="form-label">{formData.descriptionLabel}</label>
        <textarea
          className="form-control"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Descrição"
        />
      </div>
      <div className="mb-4">
        <label className="form-label">{formData.priceLabel}</label>
        <input
          type="text"
          className="form-control"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Preço"
          required
          min="0"
        />
      </div>
      <div className="mb-4">
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
        {formData.btn}
      </button>
    </form>
  );
};

export default AddProduct;