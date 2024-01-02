import { Button } from './button'

export function Navbar(): JSX.Element {
  return (
    <>
      <nav className="justify-between flex place-content-evenly flex-row w-full pl-8 pr-8 pt-3 pb-3 h-16 items-center">
        <div className="left flex p-10">
          <div className="wrapper flex flex-row">
            <div className="logo self-center">
              <img src="/appIcon.svg" />
            </div>
            <div className="searchbar p-1 m-2 border border-solid border-slate-300 p-2">
              <div className="search-btn-input-box-wrapper border-grey-10 rounded-md flex flex-row items-center">
                <img
                  aria-hidden="true"
                  className="h-3 w-3"
                  src="/searchIcon.svg"
                />
                <span className="font-light text-sm pl-2 text-slate-700">
                  Search for Movies, Events, Plays, Sports and Activities
                </span>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="options flex flex-row text-xs place-content-center self-center justify-around">
          <div className="location m-auto flex flex-row pl-4">
            <div className="location">Bengaluru</div>
            <img src="/downHeadlessArrow.svg" alt="" />
          </div>
          <div className="signin-btn pl-4">
            <Button className="rounded-md px-5 py-1 bg-red-500 text-white">
              Sign in
            </Button>
          </div>
          <div className="hamburger-menu pl-4 self-center">
            <img src="/hamburgerMenuIcon.svg" alt="" />
          </div>
        </div>
      </nav>
    </>
  )
}
