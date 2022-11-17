import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOptions from "./AppoinmentOptions";

const AvaliableAppointments = ({ selectedData }) => {
  // const [appoinmentOptions, SetAppoinmentOptions] = useState([]);
  const [tretment, setTretment] = useState(null);

  // const { data: appoinmentOptions = [] } = useQuery({
  //   queryKey: ["AppoinmentOptions"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/AppoinmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });

  const { data: appoinmentOptions = [] } = useQuery({
    queryKey: ["appoinmentOptions"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/AppoinmentOptions`);
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/AppoinmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => SetAppoinmentOptions(data));
  // }, []);

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
        ></BookingModal>
      )}
    </section>
  );
};

export default AvaliableAppointments;
