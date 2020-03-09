export default products =>
  products.map(product => ({
    ...product,
    isPublished: product.isPublished === 'true' ? true : false,
    price: Number(product.price)
  }));
