import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const PlaceOrder = () => {
  const { getTotalCartAmount, food_list, cartItems, url, token } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData((e)=>({...e, [name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })

    let orderData =  {
      address:data,
      items: orderItems,
      amount:getTotalCartAmount()+2
    }
    let response = await axios.post(url+'/api/order/place', orderData, {headers:token})
    console.log(response)
    // if(response){
    //   const {session_url} = response.data
    //   window.location.replace(session_url);
    // }
    // else{
    //   alert("Error")
    // }
  }


  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="First Name" />
          <input required type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last Name" />
        </div>
        <input required type="email" name="email" onChange={onChangeHandler}  value={data.email} placeholder="Email Address" />
        <input required type="text" placeholder="Stress" name="stress" onChange={onChangeHandler}  value={data.stress}/>
        <div className="multi-fields">
          <input required type="text" placeholder="City"  name="city" onChange={onChangeHandler}  value={data.city}/>
          <input required type="text" placeholder="State" name="state" onChange={onChangeHandler}  value={data.state} />
        </div>
        <div className="multi-fields">
          <input required type="text" placeholder="Zip Code" name="zipcode" onChange={onChangeHandler}  value={data.zipcode}/>
          <input required type="text" placeholder="Country" name="country" onChange={onChangeHandler}  value={data.country}/>
        </div>
        <input required type="text" placeholder="Phone" name="phone" onChange={onChangeHandler}  value={data.phone}/>
      </div>
      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button type="submit">PROCESS TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
