import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h2>Details of:{service.name}</h2>
    </div>
  );
};
export default Details;
