import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_COUNTRIES, setCountries, fetchError } from './actions';

function* fetchCountriesSaga() {
  try {
    const response = yield call(fetch, 'https://restcountries.com/v2/all?fields=name,region,flag');
    const data = yield response.json();
    yield put(setCountries(data));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_COUNTRIES, fetchCountriesSaga);
}
