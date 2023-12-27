import {Navbar} from "@repo/ui/navbar"
import {BannerCarousel} from "@repo/ui/carousel"
import {MoviesRow} from "@repo/ui/moviesRow"

export default function ExploreHome() {
    return (
        <>
            <Navbar />
            <BannerCarousel />
            <MoviesRow />
        </>
    )
}