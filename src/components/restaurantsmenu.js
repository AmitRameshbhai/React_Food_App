import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Restaurantmenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9716&lng=77.5946&restaurantId=154894",
      );

      console.log("Fetch completed");
      console.log("Status:", data.status);
      console.log("OK:", data.ok);

      const text = await data.text();

      console.log("Response:", text);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default Restaurantmenu;
