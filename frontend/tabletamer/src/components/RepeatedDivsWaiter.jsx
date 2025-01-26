import React from "react";
import { useEffect, useRef, useState } from "react";
import RepeatedDivs from "./RepeatedDivs";

function RepeatedDivsWaiter() {
  const [createTable, setCreateTable] = useState(false);

  return (
    <div className="h-screen w-screen bg-[#152D36] ">
      <div className="container mx-auto h-full relative">
        <RepeatedDivs createTable={createTable} />
      </div>
    </div>
  );
}

export default RepeatedDivsWaiter;
