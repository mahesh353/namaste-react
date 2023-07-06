import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(MENU_API + restaurantId);
    let json = await data.json();
    setRestaurantInfo(json.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
