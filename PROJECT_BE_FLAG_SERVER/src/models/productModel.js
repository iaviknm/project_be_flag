const db = require("../db/connection");

async function createProduct(data) {
  const { image, name, description, price, inStock, perMeter } = data;
  const [result] = await db.execute(
    "INSERT INTO products (image, name, description, price, inStock, perMeter) VALUES (?, ?, ?, ?, ?, ?)",
    [
      image,
      name,
      description || null,
      price,
      inStock !== undefined ? inStock : null,
      perMeter !== undefined ? perMeter : null,
    ]
  );
  return result.insertId;
}

async function findAllProducts() {
  const [rows] = await db.execute("SELECT * FROM products");
  return rows;
}

async function findProductById(id) {
  const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
}

async function updateProduct(id, data) {
  const { image, name, description, price, inStock, perMeter } = data;
  const [result] = await db.execute(
    "UPDATE products SET image = ?, name = ?, description = ?, price = ?, inStock = ?, perMeter = ? WHERE id = ?",
    [
      image,
      name,
      description || null,
      price,
      inStock !== undefined ? inStock : null,
      perMeter !== undefined ? perMeter : null,
    ]
  );
  return result.affectedRows;
}

async function deleteProduct(id) {
  const [result] = await db.execute("DELETE FROM products WHERE id = ?", [id]);
  return result.affectedRows;
}

module.exports = {
  createProduct,
  findAllProducts,
  findProductById,
  updateProduct,
  deleteProduct,
};
