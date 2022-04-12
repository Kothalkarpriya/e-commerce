export default function filterReducer(state, action) {
  const defaultState = {
    sort: "",
    rating: 5,
    category: [],
    maxPrice: 2000,
  };

  switch (action.type) {
    case "RATINGS":
      return { ...state, rating: action.payload };
    case "SORT":
      return { ...state, sort: action.payload };
    case "RESET":
      return defaultState;
    default:
      return state;
  }
}