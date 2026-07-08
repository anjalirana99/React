import RestrauntCard, { CardWithLabel } from "./RestrauntCard";
import { RestrauntList } from "../utils/RestrauntListData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [originalList, setOriginal] = useState([]);
  const [resList, setList] = useState([]);
  const [searchtext , setSearchText] =useState("")
  const RestrauntCardWithLabel = CardWithLabel(RestrauntCard);//higher order component will take a component and return a component
  const{loggedinUser} = useContext(UserContext)
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData =async ()=>{
    let data = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    let res = await data.json();
    let finallist = res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setList(finallist)
    setOriginal(finallist)

  }

  const searchFilter = (e) => {
      let searchList = originalList.filter((restraunt) => {
        return restraunt.info.name
          .toLowerCase()
          .includes(searchtext.toLowerCase()); // must use return if {} in arrow function
      });
      setList(searchList);
    
  };
  const topRateFilter = () => {
    const newresList = originalList.filter(
      (restraunt) => restraunt.info.avgRating >= 4.5,
    );
    setList(newresList);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus == false){
    return <h1>OOPS!! You are Offline.</h1>
  }
  if(resList.length ===0){
    return  <Shimmer />
  }
  return (
    <div className="main-container flex-1 p-5">
      <div className="search-filter-container flex p-2 items-center m-auto gap-20 justify-center">
        <div className="search-container flex gap-2">
           <input
              className="border-2 border-gray-300 p-1"
              type="text"
              name="Restraunt"
              value={searchtext}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="bg-gray-200 py-1 px-3 rounded-xl cursor-pointer hover:bg-gray-300 shadow-md"
            onClick={searchFilter}>Search</button>
        </div>
        
        <div>
            <button
          className="filter-btn bg-blue-100 py-1 px-3 rounded-xl cursor-pointer hover:bg-blue-200 shadow-md"
          onClick={() => {
            topRateFilter();
          }}>
          Top Rated Restaurants
        </button>
        </div>
        <div className="shadow-md bg-green-100 px-3">
          {loggedinUser}
        </div>
        
      </div>
      <div className="restraunt-container flex flex-wrap p-4 justify-around">
        {/* we must pass the unique key */}
        {resList.map((restraunt) => (
           
            restraunt?.info?.aggregatedDiscountInfoV3?.header? 
            <RestrauntCardWithLabel key={restraunt.info.id} ResData={restraunt.info} />
            :
            <RestrauntCard key={restraunt.info.id} ResData={restraunt.info} />
          
          
        ))}
      </div>
    </div>
  );
};

export default Body;

/***** 

 HERE AS WE ARE FILTERING FROM RESLIS ONLY ONCE TOP RATED CLICK RESLIS IS FILTERED , NOW SEARCHING WILL SEARCH ONLY IN ALREADY FILTERED LIST 


now resList is already filtered
React has no way to restore original data
✔ Correct idea

You must ALWAYS keep:

Original full list (unchanged)
Filtered list (for UI)
✔ Solution 1 (BEST PRACTICE)
const originalList = RestrauntList;
const [resList, setList] = useState(originalList);

to fix this making filter independently on original data we using  originallist , now if apply top rated it will filter from orignal data , if serach it will serach from original data  

*/
