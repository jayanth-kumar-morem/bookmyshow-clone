import { SeatLayoutHeader } from '@repo/ui/seatLayoutHeader'
import { ShowTimeChooser } from '@repo/ui/showTimeChooser'
import {
  SeatingRepresentation,
  SeatingRepresentationHelpFooter,
} from '@repo/ui/seatingRepresentation'

export default function SeatLayout() {
  return (
    <>
      <SeatLayoutHeader />
      <ShowTimeChooser />
      <SeatingRepresentation />
      <SeatingRepresentationHelpFooter />
    </>
  )
}
