import { useCart } from "../../context/cartContext";

function CartReducer(state, action) {
  switch (action.type) {
    case "CART_ADD":
      return {
        ...state,
        CartItems: [...state.CartItems, action.payload],
      };
    case "CART_DEL":
      return {
        ...state,
        CartItems: state.CartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CART_QUANTITY":
      return {
        ...state,
        CartItems: state.CartItems.map((item) => {
          item.quantity =
            item.id === action.payload.if
              ? action.payload.quantity
              : item.quantity;
          return item;
        }),
      };
    default:
      return state;
  }
}

function ItemInCart(id) {
  const { state } = useCart();
  return (
    state.CartItems.length >= 1 &&
    state.CartItems.filter((item) => item.id === id).length > 0
  );
}
export { CartReducer, ItemInCart };
