const express = require("express");
const ProductController = require("../../controller/ProductController");
const productRouter = express.Router();

productRouter.route("/create").post(ProductController.createProduct);
productRouter.route("/getById").get(ProductController.getProduct);
productRouter.route("/review/create").post(ProductController.createReview);

module.exports = productRouter;
