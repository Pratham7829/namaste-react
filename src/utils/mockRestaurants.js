const mockRestaurants = [
  {
    info: {
      id: "1",
      name: "Burger King",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.4,
      costForTwo: "₹400 for two",
      areaName: "Connaught Place",
      locality: "New Delhi",
    },
    sla: { deliveryTime: 25 },
  },
  {
    info: {
      id: "2",
      name: "Pizza Hut",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
      cuisines: ["Pizza", "Italian"],
      avgRating: 4.3,
      costForTwo: "₹500 for two",
      areaName: "Rajouri Garden",
      locality: "New Delhi",
    },
    sla: { deliveryTime: 30 },
  },
  {
    info: {
      id: "3",
      name: "KFC",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800",
      cuisines: ["Chicken", "Fast Food"],
      avgRating: 4.2,
      costForTwo: "₹550 for two",
      areaName: "Noida",
      locality: "Sector 18",
    },
    sla: { deliveryTime: 28 },
  },
  {
    info: {
      id: "4",
      name: "Domino's Pizza",
      image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b?w=800",
      cuisines: ["Pizza", "Italian"],
      avgRating: 4.5,
      costForTwo: "₹600 for two",
      areaName: "Ghaziabad",
      locality: "Indirapuram",
    },
    sla: { deliveryTime: 24 },
  },
  {
    info: {
      id: "5",
      name: "Subway",
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800",
      cuisines: ["Healthy Food", "Sandwich"],
      avgRating: 4.1,
      costForTwo: "₹450 for two",
      areaName: "Lajpat Nagar",
      locality: "Delhi",
    },
    sla: { deliveryTime: 22 },
  },
  {
    info: {
      id: "6",
      name: "McDonald's",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.3,
      costForTwo: "₹400 for two",
      areaName: "Noida",
      locality: "Sector 62",
    },
    sla: { deliveryTime: 20 },
  },
  {
    info: {
      id: "7",
      name: "Biryani Blues",
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d29a?w=800",
      cuisines: ["Biryani", "North Indian"],
      avgRating: 4.6,
      costForTwo: "₹700 for two",
      areaName: "Karol Bagh",
      locality: "Delhi",
    },
    sla: { deliveryTime: 30 },
  },
  {
    info: {
      id: "8",
      name: "Behrouz Biryani",
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800",
      cuisines: ["Biryani", "Mughlai"],
      avgRating: 4.5,
      costForTwo: "₹800 for two",
      areaName: "Dwarka",
      locality: "Delhi",
    },
    sla: { deliveryTime: 32 },
  },
  {
    info: {
      id: "9",
      name: "Wow! Momo",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
      cuisines: ["Momos", "Chinese"],
      avgRating: 4.2,
      costForTwo: "₹350 for two",
      areaName: "Rohini",
      locality: "Delhi",
    },
    sla: { deliveryTime: 19 },
  },
  {
    info: {
      id: "10",
      name: "Haldiram's",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
      cuisines: ["North Indian", "Snacks"],
      avgRating: 4.4,
      costForTwo: "₹500 for two",
      areaName: "CP",
      locality: "Delhi",
    },
    sla: { deliveryTime: 26 },
  },
  {
    info: {
      id: "11",
      name: "Bikanervala",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
      cuisines: ["Sweets", "North Indian"],
      avgRating: 4.3,
      costForTwo: "₹500 for two",
      areaName: "Noida",
      locality: "Sector 18",
    },
    sla: { deliveryTime: 27 },
  },
  {
    info: {
      id: "12",
      name: "Barbeque Nation",
      image:
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800",
      cuisines: ["BBQ", "Grill"],
      avgRating: 4.7,
      costForTwo: "₹1800 for two",
      areaName: "Cyber Hub",
      locality: "Gurugram",
    },
    sla: { deliveryTime: 35 },
  },
  {
    info: {
      id: "13",
      name: "Chaayos",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
      cuisines: ["Tea", "Snacks"],
      avgRating: 4.5,
      costForTwo: "₹300 for two",
      areaName: "South Ex",
      locality: "Delhi",
    },
    sla: { deliveryTime: 18 },
  },
  {
    info: {
      id: "14",
      name: "Starbucks",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
      cuisines: ["Coffee", "Beverages"],
      avgRating: 4.6,
      costForTwo: "₹700 for two",
      areaName: "Saket",
      locality: "Delhi",
    },
    sla: { deliveryTime: 17 },
  },
  {
    info: {
      id: "15",
      name: "The Belgian Waffle Co.",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800",
      cuisines: ["Desserts", "Waffles"],
      avgRating: 4.8,
      costForTwo: "₹450 for two",
      areaName: "Pitampura",
      locality: "Delhi",
    },
    sla: { deliveryTime: 21 },
  },
];

export default mockRestaurants;
