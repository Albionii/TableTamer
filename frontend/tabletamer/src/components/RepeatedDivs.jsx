import React, { useEffect, useRef, useState } from "react";
import Table from "../assets/table.svg?url";

const RepeatedDivs = ({ createTable }) => {
  const containerRef = useRef(null);
  const [booleanArray, setBooleanArray] = useState(Array(96).fill(false));

  const handleTableCreation = (index) => {
    if (createTable) {
      setBooleanArray(
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
            <img src={Table} alt="" className="h-full w-full object-contain" /> 
          ) : (
            <div />
          )}
        </div>
      ))}
    </div>
  );
};

export default RepeatedDivs;
