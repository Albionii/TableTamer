import React, { useState } from "react";
// import { useSearchParams } from "react-router-dom";

function Invoice({ invoice, ushqimet, display }) {
  const [displayInvoice, setDisplayInvoice] = useState(false);
  const [displayInvoiceTotal, setDisplayInvoiceTotal] = useState(false);
  const handleSplit = () => {
    setDisplayInvoice(true);
  };
  const handleTotal = () => {
    setDisplayInvoice(true);

    setDisplayInvoiceTotal(true);
  };
  return (
    <>
      <div
        className="w-screen h-screen fixed flex justify-center items-center"
        style={{ display: displayInvoice ? "" : "none" }}
      >
        <div className="w-[80%] h-[80%] py-5 overflow-y-scroll bg-white text-center">
          {Object.keys(invoice).map((key) => {
            const totalPrice = invoice[key].reduce(
              (total, value) => total + ushqimet[value].cmimi,
              0
            );
            return (
              <div key={key}>
                <p>Karrika {key} ka blere:</p>
                {invoice[key].map((value, index) => (
                  <p key={index}>
                    {ushqimet[value].emri} - {ushqimet[value].cmimi}€
                  </p>
                ))}
                <p className="font-bold">Totali: {totalPrice}€</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="w-screen h-screen fixed flex justify-center items-center"
        style={{ display: displayInvoiceTotal ? "" : "none" }}
      >
        <div className="w-[80%] h-[80%] py-5 overflow-y-scroll bg-white text-center">
          {(() => {
            let total = 0;
            return (
              <>
                {Object.keys(invoice).map((key) => {
                  const totalPrice = invoice[key].reduce(
                    (total, value) => total + ushqimet[value].cmimi,
                    0
                  );
                  total += totalPrice;
                  return (
                    <div key={key}>
                      {invoice[key].map((value, index) => (
                        <p key={index}>
                          {ushqimet[value].emri} - {ushqimet[value].cmimi}€
                        </p>
                      ))}
                    </div>
                  );
                })}
                <p className="font-bold border-t-[1px]">Totali: {total}€</p>
              </>
            );
          })()}
        </div>
      </div>
      <div
        className="fixed w-screen h-screen flex justify-center items-center"
        onClick={() => display(false)}
      >
        <div
          className="w-[80%] h-[90%] bg-[#FFFEDA] rounded-4xl flex justify-evenly items-center"
          style={{
            display: displayInvoice ? "none" : "",
          }}
        >
          <button
            className="w-[40%] mx-auto h-fit manrope mb-5 py-2 rounded-xl bg-[#152D36] text-[#D8D8D8]"
            onClick={(e) => {
              e.stopPropagation();
              handleSplit();
            }}
          >
            Split
          </button>
          <button
            className="w-[40%] mx-auto h-fit manrope mb-5 py-2 rounded-xl bg-[#152D36] text-[#D8D8D8]"
            onClick={(e) => {
              e.stopPropagation();
              handleTotal();
            }}
          >
            Together
          </button>
        </div>
      </div>
    </>
  );
}

export default Invoice;
