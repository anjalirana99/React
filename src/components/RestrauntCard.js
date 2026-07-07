import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
const RestrauntCard = (props) => {
  // same as destructuring of object because props is just a object
  const {ResData} = props
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    ResData;
  // or can write directly like const { name, avgRating, cuisines } = props.ResData;
  return (
    <Link className="link" to="/restaurant">
      <div className="restraunt-card w-75 h-95 bg-gray-50 rounded-l p-2 shadow-lg hover:bg-gray-100 my-5">
        <div className="p-2">
            <img className="w-50 h-50 rounded-2xl m-auto" alt="res-img" src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <div className="px-2">
          <h3 className="font-bold">{name}</h3>
          <h4>{avgRating}</h4>
          <h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>
          <h4 className="text-sm text-gray-700">{costForTwo}</h4>
        </div>
      
      </div>
    </Link>
    
  );
};

export default RestrauntCard;
