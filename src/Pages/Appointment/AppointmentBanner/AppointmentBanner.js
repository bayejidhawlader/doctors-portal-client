import React, { useState } from "react";
import chairImg from "../../../assets/images/chair.png";
import appointmentBgImg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedData, setSelectedDate }) => {
  return (
    <header
      style={{
        background: `url(${appointmentBgImg})`,
        backgroundSize: `cover`,
      }}
      className=""
    >
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="Chair"
            className="lg:w-1/2 rounded-lg shadow-2xl ml-20"
            src={chairImg}
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedData}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
