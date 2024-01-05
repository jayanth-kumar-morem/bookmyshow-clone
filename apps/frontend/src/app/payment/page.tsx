import { Navbar } from "@repo/ui/navbar";
import {PaymentComponent} from "@repo/ui/paymentComponent";

export default function Payment() {
    return (
        <>
        <Navbar showOnlyLogo />
        <PaymentComponent />
        </>
    )
}