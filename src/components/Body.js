import RestrauntCard from "./RestrauntCard";
import { RestrauntList } from "../utils/RestrauntListData";
import { useState } from "react";

const Body = () => {
  const originalList = RestrauntList;
  const [resList, setList] = useState(RestrauntList);
  let Timeout;

  const searchFilter = (e) => {
    let searchtext = e.target.value;
    if (searchtext === "") {
      setList(originalList); // reset full list
    } else {
      let searchList = originalList.filter((restraunt) => {
        return restraunt.name
          .toLowerCase()
          .startsWith(searchtext.toLowerCase()); // must use return if {} in arrow function
      });
      setList(searchList);
    }
  };
  const topRateFilter = () => {
    const newresList = originalList.filter(
      (restraunt) => restraunt.avgRating >= 4.5,
    );
    setList(newresList);
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          name="Restraunt"
          placeholder="Search your food/Restraunt"
          onKeyUp={(e) => {
            searchFilter(e);
          }}
        />
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
          <RestrauntCard key={restraunt.id} ResData={restraunt} />
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
