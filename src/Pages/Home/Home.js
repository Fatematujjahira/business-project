import React from "react";
import Allpage from "../All/Allpage.js";
import Banner from "../Banner/Banner.js";
import Agent from "../agent/Agent.js";
import Contact from "../Contact/Contact.js";
import Propertice from "../Propertise/Propertice.js";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Agent></Agent>
      <Contact></Contact>
    </div>
  );
};

export default Home;
