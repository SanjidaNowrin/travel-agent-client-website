import React from "react";
import Bg from "./../../assets/images/bg.png";

import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mb-5">
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="py-5 my-5 text-center">
              <h1 className="my-4 text-dark fs-1 fw-bold">
                Great tours Now Discounted!
              </h1>
              <h5 className="mb-5 text-dark fw-bold">
                GET YOUR suitable tour package!
              </h5>
              <NavLink
                to="/guiders"
                className="px-4 py-2 border-0 rounded-pill btn btn-primary fs-5"
                style={{ backgroundColor: "#237DB2" }}
              >
                Our Guiders
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
