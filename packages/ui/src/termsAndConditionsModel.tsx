export function TermsAndConditionsModel() {
  return (
    <div className="z-50 fixed overflow-x-hidden flex inset-0 overflow-y-auto outline-none focus:outline-none items-center justify-center">
      <div className="relative w-auto max-w-xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none px-10">
          <div
            className="wrapper py-5 px-2 w-full"
            style={{ textAlignLast: "center" }}
          >
            <span className="text-sm m-auto">Terms & Conditions</span>
          </div>
          <div
            id="conditions-list"
            className="text-xs/[1.3rem] text-gray-500 flex flex-col mb-6 font-light"
          >
            <span>
              1. Spitting inside the multiplex premises is strictly prohibited.
            </span>
            <span>2. Entry is allowed only for valid ticket holders.</span>
            <span>
              3. Guests aged under 18 will not be allowed in `A` rated movies.
            </span>
            <span>
              4. Children above the age of 3 years require tickets for `U` or
              `U/A` rated movies.
            </span>
            <span>
              5. In case a ticket is lost or misplaced, a duplicate ticket
              cannot be issued.
            </span>
            <span>
              6. Tickets once purchased cannot be cancelled, exchanged or
              refunded.
            </span>
            <span>
              7. Guest Agrees to be contacted by INOX Management for the purpose
              of seeking feedback for service improvement.
            </span>
            <span>
              8. Decision(s) taken by INOX shall be final and binding, Rights of
              admission reserved.
            </span>
            <span>
              9. Outside food and beverages are not allowed inside the cinema
              premises.
            </span>
            <span>
              10. Patrons under the influence of alcohol or drugs will not be
              allowed inside the Cinema Premises.
            </span>
            <span>
              11. Ticket prices and movie schedules are subject to change
              without any prior notification.
            </span>
          </div>
          <div
            id="conditions-accept-reject-btns"
            className="flex flex-row justify-evenly items-center w-full m-auto pb-5"
          >
            <button className="border border-solid border-bmsRed text-bmsRed px-16 py-2 rounded-md shadow-md shadow-gray-400">
              Cancel
            </button>
            <button className="bg-bmsRed text-white px-16 py-2 rounded-md shadow-md shadow-gray-400">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
