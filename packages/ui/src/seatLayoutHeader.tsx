import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

export function SeatLayoutHeader() {
  return (
    <div id="seat-layout-header" className="text-xs w-full h-20">
      <div className="wrapper flex flex-row place-content-between px-10 pl-2 py-4 items-center">
        <div id="left" className="flex flex-row items-center">
          <div id="back-btn">
            <ArrowBackIosRoundedIcon />
          </div>
          <div id="show-details" className="pl-5">
            <div id="wrapper" className="flex flex-col items-start">
              <div id="movie-name">
                <span className="flex flex-row items-center font-semibold">
                  Kaatera
                  <span
                    className="ml-1 text-gray-600 rounded-full border border-solid border-gray-500 text-xs w-auto object-contain"
                    style={{ padding: "0.1rem", fontSize: "10px" }}
                  >
                    {" "}
                    UA{" "}
                  </span>
                </span>
              </div>
              <span className="font-semibold text-gray-500 mt-1">
                INOX: Brookefield Mall | Tuesday, 09 Jan, 11:00 AM
              </span>
            </div>
          </div>
        </div>
        <div id="right" className="flex flex-row items-center ">
          <div id="tickets-count">
            <div
              id="wrapper"
              className="flex flex-row text-gray-500 font-semibold border border-solid border-gray-500 py-1 px-2 rounded-md mr-10"
            >
              <span>2 Tickets</span>
              <EditOutlinedIcon className="text-sm" />
            </div>
          </div>
          <div id="close-btn">
            <CloseOutlinedIcon className="text-base text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
