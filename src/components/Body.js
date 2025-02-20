import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";
import React, { useState } from "react";

const Body = () => {
  const resData =
    resList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [listOfRestaurant, setListOfRestaurant] = React.useState(resData);
  const [searchText, setSearchText] = React.useState("");

  return (
    <div>
      <div className="flex">
        <div className="flex">
          <input
            className="border-2 h-7 mt-5 ml-2 p-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="p-5 cursor-pointer"
            onClick={() => {
              setListOfRestaurant(
                resData.filter((data) =>
                  data.info.name.toLowerCase().includes(searchText)
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-4 border-1 bg-gray-300 p-1"
          onClick={() => {
            setListOfRestaurant(
              listOfRestaurant.filter((res) => res.info.avgRating > 4.6)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div id="body" className="flex flex-wrap">
        {listOfRestaurant.map((data) => (
          <RestroCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
