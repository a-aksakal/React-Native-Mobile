export const FavReducer = (state = [], action) => {
  const { type, payload } = action;
  if (type == "ADD_FAV") {
    state = [...state, payload];
    return state;
  } else if (type == "GET_FAV") {
    return state;
  } else {
    return state;
  }
};
