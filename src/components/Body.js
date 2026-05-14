import RestrauntCard from "./RestrauntCard";
import { RestrauntList } from "../utils/RestrauntListData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          name="Restraunt"
          placeholder="Search your food/Restraunt"
        />
      </div>
      <div className="restraunt-container">
        {/* we must pass the unique key */}
        {RestrauntList.map((restraunt) => (
          <RestrauntCard key={restraunt.id} ResData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
