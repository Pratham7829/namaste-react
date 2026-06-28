import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  if (resInfo === undefined) {
    return (
      <div className="error">
        <h1>404 Restaurant Not Found 😕</h1>
        <p>The restaurant you're looking for doesn't exist.</p>
      </div>
    );
  }

  const { name, cuisines, costForTwo } = resInfo?.info;
  const itemCards = resInfo?.menu;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.price} Rs
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
