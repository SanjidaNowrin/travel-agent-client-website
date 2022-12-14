import React from "react";
import Guider from "./Guider";
import guiders1 from "../../assets/images/guiders1.jpg";
import guiders2 from "../../assets/images/guiders2.jpg";
import guiders3 from "../../assets/images/guiders3.jpg";
import guiders4 from "../../assets/images/guiders4.jpg";
import guiders5 from "../../assets/images/guiders5.jpg";
import guiders6 from "../../assets/images/guiders6.jpg";
const guiders = [
  {
    img: guiders1,
    name: "Johnson Melbourne",
    expertize:
      "Progressively plagiarize resource-leveling e-commerce through resource-leveling core competencies.",
    time: "10am-12pm",
    day: "SAT-MON",
  },
  {
    img: guiders2,
    name: "Ena Dicrosa",
    expertize:
      "Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures",
    time: "9am-12pm",
    day: "SUN-MON",
  },
  {
    img: guiders3,
    name: "Addison Smith",
    expertize:
      "Energistically myocardinate clicks-and-mortar testing procedures whereas manufactured products.",
    time: "10am-1pm",
    day: "SAT-TUE",
  },
  {
    img: guiders4,
    name: "Daisy Gabriela",
    expertize:
      "Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service.",
    time: "8am-1pm",
    day: "FRI-MON",
  },
  {
    img: guiders5,
    name: "Ronnie Aaron",
    expertize:
      "Interactively productize premium technologies whereas interdependent quality vectors.",
    time: "11am-12pm",
    day: "SAT-THU",
  },
  {
    img: guiders6,
    name: "Edie Dee",
    expertize:
      "Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service.",
    time: "7am-2pm",
    day: "SUN-WED",
  },
];
const Guiders = () => {
  return (
    <div className="container">
      <div className="row ">
        <h1 style={{ color: "#237DB2" }} className="mt-5 text-center">
          Our Specialized and Experienced <br />
          <i style={{ color: "black" }}>Guiders</i>
        </h1>
        {guiders.map((guider) => (
          <Guider key={guider.name} guider={guider}></Guider>
        ))}
      </div>
    </div>
  );
};

export default Guiders;
