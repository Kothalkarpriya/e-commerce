export const AddressReducer = (state, action) => {
  switch (action.type) {
    case "ADDRESS":
      return {
        ...state,
        addresses: action.payload.addresses,
      };
    case "CURR_ADDRESS":
      return {
        ...state,
        mobile: action.payload.mobile,
      };
    default:
      return { ...state };
  }
};
