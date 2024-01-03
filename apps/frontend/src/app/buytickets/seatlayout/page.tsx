import { SeatLayoutHeader } from '@repo/ui/seatLayoutHeader'
import { ShowTimeChooser } from '@repo/ui/showTimeChooser'
import {
  PayForSelectedSelectedSeatsBtn,
  SeatingRepresentation,
  SeatingRepresentationHelpFooter,
} from '@repo/ui/seatingRepresentation'
import { NumOfSeatsModel } from '@repo/ui/numOfSeatsModel'
import {TermsAndConditionsModel} from '@repo/ui/termsAndConditionsModel'

export default function SeatLayout() {
  return (
    <>
      <SeatLayoutHeader />
      <ShowTimeChooser />
      <SeatingRepresentation />
      {/* <SeatingRepresentationHelpFooter /> */}
      <PayForSelectedSelectedSeatsBtn />
      {/* <NumOfSeatsModel /> */}
      <TermsAndConditionsModel />
    </>
  )
}
