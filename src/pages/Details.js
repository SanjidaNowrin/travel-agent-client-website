import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { img, desc, title } = service;
  const { allContext } = useAuth();
  const { user } = allContext;
  useEffect(() => {
    fetch(`https://travel-agent-website.onrender.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data };
    newData.status = "pending";
    newData.title = title;
    newData.desc = desc;
    newData.img = img;

    console.log(newData);
    fetch("https://travel-agent-website.onrender.com/course/add", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added.");
          reset();
        } else {
          alert("Something is wrong.....");
        }
      });
  };

  return (
    <div>
      <div>
        <h1 className="mt-5 text-center " style={{ color: "#237DB2" }}>
          Please confirm your booking
        </h1>
        <div className="m-auto mt-5 login-box w-50">
          <div className="p-5 mb-5 border border-0 rounded shadow event-box d-flex justify-content-center align-items-center bg-body">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="name"
                  defaultValue={user.displayName}
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("title")}
                  placeholder="Booking Title"
                  defaultValue={title}
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("img")}
                  placeholder="img"
                  defaultValue={img}
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("desc")}
                  placeholder="desc"
                  defaultValue={desc}
                  className="p-2 m-2 w-100 h-100"
                />

                <input
                  {...register("booking_id")}
                  defaultValue={id}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("email")}
                  defaultValue={user.email}
                  type="email"
                  className="p-2 m-2 w-100"
                />

                <br />
                <textarea {...register("address")}></textarea>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Confirm"
                  className="mt-3 text-white btn w-25"
                  style={{ backgroundColor: "#237DB2" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
