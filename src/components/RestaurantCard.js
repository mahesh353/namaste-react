import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const restaurant = props.resData.data;
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    restaurant;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-200 rounded-lg hover:bg-gray-400">
      <img className="rounded-lg text-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4">{name}</h3>
      <h4 className="break break-words">{cuisines.join(",")}</h4>
      <h4>Star Ratings : {avgRating}</h4>
      <h4>Delivery Time : {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
