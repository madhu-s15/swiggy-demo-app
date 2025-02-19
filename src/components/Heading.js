import { CDN_UR } from "../utils/constanst";

const Heading = (...props) => {
  console.log(...props);
  return (
    <div className="flex justify-between bg-gray-300 ">
      <div id="logo-container">
        <img className="w-24" src={CDN_UR}></img>
      </div>
      <div className="nav-bar">
        <ul className="flex p-4 m-4">
          <li className="p-4">Home</li>
          <li className="p-4">About Us</li>
          <li className="p-4">Contact Us</li>
          <li className="p-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
