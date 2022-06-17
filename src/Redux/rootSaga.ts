import { all } from "redux-saga/effects";
import { countriesWotcher } from "./country/saga";

export function* rootSaga() {
  yield all([countriesWotcher()]);
}
