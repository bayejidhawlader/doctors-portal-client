import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testemonial from "./Testemonial";

const Testemonials = () => {
  const testemonialData = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Jonathan Hollender",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "New York",
      img: people2,
    },
    {
      _id: 3,
      name: "Bob Kelin",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Wachintong DC",
      img: people3,
    },
  ];
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-secondary text-xl font-bold my-4">Testimonial</h3>
          <h1 className="text-4xl font-semibold">What Our Patients Says</h1>
        </div>
        <figure>
          <img className="lg:w-48 w-24" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testemonialData.map((testemonial) => (
          <Testemonial
            key={testemonial._id}
            testemonial={testemonial}
          ></Testemonial>
        ))}
      </div>
    </section>
  );
};

export default Testemonials;
