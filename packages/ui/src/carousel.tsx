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
          <div key={index}>{item}</div>
        ))}
      </Slider>
    </div>
  );
}

export function BannerCarousel() {
  const items: JSX.Element[] = [
    <img
      className="m-auto rounded-lg object-cover w-full h-96 object-top"
      src="https://image.tmdb.org/t/p/original/r9oTasGQofvkQY5vlUXglneF64Z.jpg"
    />,
    <img
      className="m-auto rounded-lg object-cover w-full h-96 object-top"
      src='https://image.tmdb.org/t/p/original/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg'
    />,
    <img
    className="m-auto rounded-lg object-cover w-full h-96 object-top"
    src="https://image.tmdb.org/t/p/original/r9oTasGQofvkQY5vlUXglneF64Z.jpg"
  />,
  <img
    className="m-auto rounded-lg object-cover w-full h-96 object-top"
      src='https://image.tmdb.org/t/p/original/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg'
  />,
  ];

  const settings: Settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    draggable: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    centerPadding: "60px",
    slidesToScroll: 1,
    speed: 650,
    autoplay: false,
    autoplaySpeed: 1700,
  };

  return (
    <div className="pt-2 pb-12 bg-bmsGrayBg" >
      <Carousel items={items} settings={settings} />
    </div>
  );
}
