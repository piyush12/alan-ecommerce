import { useContext } from "react";

import { StoreContext } from "../context/CartContext";

const useCart = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("Must wrap inside CartProvider");
  }
  return context;
};

export default useCart;
