import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({id, name, price, description, image }) => {
  const {addToCard ,cartItems, decFormCart, url} = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={url+'/images/'+image} alt="" className="food-item-image"/>
        {!cartItems[id]?
              <img className="add" onClick={()=>addToCard(id)} src={assets.add_icon_white}/>:<div className="food-item-counter">
                <img src={assets.remove_icon_red} alt="" onClick={()=>decFormCart(id)}/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCard(id)} src={assets.add_icon_green}/>
              </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
