import express, { Router } from "express";
import controller from "../Repositories/controller";

const shopRoutes: Router = express.Router();

shopRoutes.get("/", controller.shopList);
shopRoutes.get("/:id", controller.productPriceList);
shopRoutes.post("/shoppingCart", controller.postOrder);
shopRoutes.post("/shoppingCart", controller.user);
shopRoutes.get("/history", controller.getOrder);
shopRoutes.post("/history", controller.cancelOrder);

export default shopRoutes;
