import { createContext, useReducer } from "react";

const StoreContext = createContext();

const cartItemsReducer = (acc, item) => {
  const isExisting = acc.find((i) => i.id === item.id);
  if (isExisting) {
    isExisting.quantity =
      parseInt(isExisting.quantity) + parseInt(item.quantity);
  } else {
    acc.push({
      ...item,
    });
  }
  return acc;
};

const cartTotalReducer = (acc, val) => {
  const total = val.price * val.quantity;
  return acc + total;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "SHOW_HIDE_CART":
      console.log("SHOW_HIDE_CART");
      return {
        ...state,
        showCart: action.payload,
      };
    default:
      return state;
  }
};

const StoreContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    loading: false,
    cartItems: [],
    showCart: false,
  });

  const { cartItems, showCart } = state;
  const summarizeCartItem = cartItems.reduce(cartItemsReducer, []);
  const cartTotal = cartItems.reduce(cartTotalReducer, 0);
  const isCartEmpty = summarizeCartItem.length === 0;
  const cartItem = summarizeCartItem.length;

  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: id });
  };

  const setShowHideCart = (isOpen) => {
    dispatch({ type: "SHOW_HIDE_CART", payload: isOpen });
  };

  return (
    <StoreContext.Provider
      {...props}
      value={{
        addToCart,
        cartItems: summarizeCartItem,
        total: cartTotal,
        removeFromCart: removeFromCart,
        isCartEmpty: isCartEmpty,
        cartItem: cartItem,
        setShowHideCart,
        showCart,
      }}
    />
  );
};

export { StoreContext, StoreContextProvider };
