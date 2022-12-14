import React, { createContext } from "react";
import useFirebase from "./../hooks/useFirebase";
import useServices from "./../hooks/useServices";
import useCart from "./../hooks/useCart";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const { detail } = useServices();
  const { addToCart, selectedCourse, remove, setSelectedCourse } = useCart();
  const data = {
    allContext,
    detail,
    addToCart,
    selectedCourse,
    remove,
    setSelectedCourse,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
