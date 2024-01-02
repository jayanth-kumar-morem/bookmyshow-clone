import { grey } from '@mui/material/colors'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined'
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined'
import './theatresAvailabilityComponent.css'

function SeatPrices() {
  return (
    <div id="seat-price-details" className="">
      <div id="wrapper" className="flex flex-col text-center px-3">
        <span className="text-xs">Rs. 330.00</span>
        <span
          className="text-xs font-light mt-1"
          style={{
            fontSize: '10px',
          }}
        >
          CLUB
        </span>
        <span
          style={{
            fontSize: '10px',
          }}
          className="text-xs mt-1 text-green-500"
        >
          Available
        </span>
      </div>
    </div>
  )
}

function ShowTimeBox() {
  return (
    <div className="relative group">
      <div
        id="seat-details"
        className="seat-details absolute hidden bg-white border border-solid border-gray-300 p-4  text-sm group-hover:block w-max shadow-2xl"
        style={{
          bottom: 'calc(100% + 20px)',
          left: '50%',
          transform: 'translateX(-55%)',
        }}
      >
        <div className="wrapper flex flex-row">
          <SeatPrices />
          <SeatPrices />
        </div>
      </div>
      <a
        href="#"
        className="text-green-500 px-6 py-3 border border-solid border-neutral-300 rounded-md text-xs font-light mr-4 relative group-hover:z-10"
      >
        06:20 PM
      </a>
    </div>
  )
}

function SingleTheatreAvailabilityComponent() {
  return (
    <div
      id="single-theatre-availability"
      className="h-100 border border-solid border-grey-300"
    >
      <div className="wrapper p-2 flex flex-row mt-3">
        <div className="heart-icon mx-3">
          <FavoriteBorderOutlinedIcon
            fontSize="small"
            sx={{
              stroke: '#ffffff',
              strokeWidth: 1.5,
            }}
          />
        </div>
        <div id="theatre-details" className="flex flex-col">
          <div id="theatre-name" className="flex flex-row justify-between mb-3">
            <a href="" className="text-xs font-semibold hover:underline">
              INOX: Brookefield mall
            </a>
            <div id="info-icon" className="flex flex-row items-center">
              <img
                src="https://in.bmscdn.com/moviemode/cinemaphotoshowcase/info.png"
                className="w-3 h-3 mr-1"
                alt=""
              />
              <span
                className="font-base"
                style={{ fontSize: '10px', color: grey[500] }}
              >
                INFO
              </span>
            </div>
          </div>
          <div id="theatre-options" className="flex flex-row justify-evenly">
            <div id="m-ticket" className="flex flex-row items-center mr-5">
              <PhonelinkRingOutlinedIcon
                className="text-green-400 text-xs w-5 h-5"
                sx={{
                  stroke: '#ffffff',
                  strokeWidth: 0.9,
                }}
              />
              <span className="text-green-400 text-xs font-light">
                M-Ticket
              </span>
            </div>
            <div id="food-beverage" className="flex flex-row  items-center">
              <FastfoodOutlinedIcon
                className="text-xs w-5 h-5"
                style={{ color: '#ffa426' }}
                sx={{
                  stroke: '#ffffff',
                  strokeWidth: 0.9,
                }}
              />
              <span className="text-xs font-light" style={{ color: '#ffa426' }}>
                Food & Beverage
              </span>
            </div>
          </div>
        </div>
        <div id="show-details">
          <div className="wrapper flex flex-col pl-10">
            <div id="coupon-code" className="flex flex-row items-center">
              <img
                className="w-4 h-4 mr-1"
                src="https://in.bmscdn.com/mobile/superstar/superstaroffer-3x.png"
              />
              <span className="text-xs font-light text-slate-500">
                5% off for Superstars | Use code: STAR5
              </span>
            </div>
            <div id="show-times" className="flex flex-row mt-4">
              <ShowTimeBox />
              <ShowTimeBox />
              <ShowTimeBox />
            </div>
            <div
              id="show-cancellable"
              className="flex flex-row items-center mt-6"
            >
              <div
                id="organge-dot"
                className="w-2 h-2 rounded-md bg-yellow-400 mr-2"
              ></div>
              <span className="text-xs font-light text-slate-500">
                Cancellation Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TheatresAvailabilityComponent() {
  return (
    <div
      id="theatres-availability"
      className="mt-4 border"
      style={{
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        id="wrapper"
        className="mx-20 mt-4 flex flex-col border border-solid border-gray-300"
        style={{
          backgroundColor: '#ffffff',
        }}
      >
        <div id="icons-help" className="flex flex-row self-end h-10">
          <div className="flex flex-row">
            <div className="flex flex-row items-center  mr-3">
              <div className="rounded-md bg-green-500 mr-2 font-extrabold w-2 h-2"></div>
              <div className="uppercase text-xs font-light text-slate-500">
                Available
              </div>
            </div>
            <div className="flex flex-row items-center mr-3">
              <div className="rounded-md bg-red-500 mr-2 font-extrabold w-2 h-2"></div>
              <div className="uppercase text-xs font-light text-slate-500">
                Fast Filling
              </div>
            </div>
            <div className="flex flex-row items-center mr-3">
              <div className="relative border border-solid border-green-500 text-green-500 font-semibold text-xs tracking-wide justify-center flex items-center px-1 mr-1">
                LAN
                <span className="absolute top-full left-70% border-solid border-transparent border-t-3 w-0 h-0 pointer-events-none ml-[-3px]"></span>
              </div>
              <div className="uppercase text-xs font-light text-slate-500">
                Subtitles Language
              </div>
            </div>
          </div>
        </div>
        <SingleTheatreAvailabilityComponent />
        <SingleTheatreAvailabilityComponent />
        <SingleTheatreAvailabilityComponent />
        <SingleTheatreAvailabilityComponent />
      </div>
    </div>
  )
}
