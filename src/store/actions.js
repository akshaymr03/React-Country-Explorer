export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const FETCH_ERROR = 'FETCH_ERROR';
export const LOAD_MORE = 'LOAD_MORE';

export const fetchCountries = () => ({ type: FETCH_COUNTRIES });
export const setCountries = (countries) => ({ type: SET_COUNTRIES, payload: countries });
export const fetchError = (error) => ({ type: FETCH_ERROR, payload: error });
export const loadMore = (count) => ({ type: LOAD_MORE, payload: count });
