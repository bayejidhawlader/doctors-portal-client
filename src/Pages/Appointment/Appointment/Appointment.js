import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvaliableAppointments from "../AvaliableAppointments/AvaliableAppointments";

const Appointment = () => {
  const [selectedData, setSelectedDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selectedData={selectedData}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvaliableAppointments
        selectedData={selectedData}
        setSelectedDate={setSelectedDate}
      ></AvaliableAppointments>
    </div>
  );
};

export default Appointment;
