function ShowTimeBox({ selected, time }: { selected: boolean, time:string }) {
  return (
    <a
      id="show-time-box"
      className={`px-5 py-1 flex flex-col text-xs font-normal items-center rounded-md ${
        selected
          ? "border-none bg-bmsGreen text-white mr-2"
          : "border border-solid bg-white border-bmsGreen text-bmsGreen mr-2"
      }`}
      style={{fontSize:"12px"}}
    >
      {time} 
      <span style={{fontSize:"10px"}}>Dolby 7.1</span>
    </a>
  );
}

export function ShowTimeChooser() {
  return (
    <div id="show-time-chooser" className="bg-bmsGrayBg">
      <div className="wrapper flex flex-row px-10 py-3">
        <ShowTimeBox time={"11:00 PM"} selected />
        <ShowTimeBox time={"06:00 PM"} selected={false} />
        <ShowTimeBox time={"04:00 PM"} selected={false} />
        <ShowTimeBox time={"01:00 PM"} selected={false} />
      </div>
    </div>
  );
}
