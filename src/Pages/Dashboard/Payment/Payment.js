import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M6wAaGFdVUBtKQefzdG0thgRwiKcJ5s6YDfSpCcnMoO9s9RjF7FveSXmn3pv6Xajr7FhLzZ0JnFgSXTNwgsjJU70006ikesHz"
);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { tretment, price, slot, appoinmentData } = booking;
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl font-normal mb-5">Payment for {tretment}</h2>
      <p>
        Please Pay ${price} for your Appoinment on {appoinmentData}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
