const HTTPStatus = require("http-status");
const productsData = require("../../fixture/products.json");

function getProducts(req, res, next) {
  return res.status(HTTPStatus.OK).json(productsData);
}

module.exports = { getProducts };
