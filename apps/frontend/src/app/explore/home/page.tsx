"use client";
import { useEffect } from 'react';
import { Navbar } from '@repo/ui/navbar'
import { BannerCarousel } from '@repo/ui/carousel'
import { PromotionBanner } from '@repo/ui/promotionBanner'
import { MoviesRow } from '@repo/ui/moviesRow'
import { ShowKindChooser } from '@repo/ui/showKindChooser'
import {LocationAndLanguageChooserModal} from "@repo/ui/locationAndLanguageChooserModal"
import {LocaleState} from '@repo/state'
import {useRecoilValue} from 'recoil'
import {DarkWrapper} from "@repo/ui/darkWrapper"

export default function ExploreHome() {
  const localeDetails = useRecoilValue(LocaleState)

  useEffect(()=> {
    if(!Object.keys(localeDetails).length) return;
    
  })

  return (
    <>
      {(!Object.keys(localeDetails).length ) && <DarkWrapper />}
      <Navbar />
      <ShowKindChooser />
      <BannerCarousel />
      <MoviesRow />
      <PromotionBanner />
      {(!Object.keys(localeDetails).length) && <LocationAndLanguageChooserModal />}
    </>
  )
}
