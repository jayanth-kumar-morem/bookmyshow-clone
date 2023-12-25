"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  items: string[];
  settings: Settings;
}

function Carousel({ items, settings }: CarouselProps) {
  return (
    <div className="">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <img
              src={item}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export function BannerCarousel() {
  const items: string[] = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1704456008868_offeroftheweekweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1703933140485_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1704456008868_offeroftheweekweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1703933140485_web.jpg",
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
    autoplay: true,
    autoplaySpeed: 1700,
  };

  return <Carousel items={items} settings={settings} />;
}
