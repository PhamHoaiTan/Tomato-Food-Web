import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable selection of dishes, each crafted with the finest ingredients to satisfy every palate — from comforting classics to bold, innovative flavors.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name);}} key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
