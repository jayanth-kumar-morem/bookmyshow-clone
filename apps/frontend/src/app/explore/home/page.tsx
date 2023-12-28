import {Navbar} from "@repo/ui/navbar"
import {BannerCarousel} from "@repo/ui/carousel"
import {MoviesRow} from "@repo/ui/moviesRow"
import {PromotionBanner} from "@repo/ui/promotionBanner"

export default function ExploreHome() {
    return (
        <>
            <Navbar />
            <BannerCarousel />
            <MoviesRow />
            <PromotionBanner />
        </>
    )
}