import { format } from "date-fns";
import React from "react";

const BookingModal = ({ tretment, setTretment, selectedData }) => {
  const { name, slots } = tretment; // tretment is appoinment option, just diffrent name
  const date = format(selectedData, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appoinmentData: date,
      tretment: name,
      slot,
      patient: name,
      email,
      phone,
    };
    // console.log(date, slot, name, email, phone);

    // TODO: send data to server
    // and once data is saved then colse the modal
    // and Display success Toast
    console.log(booking);
    setTretment(null);
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
          <h3 className="text-lg font-bold">{name}</h3>
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
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full   border-1 border-accent"
            />
            <input
              required
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
