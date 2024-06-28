import { useState, useRef } from "react";
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

  const imageRef = useRef(null);

  const [location, setLocation] = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      // Allow only valid numeric values and decimal points
      const numericValue = value.replace(/[^0-9.]/g, "");
      setProduct({
        ...product,
        [name]: numericValue,
      });
    } else {
      setProduct({
        ...product,
        [name]: name === "inStock" ? Number(value) : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(imageRef.current.files);
    const formData = new FormData();

    formData.append("image", imageRef.current.files[0]);
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("inStock", product.inStock);

    try {
      await fetch("http://localhost:3000/products/create", {
        method: "POST",
        body: formData,
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
          ref={imageRef}
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
