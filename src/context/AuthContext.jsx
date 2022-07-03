import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate, useLocation } from "react-router";
import AuthReducer from "../backend/utils/AuthReducer";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    isLoggedIn: false,
    token: null,
  });

  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const token = localStorageToken?.token || "";
  const { isLoggedIn } = authState;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const login = async (user) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, user);
      localStorage.setItem("user", JSON.stringify(data));
      authDispatch({ type: "LOGIN", payload: data });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.response);
    }
  };

  const signup = async (user) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, user);
      localStorage.setItem("user", JSON.stringify(data));
      authDispatch({ type: "SIGNUP", payload: data });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("user");
      authDispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    data && authDispatch({ type: "LOGIN", payload: data });
  }, []);

  return (
    <AuthContext.Provider
      value={{ authState, isLoggedIn, login, logout, signup, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
