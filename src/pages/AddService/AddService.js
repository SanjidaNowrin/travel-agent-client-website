import React from "react";
import "./AddService.css";
import useAuth from "./../../hooks/useAuth";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1 className="mt-5 text-center text-info">Please Add Events</h1>
      <div className="m-auto mt-5 login-box w-25">
        <div className="border event-box d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="name"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("desc")}
                placeholder="Description"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              {/* <select {...register("EventColor")} className="p-2 m-2 w-100">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
                <option value="black">black</option>
              </select> */}
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
