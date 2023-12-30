
export function TheatresAvailabilityComponent() {
  return (
    <div
      id="theatres-availability"
      className="mt-4 border"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <div id="wrapper" className="mx-20 mt-4 flex flex-col border"
      style={{
        backgroundColor: "#ffffff",
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

      </div>
    </div>
  );
}
