"use client";
import { useState } from "react";
import { SeatPrices } from "./theatresAvailabilityComponent";

export function NumOfSeatsModel() {
  // {isOpen, onClose}
  // if (!isOpen) return null;
  const [seatCount, setSeatCount] = useState(2);
  const [vehicleUnderDisplay, setVehicleUnderDisplay] = useState(2);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none px-10">
          <div
            className="wrapper py-5 px-2 w-full"
            style={{ textAlignLast: "center" }}
          >
            <span className="text-sm m-auto">How Many Seats?</span>
          </div>
          <div className="seat-selector-icon flex flex-col items-center my-5">
            <svg className="w-40" style={{ verticalAlign: "middle" }}>
              <use
                xlinkHref={`/seatSelectorIcons.svg#icon-vehicle-${vehicleUnderDisplay}`}
              />
            </svg>
            <div id="numbers" className="">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => {
                return (
                  <button
                    key={index}
                    className={`w-8 h-8 border-none m-1 text-xs rounded-full 
                      hover:bg-red-500 hover:text-white
                      ${
                        seatCount == num
                          ? "text-white bg-red-500 "
                          : "text-slate-800 "
                      }
                    `}
                    onClick={() => {
                      setSeatCount(num), setVehicleUnderDisplay(num);
                    }}
                    onMouseOver={() => setVehicleUnderDisplay(num)}
                    onMouseLeave={() => setVehicleUnderDisplay(seatCount)}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="wrapper flex flex-row justify-center my-5">
            <SeatPrices />
            <SeatPrices />
          </div>
          <div className="btn-wrapper w-full flex flex-row justify-center mb-5">
            <button className="bg-red-500 text-white px-16 py-2 rounded-md"
            // onClick={onClose}

            >Select Seats</button>
          </div>
        </div>
      </div>
    </div>
  );
}
