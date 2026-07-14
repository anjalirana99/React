import { useDispatch } from "react-redux"
import { IMG_CDN_URL } from "../utils/constant"
import { addItem } from "../utils/cartSlice"

const MenuItemList = (props)=>{
    const dispatch = useDispatch()
    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }
    const {items}=props
    return(
        <div className="category-itemList mt-5">
        {items.map((item)=>{
            return (
                <div data-testid="food-item" key={item.card.info.id} className="flex justify-between border-b p-2 border-b-gray-300 my-2">
                <div className="itemDesc w-9/12">
                    <div className="font-bold text-gray-900">{item.card.info.name}</div>
                    <div>₹{item.card.info.price/100}</div>
                    <p className="text-sm text-gray-700 mt-2">{item.card.info.description}</p>
                </div>
                <div className="item-img w-2/12">
                    <div><img className="object-cover rounded-xl" src={IMG_CDN_URL + item.card.info.imageId}/></div>
                    <button 
                    onClick={()=>handleAddItem(item)}
                    className="absolute bg-black text-white -mt-5 px-2">ADD +</button>
                </div>
                
                </div>
            )
        }
            
        )}
        </div>
        
    )
}
export default MenuItemList