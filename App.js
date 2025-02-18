import React from "react";
import ReactDOM from "react-dom/client";

//const headingReact = React.createElement("h1", {}, "Hello World for React");
const jsxHeading = <h1>Hello from JSX!</h1>;

const SubHeading = () => <h2>This is Component Composition</h2>;

const FunComponent = () => (
  <div id="header">
    <h1>Hey, I'm a functional Component!</h1>
    <SubHeading />
  </div>
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<FunComponent />);
