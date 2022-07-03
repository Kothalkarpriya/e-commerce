// import { createContext, useContext, useReducer, useEffect } from "react";
// import { AddressReducer } from "../backend/utils/AddressReducer";
// import { getAddressHandler } from "./addressService";
// import { useAuth } from "./AuthContext";

// const AddressContext = createContext();

// const AddressContextProvider = ({ children }) => {
//   const defaultAdd = {
//     name: "Priya Kothalkar",
//     mobileNo: "9856784521",
//     area: "Mhada Colony",
//     city: "Aurangabad",
//     state: "Maharashtra",
//     pincode: "431001",
//   };
//   const [addressState, addressDispatch] = useReducer(
//     AddressReducer,
//     defaultAdd
//   );

//   const { token } = useAuth();
//   useEffect(() => {
//     getAddressHandler(token, addressDispatch);
//   }, [token]);

//   return (
//     <AddressContext.Provider
//       value={{ defaultAdd, addressState, addressDispatch }}
//     >
//       {children}
//     </AddressContext.Provider>
//   );
// };

// const useAddress = () => useContext(AddressContext);

// export { AddressContextProvider, useAddress };
