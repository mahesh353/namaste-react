import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const restaurant = props.resData.data;
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    restaurant;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>Star Ratings : {avgRating}</h4>
      <h4>Delivery Time : {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
