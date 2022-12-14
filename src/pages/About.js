import React from "react";
import about from "./../assets/images/destination-sydney-04.jpg";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="m-0 mt-4 mb-5 row align-items-center gy-5 gx-5">
          <div className="col-md-6">
            <img src={about} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 style={{ color: "#237DB2" }}>Travelicious Story</h1>
            <p className="mt-4">
              Enthusiastically mesh long-term high-impact infrastructures
              vis-a-vis efficient customer service. Professionally fashion
              wireless leadership rather than prospective experiences. Quickly
              aggregate B2B users and worldwide potentialities. Progressively
              plagiarize resource-leveling e-commerce through resource-leveling
              core competencies. Dramatically mesh low-risk high-yield
              alignments before transparent e-tailers. Appropriately empower
              dynamic leadership skills after business portals. Globally
              myocardinate interactive supply chains with distinctive quality
              vectors. Globally revolutionize global sources through
              interoperable services. Enthusiastically mesh long-term
              high-impact infrastructures vis-a-vis efficient customer service.
              Professionally fashion wireless leadership rather than prospective
              experiences. Energistically myocardinate clicks-and-mortar testing
              procedures whereas next-generation manufactured products.
            </p>
          </div>
        </div>

        {/* advantages section*/}
        <h1 style={{ color: "#237DB2" }} className="mt-5 text-center">
          Your world,
          <span style={{ fontWeight: "bold", color: "black" }}> your way</span>
        </h1>
        <div className="m-0 mt-4 mb-5 row align-items-center gy-5 gx-5">
          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div
                className=" card-body"
                style={{ backgroundColor: "#e7eef3" }}
              >
                <h5 className="card-title">
                  <i
                    className=" fas fa-monument fa-3x"
                    style={{ color: "#237DB2" }}
                  ></i>
                </h5>

                <p className="mt-4">Great Historic </p>
                <h3 className="mt-0 mb-4 card-text">Monuments</h3>
              </div>
            </div>
          </div>

          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div
                className="card-body "
                style={{ backgroundColor: "#e7eef3" }}
              >
                <h5 className="card-title">
                  <i
                    className="fas fa-parachute-box fa-3x"
                    style={{ color: "#237DB2" }}
                  ></i>
                </h5>
                <p className="mt-4">EXCITING BALLON</p>
                <h3 className="mt-0 mb-4 card-text">Flying</h3>
              </div>
            </div>
          </div>

          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div className="card-body" style={{ backgroundColor: "#e7eef3" }}>
                <h5 className="card-title">
                  <i
                    className="fas fa-hiking fa-3x"
                    style={{ color: "#237DB2" }}
                  ></i>
                </h5>
                <p className="mt-4">ONE WITH NATURE</p>
                <h3 className="mt-0 mb-4 card-text">Hiking</h3>
              </div>
            </div>
          </div>

          <div className="text-center col-md-6 col-lg-3 col-sm-12">
            <div className="mb-5 border-0 card" style={{ width: "18rem" }}>
              <div className="card-body" style={{ backgroundColor: "#e7eef3" }}>
                <h5 className="card-title">
                  <i
                    className="fas fa-mountain fa-3x"
                    style={{ color: "#237DB2" }}
                  ></i>
                </h5>
                <p className="mt-4">SKING AND SNOW</p>
                <h3 className="mt-0 mb-4 card-text">Mountains</h3>
              </div>
            </div>
          </div>
        </div>
        {/* success section*/}
        <h1 style={{ color: "#237DB2" }} className="mt-5 text-center">
          The Massive Success of Travelicious
        </h1>
        <div className="mt-5 mb-5 row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="border-0 card h-100 ">
              <div className="card-body">
                <i
                  className="mb-4 text-center fas fa-users fa-3x"
                  style={{ color: "#237DB2" }}
                ></i>
                <h4 className="card-title">Talented Guiders Team</h4>
                <p className="card-text">
                  Proactively envisioned multimedia based expertise and
                  cross-media growth strategies.Uniquely matrix economically
                  sound value.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0 card h-100 ">
              <div className="card-body">
                <i
                  className="mb-4 text-center fas fa-people-carry fa-3x"
                  style={{ color: "#237DB2" }}
                ></i>
                <h4 className="card-title">Tourist Satisfaction</h4>
                <p className="card-text">
                  A measure of how tourism products and services supplied by a
                  company of the tourism system meet or surpass expectation of
                  tourist.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0 card h-100 ">
              <div className="card-body">
                <i
                  className="mb-4 text-center fas fa-life-ring fa-3x"
                  style={{ color: "#237DB2" }}
                ></i>
                <h4 className="card-title">24/7 Support</h4>
                <p className="card-text">
                  Customer support is a range of customer services to assist
                  customers in making cost effective and correct use of a tour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
