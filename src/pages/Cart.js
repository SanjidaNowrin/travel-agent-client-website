import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "./../hooks/useAuth";

const Cart = () => {
  //  const [service, setService] = useState({});
  const { allContext, remove } = useAuth();
  const [carts, setCarts] = useState([]);
  const { user } = allContext;
  const { email } = user;

  useEffect(() => {
    const query = `http://localhost:5000/singlecart?email=${email}`;
    fetch(query)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [email]);
  console.log(carts);
  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col md={8}>
            {carts?.map((cart) => (
              <Row key={cart._id} className="my-3 bg-info">
                <Col
                  className="p-0 d-flex align-items-center justify-content-center"
                  md={4}
                >
                  <img width="100%" src={cart.img} alt="" />
                </Col>
                <Col className="py-2">
                  <p>{cart.email}</p>
                  <p>{cart.name}</p>

                  <p>{cart.status}</p>
                  <p className="m-0">{cart.title}</p>
                  <p className="m-0">{cart.address}</p>
                  <p className="m-0">{cart.booking_id}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
      )
    </div>
  );
};

export default Cart;
