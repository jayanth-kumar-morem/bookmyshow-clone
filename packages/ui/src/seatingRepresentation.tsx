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
            <div className="wrapper flex flex-col m-auto w-full items-center pt-20 pb-10">
                <svg className="w-2/6 h-10" style={{ verticalAlign: 'middle' }}>
                  <use xlinkHref={'/icons.svg#icon-screen'} />
                </svg>
                <span className="text-xs mt-2 font-light">All eyes this way please!</span>
            </div>
        </div>
    )
}

function Seat({ seatNo, seatType, help }: { seatNo: string; seatType: number; help?: boolean }) {
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
              seatType == reserved ? "bg-gray-200 text-white border-none " : " "
            }
            ${
                seatType == walkway ? "border-none" : ""
            }
        `}
      style={{ fontSize: "10px" }}
    >
        {seatType == walkway ? "" : seatNo}
    </button>
  );
}

function SeatsRow() {
  let seatingConf = {
    A: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    B: [4, 4, 4, 4, 2, 2,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2,2,4, 4, 4,4 ],
    C: [4, 4, 4, 4, 2, 2,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2,2,4, 4, 4,4 ],
    D: [2,2,2,2,2,2,4, 4, 4, 4, 4, 4, 4, 4, 4, 4,2,2,2,2,2,2],
    E: [2,2,2,2,2,2,4, 4, 4, 4, 4, 4, 4, 4, 4, 4,2,2,2,2,2,2],
    F: [2,2,2,2,2,2,4, 4, 4, 4, 4, 4, 4, 4, 4, 4,2,2,2,2,2,2],
    G: [2,2,2,2,2,2,4, 4, 4, 4, 4, 4, 4, 4, 4, 4,2,2,2,2,2,2],
    Z: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    H: [4,4,4,4,2,2,2,4,4,4,4,4,4,4,4,2,2,2,4,4,4,4,4],
    I: [4,4,4,4,2,2,2,4,4,4,4,4,4,4,4,2,2,2,4,4,4,4,4],
    J: [4,4,4,4,2,2,2,4,4,4,4,4,4,4,4,2,2,2,4,4,4,4,4],
    K: [4,4,4,4,2,2,2,4,4,4,4,4,4,4,4,2,2,2,4,4,4,4,4],
    L: [4,4,4,4,2,2,2,4,4,4,4,4,4,4,4,2,2,2,4,4,4,4,4],
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
              <TableRow key={index} className="border-none m-0 p-0 flex flex-row items-center px-10">
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
                <div key={rowName} className="flex flex-row justify-center w-full">
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
        <SectionHeader sectionName="GOLD" sectionPrice="Rs. 230.00"/>
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
      <div id="seating-representation-help-footer" className="w-full fixed bottom-0 bg-white py-2">
        <div className="wrapper flex flex-row w-full items-center justify-center">
          <div className="pr-2 flex flex-row items-center">
            {/* Assuming Seat component takes seatType as a prop */}
            <Seat seatNo="" seatType={freeToBook} help/>
          </div>
          <span className="text-xs text-gray-500 font-medium pr-8">Available</span>
          <div className="pr-2 flex flex-row items-center">
            <Seat seatNo="" seatType={selected} help/>
          </div>
          <span  className="text-xs text-gray-500 font-medium pr-8">Selected</span>
          <div className="pr-2 flex flex-row items-center">
            <Seat seatNo="" seatType={reserved} help/>
          </div>
          <span className="text-xs text-gray-500 font-medium">Sold</span>
        </div>
      </div>
    );
}
  