import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Bus.css";

const Bus = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://infinite-reaches-98033.herokuapp.com/bus", {
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

      <div id="booking2" class="section">
        <div class="section-center">
          <div class="container">
            <div class="row">
              <div class="booking-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-group d-flex p-2 ">
                    <div class="form-checkbox">
                      <select
                        className="m-4 p-2"
                        id="way"
                        name="way"
                        {...register("select time")}
                      >
                        <option value="">SELECT TIME</option>
                        <option value="07:00 AM">07:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                      </select>
                    </div>
                    <div class="form-checkbox">
                      <select
                        className="m-4 p-2"
                        id="way"
                        name="way"
                        {...register("select from city")}
                      >
                        <option value="">FROM CITY</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Feni">Feni</option>
                      </select>
                    </div>
                    <div class="form-checkbox">
                      <select
                        className="m-4 p-2"
                        id="way"
                        name="way"
                        {...register("select to city")}
                      >
                        <option value="">TO CITY</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Feni">Feni</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">Select Date</span>
                        <input
                          class="form-control"
                          type="date"
                          required
                          {...register("from date")}
                        />
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">Number of Tickets</span>

                        <select
                          class="form-control"
                          {...register("no of tickets")}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <span class="form-label">Seat Number</span>

                        <div className="abcd d-flex text-white">
                          <div className="a">
                            <label class="container">
                              A1
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              A2
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              A3
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              A4
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </div>

                          <div className="b">
                            <label class="container">
                              B1
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              B2
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              B3
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              B4
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </div>

                          <div className="c">
                            <label class="container">
                              C1
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              C2
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              C3
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              C4
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </div>

                          <div className="d">
                            <label class="container">
                              D1
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              D2
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              D3
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="container">
                              D4
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>

                        {/* <select class="form-control" {...register("children")}>
                          <option value="A1">A1</option>
                          <option value="A2">A2</option>
                          <option value="B1">B1</option>
                          <option value="B2">B2</option>
                        </select> */}
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <span class="form-label">Bus Facility</span>
                        <select
                          class="form-control"
                          {...register("bus facility")}
                        >
                          <option value="ac">AC</option>
                          <option value="non ac">Non AC</option>
                        </select>
                        <span class="select-arrow"></span>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-btn">
                        <button class="submit-btn">Book Tickets</button>
                        <button className="rst mt-3" onClick={() => reset()}>
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Bus;
