"use client";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function CardComponent() {
  function CardDetailsInputBox({
    placeholder,
    type,
    className,
  }: {
    placeholder: string;
    type: string;
    className?: string;
  }) {
    return (
      <input
        type={type}
        className={`border border-solid border-gray-200 px-2 py-3 mb-3 mt-1 mr-1 ${className}`}
        placeholder={placeholder}
      />
    );
  }

  return (
    <div id="card-component">
      <div
        className="wrapper rounded-md m-4 bg-bmsGrayBg flex flex-col text-xs text-gray-400 px-6 py-4 shadow-md shadow-black/50 ml-0"
        style={{
          background:
            "linear-gradient(125deg,#dadee3 0,#dadee3 50%,#d2d6de 51%,#d2d6de 100%)",
        }}
      >
        <span className="">Card Number</span>
        <CardDetailsInputBox type="text" placeholder="Enter Your Card Number" />
        <CardDetailsInputBox type="text" placeholder="Name on the card" />
        <div className="flex flex-row items-left">
          <div id="expiry-date" className="flex flex-col w-1/2">
            <span className="">Expiry</span>
            <div className="flex flex-row">
              <CardDetailsInputBox
                type="text"
                placeholder="MM"
                className="w-1/4 placeholder:text-center"
              />
              <CardDetailsInputBox
                type="text"
                placeholder="YY"
                className="w-1/4 placeholder:text-center"
              />
            </div>
          </div>
          <div id="cvv" className="flex flex-col w-1/2">
            <span className="">Expiry</span>
            <CardDetailsInputBox
              type="number"
              placeholder="CVV"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaymentOptions() {
  const [showBtn, setShowBtn] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    "Debit Card"
  );
  return (
    <div id="payment-options" className="w-[70%]">
      <div className="wrapper flex flex-col mx-5 my-10">
        <div
          id="contact-details-btn"
          className="text-sm text-gray-600 mb-3 bg-white"
        >
          <button
            className="flex flex-row justify-between items-center border border-solid border-bmsBorderGray w-full px-6 py-4"
            // onMouseOver={() => setShowBtn(true)}
            // onMouseLeave={() => setShowBtn(false)}
          >
            <span>Send tickets to email@example.com / +xx 912345xxxx</span>
            <EditOutlinedIcon className={`text-xs ${!showBtn && "hidden"}`} />
          </button>
        </div>

        {/* Payment options */}
        <div id="payment-options" className="text-sm text-gray-600 bg-white">
          <button
            className="flex flex-row justify-left items-center border border-solid border-bmsBorderGray w-full py-4 px-4
            text-white bg-bmsRed
            "
            // onMouseOver={() => setShowBtn(true)}
            // onMouseLeave={() => setShowBtn(false)}
          >
            <KeyboardArrowDownOutlinedIcon className="text-lg mr-2" />
            <span>Payment Options</span>
          </button>

          <div
            id="options-view"
            className="flex flex-row border-l border-b border-r border-solid border-bmsBorderGray"
          >
            <div id="options-list" className="w-2/5 flex flex-col border-r border-solid border-bmsBorderGray">
              {[
                { paymentName: "Debit Card", selected: false },
                { paymentName: "Credit Card" },
                { paymentName: "UPI", selected: false },
                { paymentName: "Net Banking" },
                { paymentName: "Wallets" },
              ].map((option, index) => {
                return (
                  <button
                    className={`
                        text-xs py-4 border-b border-solid border-bmsBorderGray text-left pl-6
                        ${
                          selectedPaymentMethod == option.paymentName
                            ? "bg-white text-black"
                            : "bg-bmsGrayBg text-gray-600"
                        }
                        `}
                    key={index}
                  >
                    {option.paymentName}
                  </button>
                );
              })}
            </div>
            <div id="specific-option-view" className="w-3/5">
              <div className="wrapper flex flex-col px-4 py-6 justify-start">
                <span className="text-sm font-bold">
                  Enter your Card details
                </span>
                <CardComponent />
                {/* Make payment btn */}
                <div className="wrapper">
                    <button className="uppercase bg-bmsRed text-white text-xs tracking-[.15rem] rounded-md py-2 px-10">Make Payment</button>
                </div>
                <span className="text-[9px] text-gray-400 mt-5">By clicking "Make Payment" you agree to the terms and conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
