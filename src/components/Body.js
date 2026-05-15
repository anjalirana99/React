import RestrauntCard from "./RestrauntCard";
import { RestrauntList } from "../utils/RestrauntListData";
import { useState } from "react";

const Body = () => {
  const [resList, setList] = useState(RestrauntList);
  console.log(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          name="Restraunt"
          placeholder="Search your food/Restraunt"
        />
        <button
          className="filter-btn"
          onClick={(e) => {
            const newresList = resList.filter(
              (restraunt) => restraunt.avgRating >= 4.5,
            );
            setList(newresList);
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
