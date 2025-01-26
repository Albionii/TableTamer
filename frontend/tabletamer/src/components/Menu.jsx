import React, { useEffect, useState } from "react";
import burger from "../assets/images/burger.png";
import AddFood from "./AddFood";
import { useParams } from "react-router-dom";
import Invoice from "./Invoice";

function Menu() {
  // GET String te ushqimeve by This ID
  const { id } = useParams();
  //karrika ko mu bo get tek backend edhe e konverton ne String
  const [tavolina, setTavolina] = useState({});
  const [addId, setAddId] = useState(0);
  const [addFood, setAddFood] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
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

  // tek ushqimet ko me kan GET ALL USHQIMET
  const handleRequest = async () => {
    try {
      const response = await fetch("https://localhost:7176/api/food");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const [ushqimet, setUshqimet] = useState([
    { emri: "Hamburger", cmimi: 5.0, fotoPath: burger },
    { emri: "AlbiJava", cmimi: 4.0, fotoPath: burger },
    { emri: "MediAlbi", cmimi: 50.0, fotoPath: burger },
  ]);

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
  };

  const handleUpload = () => {
    setIsSubmit(true);
    console.log(JSON.stringify(tavolina));
  };

  useEffect(() => {
    setIsSubmit(false);
  }, [tavolina]);

  const handleDeleteTavolina = () => {
    setTavolina({});
  };
  const handleInvoice = () => {
    //kodi me ja ba status 1
    setShowInvoice(true);
  };
  return (
    <>
      <AddFood
        ushqimet={ushqimet}
        idToAdd={addId}
        addFoodToKarrika={addFoodToKarrika}
        display={addFood}
        setDisplay={setAddFood}
      />
      {showInvoice && <Invoice invoice={tavolina} ushqimet={ushqimet} display={setShowInvoice}/>}

      <div className="container mx-auto h-[900px] flex justify-center items-center">
        <div className="w-[80%] h-[80%] bg-[#02565c] border-[1px] rounded-4xl flex">
          <div className="w-[75%] h-full overflow-y-scroll  rounded-bl-4xl  rounded-tl-4xl flex flex-col ">
            {Object.entries(tavolina).map(([idKarrika, foodItems]) => (
              <div key={idKarrika} className="h-fit w-full   flex py-2">
                <div className=" w-full h-fit  border-b-[1px] flex">
                  <div className="w-[90%] h-full flex justify-center flex-col">
                    {foodItems.map((food, index) => (
                      <div
                        key={index}
                        className=" w-full h-full flex justify-between items-center"
                      >
                        <div className="w-[15%] h-full">
                          {" "}
                          <img
                            src={ushqimet[food].fotoPath}
                            className="h-full w-full object-contain"
                            alt=""
                          />
                        </div>
                        <div className="h-full w-[40%] flex justify-center items-center">
                          <p className="manrope font-semibold text-white">
                            {ushqimet[food].emri}
                          </p>
                        </div>
                        <div className="w-[25%] h-full flex justify-center items-center text-white manrope">
                          <p className="manrope text-white text-center">
                            €{ushqimet[food].cmimi}
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
                    <p
                      className="manrope text-white font-semibold"
                      onClick={() => handleAddFood(idKarrika)}
                    >
                      ADD
                    </p>{" "}
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
              Table #{id}
            </p>
            {!isSubmit ? (
              <button
                className="w-[80%] mx-auto h-fit manrope mb-5 py-2 rounded-xl bg-[#078174] text-[#D8D8D8]"
                onClick={handleRequest}
              >
                SUBMIT
              </button>
            ) : (
              <div className="w-[80%] mx-auto flex justify-between rounded-xl  text-[#D8D8D8]">
                <button
                  className="w-[40%] mx-auto h-fit manrope mb-5 py-2 rounded-xl bg-[#078174] text-[#D8D8D8]"
                  onClick={handleInvoice}
                >
                  Fakturo
                </button>
                <button
                  className="w-[40%] mx-auto h-fit manrope mb-5 py-2 rounded-xl bg-[#078174] text-[#D8D8D8]"
                  onClick={handleDeleteTavolina}
                >
                  Delete
                </button>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
