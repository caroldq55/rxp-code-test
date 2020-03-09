import { all } from "redux-saga/effects";

import appSaga from "./App/sagas";

function* rootSaga() {
  yield all([appSaga()]);
}

export default rootSaga;
