"use client";
import { Navbar } from '@repo/ui/navbar'
import { BannerCarousel } from '@repo/ui/carousel'
import { PromotionBanner } from '@repo/ui/promotionBanner'
import { MoviesRow } from '@repo/ui/moviesRow'
import { ShowKindChooser } from '@repo/ui/showKindChooser'
import {LocationAndLanguageChooserModal} from "@repo/ui/locationAndLanguageChooserModal"
import {LocaleState} from '@repo/state'
import {useRecoilState} from 'recoil'
import {DarkWrapper} from "@repo/ui/darkWrapper"

export default function ExploreHome() {
  const localeDetails = useRecoilState(LocaleState)
  return (
    <>
      {localeDetails==undefined && <DarkWrapper />}
      <Navbar />
      <ShowKindChooser />
      <BannerCarousel />
      <MoviesRow />
      <PromotionBanner />
      {localeDetails==undefined && <LocationAndLanguageChooserModal />}
    </>
  )
}
