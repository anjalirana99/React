import { useEffect } from "react"
import { MenuData } from "../utils/MenuData";
import { IMG_CDN_URL } from "../utils/constant";
import MenuCategory from "./MenuCategory";

const Menu = ()=>{
    const {name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId} = MenuData?.data?.cards[2]?.card?.card?.info
    const list = MenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    const menuList = MenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x)=>{
        return x?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

     }).map(x=>x?.card?.card)
    
    return (
        <div className="main-container flex-1">
            <div className="menu-header bg-blue-100 py-5 px-20 shadow-lg flex items-center gap-10">
                <div className="text-gray-700">    
                    <h2 className="font-bold text-black text-xl">{name}</h2>
                    <h3 >{cuisines.join(",")}</h3>
                    <h2>{avgRating}</h2>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <div className="p-2 w-8/12">
                        <img className="rounded-2xl m-auto h-70 object-cover w-full" alt="res-img" src={IMG_CDN_URL + cloudinaryImageId} />
                </div>    
            </div>
            <div className="menu-body p-5">
                {menuList.map((menu)=>{
                    return (
                        <MenuCategory key={menu?.categoryId} data={menu}/>  
                    )  
                })}
            </div>
            
            
        </div>    
    )
}

export default Menu