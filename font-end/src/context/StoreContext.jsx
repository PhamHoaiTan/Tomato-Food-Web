import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  const [food_list, setFood_list] = useState([]);
  const url = "http://localhost:4000";

  // Cart
  const addToCard = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const decFormCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFormCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  // Load Cart
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/list",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  //fetch foodlist
  const fetchFoodList = async () => {
    const response = await axios(`${url}/api/food/list`);
    setFood_list(response.data.data);
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  }, []);
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const valueContext = {
    cartItems,
    setCartItems,
    addToCard,
    decFormCart,
    removeFormCart,
    getTotalCartAmount,
    url,
    setToken,
    token,
    food_list,
  };

  return (
    <StoreContext.Provider value={valueContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
