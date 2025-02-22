import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";
import userContext from "./utils/userContext";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622",

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    console.log("URL data", response.json());
  } catch (err) {
    console.log(err);
  }
};

// fetchData();

const About = lazy(() => import("./components/About"));
// const [userName, setUserName] = useState("Deepa");

const App = () => {
  const [userName, setUserName] = useState("Deepa");
  console.log("APPUSER", userName);

  return (
    <div id="app">
      <userContext.Provider
        value={{ firstName: userName, secondName: "Susi", setUserName }}
      >
        <Heading />

        <Outlet />
      </userContext.Provider>
    </div>
  );
};

const appRoute = (
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Body />} />
        <Route
          path="/about"
          element={
            // <userContext.Provider
            //   value={{ firstName: "Thangamani", secondName: "Susi" }}
            // >
            <Suspense fallback={<h1>Loadding....</h1>}>
              <AboutClass />
            </Suspense>
            // </userContext.Provider>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(appRoute);
