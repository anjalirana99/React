import { IMG_CDN_URL } from "../utils/constant"

const MenuItemList = (props)=>{
    const {items}=props
    return(
        <div className="category-itemList mt-5">
        {items.map((item)=>{
            return (
                <div key={item.card.info.id} className="flex justify-between border-b p-2 border-b-gray-300 my-2">
                <div className="itemDesc w-9/12">
                    <div className="font-bold text-gray-900">{item.card.info.name}</div>
                    <div>₹{item.card.info.price/100}</div>
                    <p className="text-sm text-gray-700 mt-2">{item.card.info.description}</p>
                </div>
                <div className="item-img w-2/12">
                    <img className="object-cover rounded-xl" src={IMG_CDN_URL + item.card.info.imageId}/>
                </div>
                </div>
            )
        }
            
        )}
        </div>
        
    )
}
export default MenuItemList