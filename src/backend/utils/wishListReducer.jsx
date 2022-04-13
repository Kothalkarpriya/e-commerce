import { useWishList } from "../../context/wishListContext";

function wishListReducer(state, action) {
  switch (action.type) {
    case "WISH_ADD":
      return {
        ...state,
        wishListItems: [...state.wishListItems, action.payload],
      };
    case "WISH_DEL":
      return {
        ...state,
        wishListItems: state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

function ItemInWishListCheck(id) {
  const { state } = useWishList();
  return (
    state.wishListItems.length >= 1 &&
    state.wishListItems.filter((item) => item.id === id).length > 0
  );
}

export { wishListReducer, ItemInWishListCheck };
