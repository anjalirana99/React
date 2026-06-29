import { useEffect } from "react"
import { MenuData } from "../utils/MenuData";

const Menu = ()=>{
    const {name, cuisines, costForTwoMessage, avgRating} = MenuData?.data?.cards[2]?.card?.card?.info
    const list = MenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    
    return (
        <div className="main-container">
            <div className="menu-header">
                <div>
                    <h2>{name}</h2>
                    <h3>{cuisines.join(",")}</h3>
                </div>
                <div>
                    <h2>{avgRating}</h2>
                    <h3>{costForTwoMessage}</h3>
                </div>
            </div>
            {list.map((menu)=>{
                return (
                    <div key={menu.card.info.id} className="menu-card">
                    {menu.card.info.name} - {menu.card.info.price/100}
                </div>
                )
                
            })}
            
        </div>    
    )
}

export default Menu