import { useDispatch, useSelector } from "react-redux"
import MenuItemList from "./MenuItemList"
import { clearCart, removeItem } from "../utils/cartSlice"

const Cart=()=>{
    const items = useSelector((store)=>store.cart.itemList)
    const dispatch = useDispatch()
    if(items.length == 0){
        return <div className="p-10 flex-1 w-8/12 m-auto font-bold  justify-center text-center text-2xl text-gray-400"> Looks Like you didn't add any food.</div>
    }
    return(
        <div className="flex-1 p-5">
            <div className="w-6/12 p-5 flex justify-center m-auto gap-5">
                    <button onClick={()=>dispatch(clearCart())} className="bg-red-100 rounded-md py-1 px-2 shadow-xl hover:cursor-pointer">Clear Cart</button>
                    <button onClick={()=>dispatch(removeItem())} className="bg-green-100 rounded-md py-1 px-2 shadow-xl hover:cursor-pointer">Remove Item</button>
            </div>
            <div className="category-div w-6/12 m-auto my-2 bg-blue-50 shadow-xl p-3 cursor-pointer">
                <MenuItemList items={items}/>
            </div>
        </div>
    )
}
export default Cart