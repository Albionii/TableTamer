import React from "react";
import burger from "../assets/images/burger.png";

function Menu() {
  return (
    <>
      <div className="container mx-auto h-[900px] flex justify-center items-center">
        <div className="w-[80%] h-[80%] bg-[#02565c] border-[1px] rounded-4xl flex">
          <div className="w-[75%] h-full overflow-y-scroll  rounded-bl-4xl  rounded-tl-4xl flex flex-col ">
            {/* QEKJO SIMBOLIZON NJE karrik */}
            <div className="h-fit w-full   flex">
              <div className=" w-full h-fit  border-b-[1px] flex">
                <div className="w-[90%] h-full flex justify-center flex-col">
                  {/* Qekjo simbolizon nje ushqim per karrik */}
                  <div className=" w-full h-full flex justify-between items-center">
                    <div className="w-[15%] h-full">
                      {" "}
                      <img
                        src={burger}
                        className="h-full w-full object-contain"
                        alt=""
                      />
                    </div>
                    <div className="h-full w-[40%] flex justify-center items-center">
                      <p className="manrope font-semibold text-white">
                        Hamburger
                      </p>
                    </div>
                    <div className="w-[25%] h-full flex justify-between items-center text-white manrope">
                      <button>-</button> <p>1</p> <button>+</button>
                    </div>
                    <div className="w-[20%] h-full flex justify-center items-center">
                      {" "}
                      <button className="text-white">x</button>
                    </div>
                  </div>
                </div>
                <div className="w-[10%]  flex justify-center items-center"> <p className="manrope text-white font-semibold">ADD</p> </div>
              </div>
            </div> 
            
          </div>
          <div className="w-[25%] h-full bg-[#152d36]  rounded-br-4xl rounded-tr-4xl flex flex-col justify-between border-l-[2px] border-[#000000] pl-2">
            <p className="manrope font-bold text-[32px] text-center text-[#D8D8D8]">
              Table #12
            </p>
            <button className="w-[80%] mx-auto h-fit manrope mb-5 py-2 rounded-xl bg-[#078174] text-[#D8D8D8]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
