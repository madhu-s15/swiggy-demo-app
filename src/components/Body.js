import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const resData = resList[0].card.card.gridElements.infoWithStyle.restaurants;
  return (
    <div id="body" className="flex flex-wrap">
      {resData.map((data) => (
        <RestroCard resData={data} />
      ))}
    </div>
  );
};

export default Body;
