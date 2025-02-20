import { useState } from "react";
import { CDN_UR } from "../utils/constanst";
import { Link } from "react-router";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="flex justify-between bg-gray-300 ">
      <div id="logo-container">
        <img className="w-24" src={CDN_UR}></img>
      </div>
      <div className="nav-bar">
        <ul className="flex p-4 m-4">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">Cart</li>
          <li>
            <button
              className="bg-amber-900 m-2 p-2"
              onClick={() =>
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login")
              }
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
