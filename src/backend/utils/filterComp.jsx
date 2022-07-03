function ratingFun(state, prodList) {
  const { rating } = state;
  return rating === ""
    ? prodList
    : prodList.filter((product) => product.rating >= rating);
}

function priceFun(state, prodList) {
  const { maxPrice } = state;
  return prodList.filter((product) => product.price <= maxPrice)||[];
}

function sortProd(state, prodList) {
  switch (state.sort) {
    case "RATING_Ascending":
      return [...prodList].sort((a, b) => Number(a.rating) - Number(b.rating));
    case "RATING_Descending":
      return [...prodList].sort((a, b) => Number(b.rating) - Number(a.rating));
    case "PRICE_Ascending":
      return [...prodList].sort((a, b) => Number(a.price) - Number(b.price));
    case "PRICE_Descending":
      return [...prodList].sort((a, b) => Number(b.price) - Number(a.price));
    default:
      return prodList;
  }
}

function CategoryHandler(state, prodList) {
  const { category } = state;
  if (category.length === 0) {
    return prodList;
  } else {
    return prodList.filter((product) =>
      category.includes(product.categoryName)
    );
  }
}

export { CategoryHandler, sortProd, priceFun, ratingFun };
