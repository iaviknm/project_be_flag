const db = require("../db/connection");

async function createProduct(data) {
  try {
    const { image, name, description, price, inStock, perMeter } = data;
    const [result] = await db
      .promise()
      .query(
        "INSERT INTO products (image, name, description, price, inStock, perMeter) VALUES (?, ?, ?, ?, ?, ?)",
        [image, name, description, price, inStock, perMeter]
      );
    return result.insertId;
  } catch (error) {
    console.error(error);
  }
}

async function findAllProducts() {
  const rows = await db.promise().query("SELECT * FROM products");
  return rows;
}

async function findProductById(id) {
  const [rows] = await db.promise.query("SELECT * FROM products WHERE id = ?", [
    id,
  ]);
  return rows[0];
}

async function updateProduct(id, data) {
  const { image, name, description, price, inStock, perMeter } = data;
  const [result] = await db.promise.query(
    "UPDATE products SET image = ?, name = ?, description = ?, price = ?, inStock = ?, perMeter = ? WHERE id = ?",
    [image, name, description, price, inStock, perMeter]
  );
  return result.affectedRows;
}

async function deleteProduct(id) {
  const [result] = await db.promise.query("DELETE FROM products WHERE id = ?", [
    id,
  ]);
  return result.affectedRows;
}

module.exports = {
  createProduct,
  findAllProducts,
  findProductById,
  updateProduct,
  deleteProduct,
};
