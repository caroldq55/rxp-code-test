const Router = require("express").Router;
const controller = require("../controllers/product");

const routes = new Router();
routes.get("/", controller.getProducts);

module.exports = {
  productRoute: routes
};
