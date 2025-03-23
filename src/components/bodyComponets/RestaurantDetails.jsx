import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./Cards";

export default function RestaurantDetails(details) {
  const params = useParams();
  // console.log(params);
  const [items, setItems] = useState([]);
  console.log(params.id);

  const imgBaseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  useEffect(() => {
    fetch(`
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`)
      .then((response) => response.json())
      .then((data) => {
        let foodData =
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards;
        console.log(foodData);
        console.log(data);
        setItems(foodData);
      });
  }, []);

  return (
    <>
      <h1>restaurant Details</h1>

      <div className="flex flex-wrap justify-evenly  items-start gap-10">
        {items.map((item) => (
          <Cards
            key={item?.card?.info?.id}
            imgURL={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
            name={item?.card?.info?.name}
            rating={item?.card?.info?.isVeg ? "VEG" : "NON-VEG"}
            deliveryTime={
              item?.card?.info?.inStock ? "Instock" : "Out of Stock"
            }
            itemID={item?.card?.info?.id}
            description={"FOOD ITEM"}
            button="Add+"
          />
        ))}
      </div>
    </>
  );
}
