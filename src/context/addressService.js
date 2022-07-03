// import axios from "axios";

// const getAddressService = (token) => {
//   return axios.get("/api/user/address", {
//     headers: {
//       authorization: token,
//     },
//   });
// };

// const addAddressService = (token, address) => {
//   return axios.post(
//     "/api/user/address",
//     {
//       address,
//     },
//     {
//       headers: {
//         authorization: token,
//       },
//     }
//   );
// };

// const editAddressService = (token, _id, address) => {
//   return axios.post(
//     `/api/user/address/${_id}`,
//     { address },
//     {
//       headers: {
//         authorization: token,
//       },
//     }
//   );
// };

// const deleteAddressService = (token, _id) => {
//   return axios.delete(`/api/user/address/${_id}`, {
//     headers: {
//       authorization: token,
//     },
//   });
// };

// export const getAddressHandler = async (token, addressDispatch) => {
//   try {
//     const res = await getAddressService(token);
//     if (res.status === 200) {
//       addressDispatch({
//         type: "ADDRESS",
//         payload: { addresses: res.data.address },
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const addAddressHandler = async (
//   token,
//   address,
//   addressDispatch,
//   setAddress,
//   defaultAddress,
//   toastProps
// ) => {
//   try {
//     const res = await addAddressService(token, address);
//     if (res.status === 201) {
//       addressDispatch({
//         type: "ADDRESS",
//         payload: { addresses: res.data.address },
//       });
//     }
//     setAddress(defaultAddress);
//     console.log("Address saved successfully", toastProps);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const editAddressHandler = async (
//   token,
//   address,
//   addressDispatch,
//   setAddress,
//   defaultAddress,
//   toastProps
// ) => {
//   try {
//     const res = await editAddressService(token, address._id, address);
//     if (res.status === 200) {
//       addressDispatch({
//         type: "ADDRESS",
//         payload: { addresses: res.data.address },
//       });
//     }
//     setAddress(defaultAddress);
//     console.log("Address updated successfully", toastProps);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteAddressHandler = async (
//   token,
//   _id,
//   addressDispatch,
//   toastProps
// ) => {
//   try {
//     const res = await deleteAddressService(token, _id);
//     if (res.status === 200) {
//       addressDispatch({
//         type: "ADDRESS",
//         payload: { addresses: res.data.address },
//       });
//     }
//     console.log("Address deleted successfully", toastProps);
//   } catch (error) {
//     console.log(error);
//   }
// };
