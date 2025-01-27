import React, { useEffect, useRef, useState } from "react";
import Table from "../assets/table.svg?url";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const RepeatedDivs = ({ createTable }) => {
  const containerRef = useRef(null);

  // Get all tavolina and set their values to true

  const [booleanArray, setBooleanArray] = useState(Array(96).fill(false));

  const setBooleanToTrue = (index) => {
    const newArray = [...booleanArray];

    newArray[index] = true;

    setBooleanArray(newArray);
  };

  const setMultipleBooleansToTrue = (indices) => {
    const newArray = [...booleanArray];
    indices.forEach((index) => {
      newArray[index] = true;
    });
    setBooleanArray(newArray);
  };

  // qetu i merr krejt karrikat ku posita != null
  useEffect(() => {
    let array = [];
    fetch("https://localhost:7176/api/Table")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then((tavolinat) => {
        tavolinat.map((tavolin, index) => {
          array.push(tavolin.position);
        });
    setMultipleBooleansToTrue(array);

      });
  }, []);

  const handleTableCreation = (index) => {
    if (createTable) {
      setBooleanArray(
        // edhe ktu e shton ni POST request ku ja bon vleren e posites prej null ne qka tdush
        booleanArray.map((_, i) => {
          if (i === index) {
            return true;
          }
          return booleanArray[i];
        })
      );
    }
  };

  return (
    <div
      className="w-[1500px] h-fit flex flex-wrap overflow-hidden gap-0 "
      ref={containerRef}
    >
      {Array.from({ length: 96 }, (_, index) => (
        <div
          key={index}
          className="h-[5.8rem] w-[11.5rem] "
          onClick={() => handleTableCreation(index)}
        >
          {booleanArray[index] ? (
            <Link to={`/menu/${index}`}>
              <img
                src={Table}
                alt=""
                className="h-full w-full object-contain"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      ))}
    </div>
  );
};

export default RepeatedDivs;
