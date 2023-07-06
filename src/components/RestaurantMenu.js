import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);
 
  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((itemCard) => (
          <li key={itemCard.card.info.id}>
            {itemCard.card.info.name} - {" Rs."}{" "}
            {itemCard.card.info.price / 100 ||
              itemCard.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
