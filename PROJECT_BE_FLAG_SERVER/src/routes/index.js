const router = require("express").Router();
const appController = require("../controllers/appController");
const authController = require("../controllers/authController");
const privateController = require("../controllers/privateController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", appController.root);
