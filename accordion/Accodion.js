import React, { useState } from "react";
import { questions } from "./api";
import "./accodion.css";
import MyAccodion from "./MyAccodion";
const Accodion = () => {
  const [data] = useState(questions);

  return (
    <>
      <section className="main-div">
        <h1>React Interview Questions</h1>
        {data.map((curElem) => {
          const { id } = curElem;
          return <MyAccodion key={id} {...curElem} />;
        })}
      </section>
    </>
  );
};

export default Accodion;
