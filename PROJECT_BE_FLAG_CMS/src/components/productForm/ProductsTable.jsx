import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "wouter";

import "./Style.css";
import { tableData } from "../../data/data";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [location, setLocation] = useLocation(); 

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleAddProductClick = () => {
    setLocation("/add"); 
  };

  return (
    <div className="container">
      <div>
        <h2 className="form__title">{tableData.title}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddProductClick}
        >
          Adicionar Produtos
        </button>
      </div>

      <br />
      <br />

      <table className="table table-striped">
        <thead>
          <tr>
            {tableData.headers.map((header, index) => (
              <th key={index} className="table__th">
                {header.headerTitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} width="50" />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price} €</td>
              <td>{product.inStock}</td>
              <td>
                <Link
                  href={`/edit/${product.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger btn-sm ml-2"
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
