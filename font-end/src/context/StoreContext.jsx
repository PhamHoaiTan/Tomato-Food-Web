import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCard = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const decFormCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeFormCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount
  }
  const valueContext = {
    food_list,
    cartItems,
    setCartItems,
    addToCard,
    decFormCart,
    removeFormCart,
    getTotalCartAmount
  };



  return (
    <StoreContext.Provider value={valueContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
