import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOptions from "./AppoinmentOptions";

const AvaliableAppointments = ({ selectedData }) => {
  // const [appoinmentOptions, SetAppoinmentOptions] = useState([]);
  const [tretment, setTretment] = useState(null);

  // due appoinment after book Appoinment
  const date = format(selectedData, "PP");

  const {
    data: appoinmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/AppoinmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  //Loading Spinner
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <p className="text-xl text-primary font-semibold text-center mb-16">
        Available Appointments on {format(selectedData, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appoinmentOptions.map((option) => (
          <AppoinmentOptions
            key={option._id}
            appoinmentOption={option}
            setTretment={setTretment}
          ></AppoinmentOptions>
        ))}
      </div>
      {tretment && (
        <BookingModal
          key={tretment.id}
          tretment={tretment}
          setTretment={setTretment}
          selectedData={selectedData}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvaliableAppointments;
