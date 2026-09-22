import RestroCard from "./restrocard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listofres, setlistofres] = useState([]); // what's displayed
  const [allRestaurants, setAllRestaurants] = useState([]); // untouched master copy
  const [searchText, setsearchText] = useState("");

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
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0,
    );

    const restaurants = (
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    ).filter((res) => res.info);

    console.log(restaurants);
    setlistofres(restaurants);
    setAllRestaurants(restaurants); // save the untouched master copy
  };

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredreslist = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setlistofres(filteredreslist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = allRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
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
