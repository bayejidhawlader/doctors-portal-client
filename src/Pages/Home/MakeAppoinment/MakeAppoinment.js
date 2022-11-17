import React from "react";
import doctorImg from "../../../assets/images/doctor-small.png";
import appointmentBgImg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section style={{ background: `url(${appointmentBgImg})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img
            alt=""
            src={doctorImg}
            className="-mt-36 lg:w-1/2 hidden lg:block rounded-lg"
          />
          <div className="text-white">
            <h3 className="text-secondary text-xl font-semibold my-4">
              Appoinment
            </h3>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
