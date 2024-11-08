const {
  createProduct,
  findAllProducts,
  findProductById,
  updateProduct,
  deleteProduct,
} = require("../db/productDB");

async function create(req, res) {
  req.body.image = req.file.filename;
  console.log(req.body);
  try {
    const productId = await createProduct(req.body);
    res.status(201).json({ id: productId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getAll(req, res) {
  try {
    const products = await findAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getById(req, res) {
  try {
    const product = await findProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function update(req, res) {
  console.log("first");
  try {
    const affectedRows = await updateProduct(req.params.id, req.body);
    console.log(affectedRows);
    if (affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ id: req.params.id, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function remove(req, res) {
  try {
    const affectedRows = await deleteProduct(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
