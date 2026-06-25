import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  //   console.log(props);
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "1",
      name: "Burger King",
      cloudinaryImageId: "https://picsum.photos/200?random=1",
      cuisines: ["Burgers", "Fast Food", "Beverages"],
      avgRating: 4.3,
      costForTwo: "₹400 for two",
      locality: "Connaught Place",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 25,
    },
  },
  {
    info: {
      id: "2",
      name: "Domino's Pizza",
      cloudinaryImageId: "https://picsum.photos/200?random=2",
      cuisines: ["Pizza", "Italian", "Desserts"],
      avgRating: 4.5,
      costForTwo: "₹600 for two",
      locality: "Rajouri Garden",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 30,
    },
  },
  {
    info: {
      id: "3",
      name: "Haldiram's",
      cloudinaryImageId: "https://picsum.photos/200?random=3",
      cuisines: ["North Indian", "South Indian", "Snacks"],
      avgRating: 4.4,
      costForTwo: "₹350 for two",
      locality: "Karol Bagh",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 20,
    },
  },
  {
    info: {
      id: "4",
      name: "KFC",
      cloudinaryImageId: "https://picsum.photos/200?random=4",
      cuisines: ["Chicken", "Fast Food", "Burgers"],
      avgRating: 4.2,
      costForTwo: "₹500 for two",
      locality: "Saket",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "5",
      name: "Subway",
      cloudinaryImageId: "https://picsum.photos/200?random=5",
      cuisines: ["Healthy Food", "Sandwiches", "Salads"],
      avgRating: 4.1,
      costForTwo: "₹450 for two",
      locality: "Lajpat Nagar",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 22,
    },
  },
  {
    info: {
      id: "6",
      name: "Bikanervala",
      cloudinaryImageId: "https://picsum.photos/200?random=6",
      cuisines: ["North Indian", "Sweets", "Snacks"],
      avgRating: 4.6,
      costForTwo: "₹500 for two",
      locality: "Noida Sector 18",
      areaName: "Noida",
    },
    sla: {
      deliveryTime: 27,
    },
  },
  {
    info: {
      id: "7",
      name: "Barbeque Nation",
      cloudinaryImageId: "https://picsum.photos/200?random=7",
      cuisines: ["BBQ", "North Indian", "Chinese"],
      avgRating: 4.7,
      costForTwo: "₹1800 for two",
      locality: "Cyber Hub",
      areaName: "Gurugram",
    },
    sla: {
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "8",
      name: "McDonald's",
      cloudinaryImageId: "https://picsum.photos/200?random=8",
      cuisines: ["Burgers", "Fries", "Beverages"],
      avgRating: 4.2,
      costForTwo: "₹350 for two",
      locality: "Janakpuri",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 18,
    },
  },
  {
    info: {
      id: "9",
      name: "Wow! Momo",
      cloudinaryImageId: "https://picsum.photos/200?random=9",
      cuisines: ["Momos", "Chinese", "Tibetan"],
      avgRating: 4.0,
      costForTwo: "₹300 for two",
      locality: "Rohini",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 24,
    },
  },
  {
    info: {
      id: "10",
      name: "Biryani Blues",
      cloudinaryImageId: "https://picsum.photos/200?random=10",
      cuisines: ["Biryani", "North Indian", "Mughlai"],
      avgRating: 4.5,
      costForTwo: "₹700 for two",
      locality: "Dwarka",
      areaName: "New Delhi",
    },
    sla: {
      deliveryTime: 32,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
