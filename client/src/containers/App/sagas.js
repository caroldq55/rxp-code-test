import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { GET_PRODUCTS } from "./constants";
import { getProductsFail, getProductsSuccess } from "./actions";

const { REACT_APP_API_URL } = process.env;

function* getProductsHandler() {
  try {
    const { data } = yield axios.get(`${REACT_APP_API_URL}/api/product`);
    yield put(getProductsSuccess(data));
  } catch (err) {
    yield put(getProductsFail(err));
  }
}

export default function* appSagas() {
  yield takeEvery(GET_PRODUCTS, getProductsHandler);
}
