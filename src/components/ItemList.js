import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
              key={item.card.info.id}
            >
              <div className="9/12">
                <div className="p-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    ₹-
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : tem.card.info.defaultPrice / 10}
                  </span>
                </div>

                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +{" "}
                  </button>
                </div>
                <img src={CDN_URL + item.card.info.imageId} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
