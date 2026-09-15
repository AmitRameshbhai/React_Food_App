import { resumeToPipeableStream } from "react-dom/server";
import RestroCard from "./restrocard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listofres, setlistofres] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await response.json();

    const restaurantCard = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    );

    const restaurants = (
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    ).filter((res) => res.info);

    console.log(restaurants);
    setlistofres(restaurants);
  };

  // Conditional Renderding
  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofres.filter(
              (res) => res.info.avgRating > 4,
            );
            setlistofres(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofres.map((res) => {
          return <RestroCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
