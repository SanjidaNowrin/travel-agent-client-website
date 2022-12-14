import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Car.css";
import { useForm } from "react-hook-form";

const Car = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://infinite-reaches-98033.herokuapp.com/car", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Sent Successfully");
  };
  return (
    <div>
      <NavigationBar></NavigationBar>

      <div className="carBody">
        <div className="container">
          <div className="book">
            <div className="description">
              <h1>
                <strong>Book</strong> your Ride
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="quote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <ul>
                <li>Super reliable service</li>
                <li>24/7 customer srvice</li>
                <li>GPS tracking and help</li>
                <li>Wide range vehicle</li>
              </ul>
            </div>
            <div className="form w-50">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inpbox full">
                  <h1>
                    <i class="fas fa-car"></i>
                    <span className="flaticon-car"></span>
                  </h1>
                  <select id="cars" name="cars" {...register("select vehicle")}>
                    <option value="">Select Vehicle</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="inpbox">
                  <i class="fas fa-globe-asia"></i>
                  <span className="flaticon-globe"></span>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    {...register("pickup location")}
                  />
                </div>
                <div className="inpbox">
                  <i class="fas fa-calendar-alt"></i>
                  <span className="flaticon-calendar"></span>
                  <input type="date" placeholder="Pickup Date" />
                </div>
                <div className="inpbox">
                  <i class="fas fa-map-marker-alt"></i>
                  <span className="flaticon-location"></span>
                  <input
                    type="text"
                    placeholder="Drop Location"
                    {...register("drop location")}
                  />
                </div>
                <div className="inpbox">
                  <i class="fas fa-calendar-alt"></i>
                  <span className="flaticon-calendar"></span>
                  <input type="date" placeholder="Drop Date" />
                </div>
                <div className="inpbox">
                  <i class="fas fa-user-circle"></i>
                  <span className="flaticon-user"></span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("full name")}
                  />
                </div>
                <div className="inpbox">
                  <i class="fas fa-envelope-open-text"></i>
                  <span className="flaticon-email"></span>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                </div>
                <div className="inpbox full">
                  <div className="inrbox" {...register("package")}>
                    <span className="flaticon-taxi"> Regular</span>

                    <input type="radio" name="plan" />

                    <h2>$50</h2>
                    <span>1 Passenger</span>
                  </div>
                  <div className="inrbox" {...register("package")}>
                    <span className="flaticon-taxi"> Pro</span>

                    <input type="radio" name="plan" />

                    <h2>$120</h2>
                    <span>2 Passenger</span>
                  </div>
                  <div className="inrbox" {...register("package")}>
                    <span className="flaticon-taxi"> Advance</span>

                    <input type="radio" name="plan" />

                    <h2>$180</h2>
                    <span>4 Passenger</span>
                  </div>
                </div>
                <button className="subt">Submit</button>
              </form>
              <button className="rst mt-3" onClick={() => reset()}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Car;
