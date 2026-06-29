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
      <div className="restraunt-card">
      <img alt="res-img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      </div>
    </Link>
    
  );
};

export default RestrauntCard;
