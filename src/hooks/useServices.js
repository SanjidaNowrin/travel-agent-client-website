import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useServices = () => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch("https://hidden-fortress-17783.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return { detail, setDetail };
};

export default useServices;
