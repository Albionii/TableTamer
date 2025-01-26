import React, { useEffect, useState } from "react";
import burger from "../assets/images/burger.png";
import AddFood from "./AddFood";

function Menu() {
  const [tavolina, setTavolina] = useState({});
  const [addId, setAddId] = useState(0);
  const [addFood, setAddFood] = useState(false);
  // const [count, setCount] = useState(0);
  const addFoodToKarrika = (idKarrika, foodId) => {
    console.log(idKarrika + " " + JSON.stringify(foodId));
    setTavolina((prevState) => ({
      ...prevState,
      [idKarrika]: prevState[idKarrika]
        ? [...prevState[idKarrika], foodId]
        : [foodId],
    }));
  };
  const [ushqimet, setUshqimet] = useState([
    { emri: "Hamburger", cmimi: 5.0, fotoPath: burger },
    { emri: "AlbiJava", cmimi: 4.0, fotoPath: burger },
    { emri: "MediAlbi", cmimi: 50.0, fotoPath: burger },
  ]);
  // useEffect(() => {
  //   if (count == 0) {
  //     addFoodToKarrika(0, ushqimet[0]);
  //     addFoodToKarrika(0, ushqimet[0]);
  //     addFoodToKarrika(1, ushqimet[1]);
  //     addFoodToKarrika(2, ushqimet[2]);
  //     addFoodToKarrika(2, ushqimet[1]);
  //     console.log(tavolina);

  //     setCount(1);
  //   }
  // }, []);

  const handleDeleteItem = (indexTavolina, indexUshqimi) => {
    setTavolina((prevTavolina) => {
      // Create a copy of the tavolina object
      const updatedTavolina = { ...prevTavolina };

      // Remove the specified food item from the array
      updatedTavolina[indexTavolina] = updatedTavolina[indexTavolina].filter(
        (_, foodIndex) => foodIndex !== indexUshqimi
      );

      // Return the updated object
      return updatedTavolina;
    });
  };

  const handleAddTavolina = () => {
    setTavolina((prevTavolina) => {
      const newTavolinaId = Object.keys(prevTavolina).length; // Generate the new tavolina index
      return {
        ...prevTavolina,
        [newTavolinaId]: [], // Add a new tavolina with an empty array or initial structure
      };
    });
  };

  const handleAddFood = (index) => {
    setAddFood(true);
    setAddId(index);
  }
  return (
    <>
      <AddFood ushqimet={ushqimet} idToAdd={addId} addFoodToKarrika={addFoodToKarrika} display={addFood} setDisplay={setAddFood}/>

      <div className="container mx-auto h-[900px] flex justify-center items-center">
        <div className="w-[80%] h-[80%] bg-[#02565c] border-[1px] rounded-4xl flex">
          <div className="w-[75%] h-full overflow-y-scroll  rounded-bl-4xl  rounded-tl-4xl flex flex-col ">

            {Object.entries(tavolina).map(([idKarrika, foodItems]) => (
              <div key={idKarrika} className="h-fit w-full   flex py-2">
                <div className=" w-full h-fit  border-b-[1px] flex">
                  <div className="w-[90%] h-full flex justify-center flex-col">
                    {foodItems.map((food, index) => (
                      <div key={index} className=" w-full h-full flex justify-between items-center">
                        <div className="w-[15%] h-full">
                          {" "}
                          <img
                            src={food.fotoPath}
                            className="h-full w-full object-contain"
                            alt=""
                          />
                        </div>
                        <div className="h-full w-[40%] flex justify-center items-center">
                          <p className="manrope font-semibold text-white">
                            {food.emri}
                          </p>
                        </div>
                        <div className="w-[25%] h-full flex justify-center items-center text-white manrope">
                          <p className="manrope text-white text-center">
                            €{food.cmimi}
                          </p>
                        </div>
                        <div className="w-[20%] h-full flex justify-center items-center">
                          {" "}
                          <button
                            className="text-white"
                            onClick={() => handleDeleteItem(idKarrika, index)}
                          >
                            x
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-[10%]  flex justify-center items-center">
                    {" "}
                    <p className="manrope text-white font-semibold" onClick={() => handleAddFood(idKarrika)}>ADD</p>{" "}
                  </div>
                </div>
              </div>
            ))}
            <p
              className="text-center text-white manrope"
              onClick={handleAddTavolina}
            >
              ADD A CHAIR
            </p>
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
