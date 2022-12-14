import React from "react";
import Services from "../Services";
import Visit from "../Visit";
import Banner from "./Banner";
import Information from "./Information";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Visit></Visit>
      <Information></Information>
    </div>
  );
};

export default Home;
