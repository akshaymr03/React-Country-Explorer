import { SET_COUNTRIES, FETCH_ERROR, LOAD_MORE, FETCH_COUNTRIES } from './actions';

const initialState = {
  countries: [],
  visibleCount: 10,
  loading: false,
  error: null,
};


const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, loading: true, error: null };
    case SET_COUNTRIES:
      return { ...state, countries: action.payload,loading: false, error: null };
    case LOAD_MORE:        
      return {
        ...state,
        visibleCount: Math.min(action.payload + 10, state.countries.length),
        loading: false
      };
    case FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default countryReducer;
