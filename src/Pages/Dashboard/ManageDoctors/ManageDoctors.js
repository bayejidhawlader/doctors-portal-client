import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = ({ isLoading }) => {
  // 02
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  // 03 Close modal (NO) after open Modal
  const coloseModal = () => {
    setDeletingDoctor(null);
  };

  // 04 successAction={handleDeleteDoctor}
  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} Deleted Successfully`);
        }
      });
  };

  // 01
  const { data: doctors, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl font-normal mb-5">
        Manage Doctors {doctors?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img alt="Doctor" src={doctor.image} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="conformation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConformationModal
          title={`Are you sure want to Delete?`}
          message={`If you Delete ${deletingDoctor.name}. It can not be Un-Done`}
          successAction={handleDeleteDoctor}
          successButtonName="delete"
          modalData={deletingDoctor}
          coloseModal={coloseModal}
        ></ConformationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
