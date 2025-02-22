import { useContext } from "react";
import userContext from "../utils/userContext";

const About = () => {
  const { firstName: a, secondName: bc } = useContext(userContext);
  console.log(a);
  console.log(bc);
  return (
    <div>
      <h1>About US</h1>
      <h3>This is a food ordering app. Founded - 2025</h3>
    </div>
  );
};

export default About;
