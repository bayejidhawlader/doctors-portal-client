import React from "react";
import ExDental from "../ExDental/ExDental";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testemonials from "../Testemonial/Testemonials";
import Banner from "./Banner/Banner";
import ContsctUs from "../ContsctUs/ContsctUs";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <ExDental></ExDental>
      <MakeAppoinment></MakeAppoinment>
      <Testemonials></Testemonials>
      <ContsctUs></ContsctUs>
    </div>
  );
};

export default Home;
