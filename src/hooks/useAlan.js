import { useCallback, useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import useCart from "../hooks/useCart";

const COMMANDS = {
  OPEN_CART: "open-cart",
};

function useAlan() {
  const [alanInstance, setAlanInstance] = useState();
  const { setShowHideCart } = useCart();

  const openCart = useCallback(() => {
    alanInstance.playText("Opening Cart");
    setShowHideCart(true);
  }, [alanInstance, setShowHideCart]);

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart);

    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
    };
  }, [openCart]);

  const alan = useCallback(() => {
    setAlanInstance(
      alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command }) => {
          window.dispatchEvent(new CustomEvent(command));
        },
      })
    );
  }, []);

  useEffect(() => {
    if (!!alanInstance) return;
    alan();
  }, [alan, alanInstance]);

  return null;
}

export default useAlan;
