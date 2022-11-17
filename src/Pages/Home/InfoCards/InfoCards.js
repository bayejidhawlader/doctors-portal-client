import React from "react";
import clockIcon from "../../../assets/icons/clock.svg";
import mapIcon from "../../../assets/icons/marker.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      describe: " Open 9am to 5pm Everydat",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      icon: clockIcon,
    },
    {
      id: 2,
      name: "location",
      describe: "Brooklyn, NY 10036, United States",
      bgClass: "bg-accent",
      icon: mapIcon,
    },
    {
      id: 1,
      name: "Contact us now",
      describe: "+000 123 456789",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      icon: phoneIcon,
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
