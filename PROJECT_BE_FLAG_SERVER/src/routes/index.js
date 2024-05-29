const router = require("express").Router();
const appController = require("../controllers/appController");
const authController = require("../controllers/authController");
const privateController = require("../controllers/privateController");
const productController = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", appController.root);

//! products routes
router.post("/products", productController.create);
router.get("/products", productController.getAll);
router.get("/products/:id", productController.getById);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.remove);

module.exports = router;
