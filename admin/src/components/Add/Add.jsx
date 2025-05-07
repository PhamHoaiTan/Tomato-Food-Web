import React, { useState } from "react";
import "./Add.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    console.log(data);
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData)

    if(response.data.success){
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }
  return (
    <div className="add">
      <ToastContainer/>
      <form action="" className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Update Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            name="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Description</p>
          <textarea
            name="description"
            rows={6}
            placeholder="Write here"
            onChange={onChangeHandler}
            value={data.description}
          />
        </div>
        <div className="add-category-price flex-col">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" onChange={onChangeHandler} id="">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure-Veg">Pure Veg</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Price</p>
            <input
              type="number"
              name="price"
              placeholder="20$"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>
        <button className="add-btn" onClick={onSubmitHandler}>
          Add
        </button>
      </form>
    </div>
  );
};
import "./Add.css";
import { assets } from "../../assets/assets";
export default Add;
