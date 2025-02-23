import { useContext, useState } from "react";
import { CDN_UR } from "../utils/constanst";
import { Link } from "react-router";
import useOnlinestatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const userName = useContext(userContext);
  console.log(userName);
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="flex justify-between bg-gray-300 ">
      <div id="logo-container">
        <img className="w-24" src={CDN_UR}></img>
      </div>
      <div className="nav-bar">
        <ul className="flex p-4 m-4">
          <li className="p-4">{useOnlinestatus ? "✅" : "🔴"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <button onClick={() => console.log(cartItem)}>
              Cart - {cartItem?.length}
            </button>
          </li>
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
          <li className="p-4">{userName.firstName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
