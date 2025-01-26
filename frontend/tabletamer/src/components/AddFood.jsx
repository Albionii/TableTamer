import React from "react";

function AddFood({ ushqimet,idToAdd,addFoodToKarrika,display,setDisplay}) {
  return (
    <div className="fixed w-screen h-screen bg-[#00000080]  flex justify-center items-center" onClick={() => setDisplay(false)} style={{
        display: display?"":"none"
    }}>
      <div className="w-[80%] h-[80%] bg-[#02565c] border-[1px] rounded-4xl ">
        <div className="w-full h-full pt-5 px-5 flex flex-wrap items-start gap-2 align-baseline" style={{
            alignContent:"baseline"
        }}>
            {
                ushqimet.map((ushqimet,index) =>(
                    <div className="w-32 h-32 bg-[#152d36] flex flex-col items-center rounded-xl" key={index} onClick={(e) => {e.stopPropagation(); addFoodToKarrika(idToAdd,index); setDisplay(false);}}>
                        <img src={ushqimet.fotoPath} alt=""  className="w-[80%] h-[80%] object-contain"/>
                        <p className="manrope text-white">{ushqimet.emri}</p>
                    </div>
                ))
            }
         
        </div>
      </div>
    </div>
  );
}

export default AddFood;
