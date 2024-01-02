import { Navbar } from '@repo/ui/navbar'
import { ShowKindChooser } from '@repo/ui/showKindChooser'
import { Title } from '@repo/ui/title'
import { TicketOptions } from '@repo/ui/ticketOptions'
import { TheatresAvailabilityComponent } from '@repo/ui/theatresAvailabilityComponent'

export default function BuyTickets() {
  return (
    <>
      <Navbar />
      <ShowKindChooser />
      <Title />
      <TicketOptions />
      <TheatresAvailabilityComponent />
    </>
  )
}
