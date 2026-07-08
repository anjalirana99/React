import { useState } from "react"
import MenuItemList from "./MenuItemList"

const MenuCategory = (props) =>{
    const{data,index,showIndex,setIndex} = props
    // const[show,setShow] = useState(false)  //Menucaterofy is now controlled component parent is keepign control of showing/expanding and collapsing this accordian
    const handleClick=()=>{
        setIndex()   //lifting the state up  now showIndex is state of parent shared by al catergory accordion
    }
    return(
        <div className="category-div w-6/12 m-auto my-2 bg-blue-50 shadow-xl p-3 cursor-pointer">
            {/* Category Header */}
            <div className="category-header flex justify-between" onClick={handleClick}>
                <span className="font-semibold text-md">{data?.title} [{data?.itemCards.length}]</span>
                <span>⬇</span>
            </div>
            {/* CategoryItems */}
            {showIndex==index &&  <MenuItemList items={data?.itemCards}/>}
           
        </div>
        
    )
}
export default MenuCategory