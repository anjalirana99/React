import RestrauntCard from "./RestrauntCard";
import { RestrauntList } from "../utils/RestrauntListData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalList, setOriginal] = useState([]);
  const [resList, setList] = useState([]);
  const [searchtext , setSearchText] =useState("")
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData =async ()=>{
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
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
  if(resList.length ===0){
    return  <Shimmer />
  }
  return (
    <div className="body">
      <div className="search-filter-container">
        <div className="search-container">
           <input
              type="text"
              name="Restraunt"
              value={searchtext}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
            onClick={searchFilter}>Search</button>
        </div>
       
        <button
          className="filter-btn"
          onClick={() => {
            topRateFilter();
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restraunt-container">
        {/* we must pass the unique key */}
        {resList.map((restraunt) => (
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
