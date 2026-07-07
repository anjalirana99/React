import { useState } from "react"
import MenuItemList from "./MenuItemList"

const MenuCategory = (props) =>{
    const{data} = props
    const[show,setShow] = useState(false)  //Menucaterofy is uncontrolled component parent is not keepign control of showing/expanding and collapsing this accordian only it is keeping eye on itself
    const handleClick=()=>{
        setShow(!show)
    }
    return(
        <div className="category-div w-6/12 m-auto my-2 bg-blue-50 shadow-xl p-3 cursor-pointer">
            {/* Category Header */}
            <div className="category-header flex justify-between" onClick={handleClick}>
                <span className="font-semibold text-md">{data?.title} [{data?.itemCards.length}]</span>
                <span>⬇</span>
            </div>
            {/* CategoryItems */}
            {show &&  <MenuItemList items={data?.itemCards}/>}
           
        </div>
        
    )
}
export default MenuCategory