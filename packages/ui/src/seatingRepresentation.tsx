import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const selected = 0;
const reserved = 1;
const walkway = 2;
const freeToBook = 3;

function Screen() {
  return (
    <div id="screen" className="w-full">
      <div className="wrapper flex flex-col m-auto w-full items-center pt-20 pb-20">
        <svg className="w-2/6 h-10" style={{ verticalAlign: "middle" }}>
          <use xlinkHref={"/icons.svg#icon-screen"} />
        </svg>
        <span className="text-xs mt-2 font-light">
          All eyes this way please!
        </span>
      </div>
    </div>
  );
}

function Seat({
  seatNo,
  seatType,
  help,
}: {
  seatNo: string;
  seatType: number;
  help?: boolean;
}) {
  return (
    <button
      className={`rounded-sm 
            ${help ? "w-4 h-4 " : "w-6 h-6 "}
            ${seatNo.length == 1 ? "px-2 py-1 " : "p-1 "}
            ${
              seatType == selected
                ? "bg-bmsGreen text-white border-none"
                : "bg-white border border-solid border-bmsGreen text-bmsGreen "
            }
            ${
              seatType == reserved ? "bg-gray-300 text-gray-100 border-none " : " "
            }
            ${seatType == walkway ? "border-none" : ""}
        `}
      style={{ fontSize: "10px" }}
    >
      {seatType == walkway ? "" : seatNo}
    </button>
  );
}

function SeatsRow() {
  let seatingConf = {
    A: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3],
    B: [3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3],
    C: [3, 3, 3, 3, 2, 2, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3],
    D: [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
    E: [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
    F: [2, 2, 2, 2, 2, 2, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
    G: [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 2, 2, 2, 2, 2, 2],
    Z: [
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
    ],
    H: [3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3],
    I: [3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3],
    J: [3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3],
    K: [3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3],
    L: [3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3],
  };
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: "100%",
          "&.MuiTableCell": {
            padding: "0px !important",
          },
        }}
      >
        <TableBody>
          {Object.keys(seatingConf).map((rowName, index) => {
            let seatNo = 0;
            return (
              <TableRow
                key={index}
                className="border-none m-0 p-0 flex flex-row items-center px-10"
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    borderBottom: "none",
                  }}
                  sx={{
                    "&.MuiTableCell-root": {
                      padding: "5px !important",
                      display: "table-caption",
                    },
                  }}
                  className="text-gray-400 text-xs w-5"
                >
                  {rowName}
                </TableCell>
                <div
                  key={rowName}
                  className="flex flex-row justify-center w-full"
                >
                  {seatingConf[rowName].map((seat, index) => {
                    if (seat != walkway) {
                      seatNo++;
                    }
                    return (
                      <TableCell
                        align="right"
                        key={index}
                        style={{ borderBottom: "none" }}
                        sx={{
                          "&.MuiTableCell-root": {
                            padding: "5px !important",
                            display: "table-caption",
                          },
                        }}
                      >
                        <Seat seatNo={String(seatNo)} seatType={seat} />
                      </TableCell>
                    );
                  })}
                </div>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SectionHeader({
  sectionName,
  sectionPrice,
}: {
  sectionName: string;
  sectionPrice: string;
}) {
  return (
    <div id="seating-section-title" className="flex flex-col px-20">
      <span className="text-xs text-gray-400 mb-2">
        {sectionName}-{sectionPrice}
      </span>
      <hr className="text-gray-500" />
    </div>
  );
}

export function SeatingRepresentation() {
  return (
    <div id="seating-representation">
      <div id="wrapper" className="pt-10">
        <SectionHeader sectionName="GOLD" sectionPrice="Rs. 230.00" />
        <SeatsRow />
        {/* <SectionHeader sectionName="SILVER" sectionPrice="Rs. 160.00" />
        <SeatsRow /> */}
        <Screen />
      </div>
    </div>
  );
}

export function SeatingRepresentationHelpFooter() {
  return (
    <div
      id="seating-representation-help-footer"
      className="w-full fixed bottom-0 bg-white py-2"
    >
      <div className="wrapper flex flex-row w-full items-center justify-center">
        <div className="pr-2 flex flex-row items-center">
          <Seat seatNo="" seatType={freeToBook} help />
        </div>
        <span className="text-xs text-gray-500 font-medium pr-8">
          Available
        </span>
        <div className="pr-2 flex flex-row items-center">
          <Seat seatNo="" seatType={selected} help />
        </div>
        <span className="text-xs text-gray-500 font-medium pr-8">Selected</span>
        <div className="pr-2 flex flex-row items-center">
          <Seat seatNo="" seatType={reserved} help />
        </div>
        <span className="text-xs text-gray-500 font-medium">Sold</span>
      </div>
    </div>
  );
}

export function PayForSelectedSelectedSeatsBtn() {
  return (
    <div id="pay-for-selected-seats-btn" className="w-full fixed bottom-0 bg-white py-2 shadow-[15px_15px_15px_15px_rgba(0,0,0,0.5)] opacity-100">
      <div className="wrapper items-center" style={{textAlignLast:"center"}}> 
        <button className="bg-bmsRed px-40 py-2 self-center text-white text-sm rounded-md">Pay Rs.224.00</button>
      </div>
    </div>
  )
}