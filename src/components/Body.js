import RestaurantCard, { WithPromotedLable } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variables - super powerfull react variable -  scope is inside the component
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = WithPromotedLable(RestaurantCard);

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
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection !
      </h1>
    );
  }

  console.log(listOfRestaurants);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurants and update the UI
              let filteredRestaurants = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.data.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center rounded-lg">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              listOfRestaurants = listOfRestaurants.filter((res) => {
                return res.data.avgRating > 4;
              });
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (

          <Link
            to={"/restaurants/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            {restaurant.data.promoted ? 
              <PromotedRestaurantCard resData={restaurant} />
            : 
              <RestaurantCard resData={restaurant} />
            
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
