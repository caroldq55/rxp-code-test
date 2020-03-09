import { fromJS } from 'immutable';

const products = [
  {
    isPublished: 'true',
    productName: 'Apple iPhone X',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
    price: '299'
  },
  {
    isPublished: 'true',
    productName: 'Apple iPhone 8',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png',
    price: '100'
  },
  {
    isPublished: 'false',
    productName: 'Apple iPhone 8 Plus',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png',
    price: '99'
  },
  {
    isPublished: 'true',
    productName: 'Sony Xperia XA2',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png',
    price: '19'
  }
];

const item = {
  isPublished: true,
  productName: 'Sony Xperia XA2',
  productImage:
    'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png',
  price: '19'
};

const cartItems = [
  {
    isPublished: true,
    productName: 'Sony Xperia XA2',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png',
    price: '19'
  }
];

const publishedProducts = [
  {
    isPublished: true,
    productName: 'Apple iPhone X',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
    price: '299'
  },
  {
    isPublished: true,
    productName: 'Apple iPhone 8',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png',
    price: '100'
  },
  {
    isPublished: true,
    productName: 'Sony Xperia XA2',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png',
    price: '19'
  }
];

const availableProducts = [
  {
    isPublished: true,
    productName: 'Apple iPhone X',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
    price: '299'
  },
  {
    isPublished: true,
    productName: 'Apple iPhone 8',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png',
    price: '100'
  }
];

const initialValue = fromJS({
  products: [],
  loading: false,
  cartItems: []
});

export {
  products,
  initialValue,
  cartItems,
  availableProducts,
  item,
  publishedProducts
};
