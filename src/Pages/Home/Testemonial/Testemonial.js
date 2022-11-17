import React from "react";

const Testemonial = ({ testemonial }) => {
  const { name, review, location, img } = testemonial;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review}</p>

          <div className="flex items-center mt-6">
            <div className="avatar mr-6">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="" src={img} />
              </div>
            </div>
            <div>
              <h5>{name}</h5>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testemonial;
