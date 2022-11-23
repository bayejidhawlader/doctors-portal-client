import { data } from "autoprefixer";
import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvicer";

const BookingModal = ({ tretment, setTretment, selectedData, refetch }) => {
  // tretment is just another name of appoinmentOptions with name
  const { name: tretmentName, slots, price } = tretment;
  const date = format(selectedData, "PP");

  // Show email to Appoinment Modal Input Box
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appoinmentData: date,
      tretment: tretmentName,
      slot,
      patient: name,
      price,
      email,
      phone,
    };
    // console.log(date, slot, name, email, phone);

    // TODO: send data to server
    // and once data is saved then colse the modal
    // and Display success Toast
    // 04 Appoinment Modal sumbit mongodb database received index.js => server
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTretment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{tretmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-6 mt-6"
          >
            <input
              value={date}
              disabled
              type="text"
              placeholder="Type here"
              className="input w-full  border-1 border-accent"
            />
            <select name="slot" className="select select-bordered w-full">
              <option>Select your Appoinment Time</option>
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}{" "}
                </option>
              ))}
            </select>
            <input
              required
              disabled
              defaultValue={user?.displayName}
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full   border-1 border-accent"
            />
            <input
              required
              disabled
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full   border-1 border-accent"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full   border-1 border-accent"
            />
            <input
              type="Submit"
              value="Submit"
              className="w-full btn btn-accent text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
