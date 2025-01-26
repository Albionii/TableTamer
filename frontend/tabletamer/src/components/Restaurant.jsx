import { useEffect, useState } from "react";
import Table from "../assets/table.svg?url";
import RepeatedDivs from "./RepeatedDivs";

function Restaurant() {
  const [createTable, setCreateTable] = useState(false);
  
  return (
    <div className="h-screen w-screen bg-[#152D36] ">
      <h1>FOR ADMINISTRATORS ONLY</h1>
      <div className="container mx-auto h-full relative">
        <RepeatedDivs createTable={createTable}/>
        <button
          className="h-[52px] w-[255px] bg-[#FFFEDA] rounded-3xl cursor-pointer manrope absolute top-5 right-0"
          onClick={(e) => {
            e.stopPropagation();
            setCreateTable(!createTable);
          }}
        >
          {createTable ? "Cancel" : "Add Table"}
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
