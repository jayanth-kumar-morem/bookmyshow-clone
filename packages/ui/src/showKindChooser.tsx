export function ShowKindChooser() {
  return (
    <div className="show-king-chooser py-4"
    style={{backgroundColor: "#f5f5f5"}}
    >
      <div className="wrapper px-20 flex flex-row justify-between"
        >
        <div className="left">
          <ul className="flex flex-row">
            {["Movies", "Events", "Plays", "Sports", "Activities"].map(
              (kind, index) => {
                return (
                  <a href="" className="font-normal text-xs pl-4 text-slate-900" key={index}>
                    {kind}
                  </a>
                );
              }
            )}
          </ul>
        </div>
        <div className="right">
          <ul className="flex flex-row">
            {["List Your Show", "Corporates", "Offers", "Gift Cards"].map(
              (kind, index) => {
                return (
                  <a
                    href=""
                    key={index}
                    className="font-normal text-xs pl-4 text-slate-900"
                  >
                    {kind}
                  </a>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
