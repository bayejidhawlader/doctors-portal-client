import React from "react";

const ConformationModal = ({
  title,
  message,
  coloseModal,
  modalData,
  successAction,
  successButtonName,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="conformation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="conformation-modal"
              className="btn text-white"
            >
              {successButtonName}
            </label>
            <button onClick={coloseModal} className="btn btn-outline">
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationModal;
