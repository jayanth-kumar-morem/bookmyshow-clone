export function Title() {
  return (
    <div className="title-div">
      <div className="wrapper px-20 py-10">
        <a href="" className="text-4xl">
          Salaar
        </a>
        <div className="tags mt-3 flex flex-row">
          {['UA', 'Action', 'Adventure', 'Fantasy', 'Sci-Fi'].map(
            (tag, index) => {
              return (
                <span
                  className="text-slate-500 text-xs uppercase px-2 mr-2 border border-solid border-stone-500 rounded-full"
                  key={index}
                >
                  {tag}
                </span>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}
