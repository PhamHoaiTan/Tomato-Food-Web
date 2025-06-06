import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const List = () => {
  const [list, setList] = useState([]);
  const url = "http://localhost:4000";
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  const removeFoodHandler = async (foodId) => {
    console.log(foodId)
      const response = await axios.post(`${url}/api/food/remove`, {
        id:foodId,
      });
      await fetchList();
      if(response.data.success){
        toast.success(response.data.message);
      }
      else{
        toast.error("Error")
      }
 
  };

  return (
    <div className="list add flex-col">
      <ToastContainer/>
      <p>All Users List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Email</b>
          <b>Date</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className="cursor" onClick={() => removeFoodHandler(item._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
import "./List.css";
export default List;
