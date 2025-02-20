import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
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

fetchData();

const App = () => {
  return (
    <div id="app">
      <Heading />
      <Outlet />
    </div>
  );
};

const appRoute = (
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(appRoute);
