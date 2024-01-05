"use client";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { PaymentOptions } from "./paymentOptions";
import { useState } from "react";

function TicketComponent() {
  const [showTaxBreakup, setShowTaxBreakup] = useState(false);
  return (
    <div id="ticket" className="w-[30%] mt-10">
      <div className="wrapper px-6 bg-white py-8">
        <span className="uppercase tracking-[0.16rem] font-extralight text-sm">
          order summary
        </span>
        <div id="ticket-details" className="relative">
          <ul className="mt-6 ">
            <li className="text-gray-800">Salaar: Cease Fire - Part 1 (A)</li>
            <li className="text-xs text-gray-500 font-light mt-2">
              Telugu, 2D
            </li>
            <li className="text-xs text-gray-500 font-light mt-4">
              Cinephile HSR Layout: PNR Felicity Mall Haralur Rd (SCREEN_1)
            </li>
            <li className="text-xs text-gray-500 font-light mt-4">M-Ticket</li>
            <li className="text-xs text-gray-600 font-normal mt-4">
              GOLD - I7, I8
            </li>
            <li className="text-sm text-gray-700 font-normal mt-1">
              Thu, 11 Jan, 2024
            </li>
            <li className="text-sm text-gray-700 font-normal">05:45 PM</li>
          </ul>
          {/* Num of tickets */}
          <div className="float-right">
            <span className="text-center flex flex-col absolute top-0 right-6">
              <span className="text-[1.6rem] font-normal">2</span>
              <span className="text-xs font-light">Tickets</span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper bg-white pt-2">
        {/* dotted line */}
        <div className="flex flex-row relative mt-5 items-center">
          <div
            className="absolute w-6 h-6 bg-bmsGrayBg -left-3 rounded-full"
            style={{ boxShadow: "inset -1px 0 0 #e3e7ea" }}
          ></div>
          <hr
            className="border-t-1 border-dashed border-gray-300"
            style={{ width: "120%" }}
          />
          <div
            className="absolute w-6 h-6 bg-bmsGrayBg -right-3 rounded-full"
            style={{ boxShadow: "inset 1px 0 0 #e3e7ea" }}
          ></div>
        </div>
      </div>
      <div className="wrapper bg-white py-2">
        <div id="ticket-details" className="px-6">
          <ul className="mt-2">
            <li className="text-gray-500 text-xs flex flex-row items-center justify-between">
              <span>Sub Total</span>
              <span className="text-base text-slate-800">Rs. 400.00</span>
            </li>
            <li className="text-xs flex flex-row items-center justify-between mt-4 text-gray-500">
              <span className="text-gray-800">+ Convenience fees</span>
              <span className="text-gray-500">Rs. 70.80</span>
            </li>
            {showTaxBreakup && (
              <>
                <li className="text-xs flex flex-row justify-between mt-1 ml-4 text-gray-400">
                  <span>Base Amount</span>
                  <span> Rs.60.00</span>
                </li>
                <li className="text-xs flex flex-row justify-between mt-1 ml-4 text-gray-400">
                  <span>Integrated GST (IGST) @ 18%</span>
                  <span>Rs.10.80</span>
                </li>
              </>
            )}
            <button
              className="text-bmsRed text-xs mt-3"
              onClick={() => setShowTaxBreakup(!showTaxBreakup)}
            >
              Show tax breakup{" "}
              <KeyboardArrowDownOutlinedIcon className="text-xs ml-1" />
            </button>
          </ul>
        </div>
      </div>
      <div className="wrapper bg-[#fffcdc] flex flex-row justify-between px-4 py-4 items-center">
        <span className="text-xs text-gray-500">Amount Payable</span>
        <span className="text-lg font-bold">Rs. 646.96</span>
      </div>
    </div>
  );
}

export function PaymentComponent() {
  return (
    <div id="payment-component" className="bg-bmsGrayBg w-full">
      <div className="wrapper flex flex-row mx-20">
        <PaymentOptions />
        <TicketComponent />
      </div>
    </div>
  );
}
