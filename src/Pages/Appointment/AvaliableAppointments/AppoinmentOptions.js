import React from "react";

const AppoinmentOptions = ({ appoinmentOption, setTretment }) => {
  const { name, slots } = appoinmentOption;
  return (
    <div className="text-center">
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-xl text-primary font-semibold">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Avaliable
          </p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTretment(appoinmentOption)}
              htmlFor="booking-modal"
              className="btn text-white btn-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOptions;
