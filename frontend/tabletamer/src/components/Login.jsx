import React, { useState } from "react";
import submit from '../assets/submit.svg'
import deletesvg from '../assets/delete.svg'
import logo from '../assets/logo.svg'

function Login() {
  const [inputAnim, setInputAnim] = useState(50);
  const [inputValue, setInputValue] = useState("");

  const openInput = () => {
    console.log("opening");
    setInputAnim(0);
  };
  const closeInput = () => {
    console.log("closing");
    setInputAnim(50);
  };

  const handleDelete  = () => {
    //qeky kod veq e hjek shkronjen e fundit te inputValue
    setInputValue(inputValue.substring(0,inputValue.length - 1));

  }

  const handleInput = (nr) => {
    setInputValue(inputValue + nr);
  }
  return (
    <div  
      className="w-screen h-screen bg-[#152D36] flex justify-center items-center relative"
      onClick={closeInput}
    >
      <div className="absolute w-[10%] h-[10%] top-5 left-0"> <img src={logo} className="w-full h-full" alt="" /></div>
      <div className="w-[70%] h-[80%]  flex  relative">
        <div
          className="h-[8%] w-[80%] absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
          style={{
            top: inputAnim + "%",
          }}
        >
          <input
            className="text-center w-full h-full manrope text-white text-[4rem] outline-none border-[1px] border-[#FFFEDA] rounded-3xl cursor-pointer"
            type="text"
            placeholder="····"
            readOnly
            value={inputValue}
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from bubbling up to the parent
              openInput();
            }}
          />
        </div>
        <div className="absolute grid-container text-white inputParent h-[80%] w-[50%] text-[5rem] bottom-0 left-1/2 -translate-x-1/2 transition-all duration-1000" onClick={(e) => {
          e.stopPropagation();
        }} style={{bottom: "-" + inputAnim * 2 +"%"}}>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("1")}>1</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("2")}>2</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("3")}>3</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("4")}>4</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("5")}>5</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("6")}>6</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("7")}>7</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("8")}>8</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("9")}>9</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={handleDelete}>
              <img src={deletesvg} className="w-[6rem]" alt="" />
            </div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" onClick={() => handleInput("0")}>0</div>
            <div className="border-[1px] border-[#FFFEDA] flex justify-center items-center" ><img src={submit} className="w-[2rem]" alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
