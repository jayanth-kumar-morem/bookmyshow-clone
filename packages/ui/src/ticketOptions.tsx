import MultiSelectDropdown from './multiselectDropdown'

function Datebox({
  selected,
  currentDate,
}: {
  selected: boolean
  currentDate: Date
}) {
  // Extracting day of the week (e.g., "SUN")
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'short' })
  // Extracting day of the month (e.g., "07")
  const dayOfMonth = ('0' + currentDate.getDate()).slice(-2)
  // Extracting month abbreviation (e.g., "JAN")
  const monthAbbreviation = currentDate.toLocaleString('en-US', {
    month: 'short',
  })
  console.log(dayOfWeek, dayOfMonth, monthAbbreviation)

  return (
    <a
      className={`date-box flex flex-col px-4 py-1 items-center ${
        selected ? 'bg-red-500 text-white  border rounded-lg' : ''
      }`}
    >
      <span
        className={`uppercase m-0 ${
          !selected ? 'text-slate-500' : 'font-semibold'
        }`}
        style={{ fontSize: '0.6rem' }}
      >
        {dayOfWeek}
      </span>
      <span className="m-0">{dayOfMonth}</span>
      <span
        className={`uppercase m-0 ${
          !selected ? 'text-slate-500' : 'font-semibold'
        }`}
        style={{ fontSize: '0.6rem' }}
      >
        {monthAbbreviation}
      </span>
    </a>
  )
}

export function TicketOptions() {
  return (
    <div className="ticket-options border-t-2">
      <div className="wrapper px-20 flex flex-row place-content-between items-center py-2">
        <div className="left flex flex-row">
          <Datebox selected currentDate={new Date()} />
          {new Array(5).fill(0).map((_, index) => {
            const currentDate = new Date()
            currentDate.setDate(currentDate.getDate() + index + 1)
            return <Datebox selected={false} currentDate={currentDate} />
          })}
        </div>
        <div className="right flex flex-row">
          <div
            className="lang border-b-red-500 px-4 mr-4 mt-5"
            style={{ borderBottomWidth: '4px' }}
          >
            <a className="text-xs font-semibold">Kannada - 2D</a>
          </div>
          <div className="price-filter">
            <div className="">
              <MultiSelectDropdown />
            </div>
          </div>
          <div className="timings-filter border-slate-600">
            <a className="text-xs text-slate-400">
              <MultiSelectDropdown />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
