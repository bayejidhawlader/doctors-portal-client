import React from "react";
import appointmentBgImg from "../../../assets/images/appointment.png";

const ContsctUs = () => {
  return (
    <section style={{ background: `url(${appointmentBgImg})` }}>
      <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center mt-8">
            <h3 className="text-secondary text-xl font-semibold">Contact Us</h3>
            <h1 className="text-4xl text-white">Stay connected with us</h1>
          </div>
          <div className="card flex-shrink-0 w-full">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered h-28"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-control mt-4 items-center">
                <button className="btn btn-primary w-1/3 text-center">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContsctUs;
