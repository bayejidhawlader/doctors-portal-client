import React from "react";

const InfoCard = ({ card }) => {
  const { name, describe, bgClass, icon } = card;
  return (
    <div>
      <div
        className={`card lg:card-side bgClass shadow-xl p-5 text-white ${bgClass}`}
      >
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{describe}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
