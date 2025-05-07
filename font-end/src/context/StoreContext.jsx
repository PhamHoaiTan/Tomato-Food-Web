import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState()
  
  const [food_list, setFood_list] = useState([])
  const url = "http://localhost:4000"

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

  const fetchFoodList = async () =>{
    const response = await axios(`${url}/api/food/list`);
    setFood_list(response.data.data)

  }
  useEffect(()=>{
    async  function loadData(){
      await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    }
    loadData()
  })
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
    getTotalCartAmount,
    url,
    setToken,
    token,
    food_list
  };



  return (
    <StoreContext.Provider value={valueContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
