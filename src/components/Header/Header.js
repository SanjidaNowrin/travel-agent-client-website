import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./../../assets/images/logo.png";

import { NavLink } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Header = () => {
  const { allContext } = useAuth();
  const { user, logOut } = allContext;
  const { displayName, photoURL, email } = user;
  return (
    <div className="sticky-top">
      <Navbar
        style={{ backgroundColor: "#237DB2" }}
        expand="lg"
        className="p-0"
      >
        <Container>
          <Navbar.Brand to="/home" as={NavLink} className="text-white">
            <img width="180px" src={logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={NavLink}
                className="text-white fw-bolder"
                to="/home"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="text-white fw-bolder"
                to="/about"
              >
                ABOUT
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                className="text-white fw-bolder"
                to="/guiders"
              >
                OUR GUIDERS
              </Nav.Link>

              {!user.displayName ? (
                <>
                  <Nav.Link
                    className="text-white fw-bolder"
                    as={NavLink}
                    to="/login"
                  >
                    LOG IN
                  </Nav.Link>

                  <Nav.Link
                    className="text-white fw-bolder"
                    as={NavLink}
                    to="/signup"
                  >
                    SIGN UP
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{ width: "45px", borderRadius: "50%" }}
                      src={photoURL}
                      alt=""
                    ></img>
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button
                      onClick={logOut}
                      style={{ backgroundColor: "#237DB2" }}
                      className="border-0 btn btn-primary fw-bolder"
                    >
                      Log Out
                    </button>
                  </div>
                  <hr />
                  <Nav.Link
                    as={NavLink}
                    className="p-4 text-center text-white fw-bolder"
                    to="/addservice"
                    style={{ backgroundColor: "#237DB2" }}
                  >
                    Add Destination
                  </Nav.Link>

                  <Nav.Link
                    as={NavLink}
                    className="p-4 text-center text-white fw-bolder"
                    to="/cart"
                    style={{ backgroundColor: "#237DB2" }}
                  >
                    Booking Placed
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    className="p-4 text-center text-white fw-bolder"
                    to="/event"
                    style={{ backgroundColor: "#237DB2" }}
                  >
                    Manage Booking
                  </Nav.Link>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
