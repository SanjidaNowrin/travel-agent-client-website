import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import useAuth from "./../../hooks/useAuth";

const Service = ({ service }) => {
  const { title, img, desc, _id } = service;
  const { allContext } = useAuth();
  const { user } = allContext;
  const { uid } = user;
  return (
    <div className="mt-5 col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow cardHover card w-100"
        style={{ background: "#e7eef3" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3
            className="mb-3 text-center card-title font-weight-bold"
            style={{ color: "#023c76" }}
          >
            {title}
          </h3>
          <p className="text-center card-text">{desc}</p>
          <br />
          <Link to={`/services/${_id}`}>
            <button className="container details-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Service;
