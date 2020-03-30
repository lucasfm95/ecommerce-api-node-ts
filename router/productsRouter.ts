import * as express from "express";

import ProductController from "../controller/productController";

const productRouter = express.Router();

productRouter.route("/api/v1/products").get(ProductController.get);
productRouter.route("/api/v1/products/:id").get(ProductController.getById);
productRouter.route("/api/v1/products").post(ProductController.create);

export default productRouter;