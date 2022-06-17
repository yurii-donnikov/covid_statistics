import { call, put, takeEvery, fork } from "redux-saga/effects";
import { getCountries } from "../../api/country/country";
import { ICountries } from "../../interfaces/interfaces";
import { COYNTRIES_FETCH_REQUEST } from "./types";
import { fetchSuccess, fetchError, fetchRequest } from "./actions";

function* fetchCountriesWorker() {
  try {
    const data = (yield call(getCountries)) as ICountries;
    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* loadStatisticPage() {
  yield put(fetchRequest());
}

export function* countriesWotcher() {
  yield fork(loadStatisticPage);
  yield takeEvery(COYNTRIES_FETCH_REQUEST, fetchCountriesWorker);
}
