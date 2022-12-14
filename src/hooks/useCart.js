import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch(`https://travel-agent-website.onrender.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectedCourse(data);
        }
      });
  }, [uid]);

  function addToCart(service) {
    const isHave = selectedCourse.find(
      (selected) => selected._id === service._id
    );
    delete service._id;
    service.uid = uid;
    service.status = "pending";

    if (isHave) {
      alert("Booking Confirmed!");
    } else {
      fetch("https://travel-agent-website.onrender.com/course/add", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(service),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelection = [...selectedCourse, service];
            setSelectedCourse(newSelection);
          }
        });
    }
  }
  //remove

  function remove(id) {
    fetch(`https://travel-agent-website.onrender.com/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const selectAfterRemove = selectedCourse.filter(
            (course) => course._id !== id
          );
          setSelectedCourse(selectAfterRemove);
          console.log(setSelectedCourse);
        } else {
          alert("something went wrong!!");
        }

        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return { setSelectedCourse, addToCart, selectedCourse, remove };
};

export default useCart;
