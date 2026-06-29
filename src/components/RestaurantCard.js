import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //   console.log(props);
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, image } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-50 rounded-xl hover:bg-gray-200">
      <img
        className="res-logo w-[200px] h-[130px] rounded-xl"
        alt="res-logo"
        src={image}
      />
      <h3 className="font-bold py-1 text-lg text-pink-300">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRating} stars</h4>
      <h4 className="text-sm italic">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
