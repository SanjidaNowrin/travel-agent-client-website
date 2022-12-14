import React from "react";
import banner from "./../../assets/images/bgn-quote-end.jpg";
const Information = () => {
  return (
    <div className="container">
      <div className="m-0 mb-5 row align-items-center gy-5 gx-5">
        <div className="mt-0 col-md-6">
          <img
            src={banner}
            alt=""
            className="img-fluid"
            style={{ height: "400px" }}
          />
        </div>
        <div className="p-5 mt-0 col-md-6">
          <h1 style={{ color: "#237DB2" }}>Welcome To Travelicious</h1>
          <p>
            We offer a wide-range of tour services at the minimum cost.You will
            be provided with a amazing plan prior to the start of any tour
            services.To make an booking or learn more about the services
            available at the Travelicious tour planner please call on.We offer
            the entire range of services and procedures.
          </p>
          <br />
          <p>
            <i
              className="pe-2 fas fa-plane-departure"
              style={{ color: "#237DB2" }}
            ></i>
            Great Team
          </p>
          <p>
            <i
              className="pe-2 fas fa-plane-departure "
              style={{ color: "#237DB2" }}
            ></i>
            Frequent Tours.
          </p>
          <p>
            <i
              className="pe-2 fas fa-plane-departure"
              style={{ color: "#237DB2" }}
            ></i>
            See World Wonders.
          </p>
          <p>
            <i
              className="pe-2 fas fa-plane-departure"
              style={{ color: "#237DB2" }}
            ></i>
            Awesome Locations.
          </p>
          <p>
            <i
              className="pe-2 fas fa-plane-departure"
              style={{ color: "#237DB2" }}
            ></i>
            Enjoy the Work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
