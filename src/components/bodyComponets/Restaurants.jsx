import Cards from "./Cards";
import { useEffect, useState } from "react";
// import axios from "axios";
import restrauData from "../../assets/restrauData.json";
import { Link } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";

const restaurantBaseURL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=253718&catalog_qa=undefined&submitAction=ENTER";

const baseURL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export default function Restaurants() {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    try {
      fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
        .then((response) => response.json())
        .then((data) => {
          let resData =
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          // console.log(resData);
          setAllRestaurants(resData);
        });
    } catch {
      setAllRestaurants(restrauData);
    }
  }, [restrauData]);

  return (
    <>
      <div>
        <h1 className="font-black mt-4 mb-6 mx-4 text-4xl font-serif inline-block">
          Popular Restaurants in Delhi
        </h1>
        <input
          className=" border-1 text-center w-96 m-3"
          type="text"
          placeholder="SEARCH RESTAURANTS"
        />

        <div className="flex flex-wrap justify-evenly  items-start gap-10">
          {allRestaurants.map((restaurants) => (
            <Link to={`/restaurant/${restaurants.info.id}`}>
              <Cards
                key={restaurants.info.id}
                imgURL={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurants.info.cloudinaryImageId}`}
                name={restaurants.info.name}
                rating={restaurants.info.avgRating}
                deliveryTime={restaurants.info.sla.slaString}
                itemID={restaurants.info.id}
                description={`Popular Cuisines: ${restaurants.info.cuisines.map(
                  (ele) => `|${ele}|`
                )}  Location: ${restaurants.info.areaName}  ${
                  restaurants.info.locality
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
