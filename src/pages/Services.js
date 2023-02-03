import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch("https://travel-agent-website.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ color: "#237DB2" }} className="container text-center">
        OUR OFFERS
      </h1>
      {detail.length === 0 ? (
        <div className="py-5 my-5 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="row">
          {detail.map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
