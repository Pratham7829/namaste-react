import mockMenus from "./mockMenus";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await mockMenus[resId];
    if (!data) {
      setResInfo(undefined);
      return;
    }

    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;
