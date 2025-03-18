import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import restrauData from "../../assets/restrauData.json";

const baseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export default function Restaurants() {
 
  const [allRestaurants, setAllRestaurants] = useState([]);
  console.log(restrauData);
  useEffect(() => {
    setAllRestaurants(restrauData);
  }, [restrauData]);

  return (
    <>
      <p>this the restaurants section inside the main body part </p>
      <div className="flex flex-wrap">
        {/* <Cards
          imgURL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/917b4cef-2f3a-4896-99b9-340187657d40_397778.jpg"
          name="chinese WOK"
          rating="this is rating:4.5"
          deliveryTime="this is delivery time : 20-30 mins"
          description="this is description: and this description changes according to the component rendered"
        /> */}
        {allRestaurants.map((restaurants) => (
          <Cards
            key={restaurants.info.id}
            imgURL={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurants.info.cloudinaryImageId}`}
            name={restaurants.info.name}
            rating={restaurants.info.avgRating}
            deliveryTime={restaurants.info.sla.slaString}
            description={`Popular Cuisines:${restaurants.info.cuisines}  Location:${restaurants.info.areaName}  ${restaurants.info.locality}`}
          />
        ))}
      </div>
    </>
  );
}
