import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const resData =
    resList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const param = useParams();
  console.log(param);
  const [resInfo, setResInfo] = useState();

  let res = resData.forEach((item) => item);

  // setResInfo(res);
  console.log("Rest", res);

  return (
    <div>
      <h1>A2B</h1>
      <p>Dosa</p>
      <p>Idli</p>
      <p>Appam</p>
    </div>
  );
};

export default RestaurantMenu;
