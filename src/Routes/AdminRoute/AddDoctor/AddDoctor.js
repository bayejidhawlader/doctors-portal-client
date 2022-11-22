import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Pages/Shared/Loading/Loading";

const AddDoctor = () => {
  // 01 Use Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 03 Data load from index.js   http://localhost:5000/appoinmentSpecialty
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appoinmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  // 04 Image BB key
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  // 05 Goinga a page when add a Data
  const navigate = useNavigate();

  // 04 isLoading
  if (isLoading) {
    return <Loading></Loading>;
  }

  // 02 handleAddDoctor
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.speciality,
            image: imgData.data.url,
          };

          // save doctor information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => console.log(result));
          toast.success(`${data.name} is Added Successfully`);
          navigate("/dashboard/managedoctors");
        }
      });
  };
  return (
    <div className="w-96 p-7">
      <h2 className="text-2xl font-normal mb-5">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is Required",
            })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("speciality")}
            className="select input-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Please Select a Specialty
            </option>
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image.message}</p>
          )}
        </div>

        <input
          className="btn btn-accent w-full my-2 text-white"
          type="submit"
          value="Add A Doctor"
        />
        {/* {singUpError && <p className="text-red-600">{singUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;
