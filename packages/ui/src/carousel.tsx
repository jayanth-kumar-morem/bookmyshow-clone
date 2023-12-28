"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

interface CarouselProps {
  items: JSX.Element[];
  settings: Settings;
}

export function Carousel({ items, settings }: CarouselProps) {
  return (
    <div className="">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export function BannerCarousel() {
  const items: JSX.Element[] = [
    <img className="m-auto" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1704527478295_malharmelaweb.jpg"/>,
    <img className="m-auto" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1704267698878_vasavidesk.jpg"/>,
    <img className="m-auto" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1704456008868_offeroftheweekweb.jpg"/>,
    <img className="m-auto" src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703933140485_web.jpg"/>,
  ];

  const settings: Settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    draggable: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 650,
    autoplay: false,
    autoplaySpeed: 1700,
  };

  return <Carousel items={items} settings={settings} />;
}
