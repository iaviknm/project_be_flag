const db = require("../db/connection");

async function createProduct(data) {
  const [result] = await db.execute(
    "INSERT INTO products (image, name, description, price, inStock, perMeter) VALUES (?, ?, ?, ?, ?, ?)",
    [
      data.image,
      data.name,
      data.description,
      data.price,
      data.inStock,
      data.perMeter,
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
  const [result] = await db.execute(
    "UPDATE products SET image = ?, name = ?, description = ?, price = ?, inStock = ?, perMeter = ? WHERE id = ?",
    [data.image, data.name, data.description, data.price, data.inStock, id]
  );
  return result.affectedRows;
}

async function deleteProduct(id) {
  const [result] = await db.execute('DELETE FROM products WHERE id = ?', [id]);
  return result.affectedRows;
}

module.exports = {
  createProduct,
  findAllProducts,
  findProductById,
  updateProduct,
  deleteProduct
};