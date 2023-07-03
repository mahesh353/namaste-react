import RestaurantCard from "./RestaurantCard";
import Shimmer  from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  //local state variables - super powerfull react variable -  scope is inside the component
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6518328&lng=73.732064&page_type=DESKTOP_WEB_LISTING"
    );
    var json = await data.json();

    //optional chaining in javascript
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  if(listOfRestaurants.length === 0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter((res) => {
              return res.data.avgRating > 4;
            });
            setListOfRestaurants(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
