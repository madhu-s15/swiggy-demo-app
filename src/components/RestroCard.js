import { IMG_URL } from "../utils/constanst";

const RestroCard = (props) => {
  const data = props.resData.info;
  const { avgRating, cloudinaryImageId, cuisines, name, costForTwo, id, sla } =
    data;
  const imgUrl = IMG_URL;

  return (
    <div id="restroCard" className="m-4 bg-gray-100 p-4 w-60 hover:border-1">
      <div id="restroImg" className="w-24">
        <img src={imgUrl + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h3>{cuisines.join(" , ")}</h3>
      <h2>{avgRating}</h2>
      <h2>{costForTwo}</h2>
    </div>
  );
};

export default RestroCard;
