import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./components/Add/Add";
import List from "./components/List/List";
import Orders from "./components/Orders/Orders";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <hr />
      <div className="app-content">
      <Sidebar />
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
