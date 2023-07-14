import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);

  const [showItemIndex, setShowItemIndex] = useState(0);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(
    "cards",
    restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards
  );

  const categories =
    restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {categories.map((category,index) => {
        return <RestaurantCategory 
        data={category?.card?.card} 
        key={category?.card?.card.title}
        showItems={index === showItemIndex}
        setShowItemIndex = {()=> 
          
          showItemIndex==index ? setShowItemIndex(null) : setShowItemIndex(index)}
        />;
      })}
    </div>
  );
};

export default RestaurantMenu;
