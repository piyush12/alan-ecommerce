import { useState, useRef, useLayoutEffect } from "react";

import CartButton from "./CartButton";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import useCart from "../hooks/useCart";

function Cart() {
  const {
    cartItems,
    total,
    removeFromCart,
    isCartEmpty,
    cartItem,
    showCart,
    setShowHideCart,
  } = useCart();

  const cartMenu = useRef(null);

  useLayoutEffect(() => {
    if (cartMenu.current === null) return;

    document.addEventListener("click", showHideMenu);

    return () => document.removeEventListener("click", showHideMenu);
  });

  function showHideMenu(e) {
    if (cartMenu.current && cartMenu.current.contains(e.target)) {
      return;
    }
    setShowHideCart(false);
  }

  if (isCartEmpty) {
    return null;
  }

  return (
    <section ref={cartMenu}>
      {showCart && (
        <div className="mb-4 top-0 right-0 mr-4 mt-20 fixed">
          <div
            style={{ maxHeight: "calc(100vh - 6rem)" }}
            className="bg-white text-gray-700 body-font shadow-lg border rounded-lg flex flex-col"
          >
            <div className="overflow-y-auto px-4 pt-4">
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
            <CartTotal total={total} />
          </div>
        </div>
      )}

      <CartButton
        cartItem={cartItem}
        onClick={() => setShowHideCart(!showCart)}
      />
    </section>
  );
}

export default Cart;
