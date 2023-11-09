"use client";

import { twMerge } from "tailwind-merge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { getPopularMovieResponse } from "../../queries/dto/get-popular-movie";
import { getMoviePoster } from "../../utils/get-movie-poster";

interface SliderProps {
  text: string;
  data: getPopularMovieResponse[];
  className?: string;
}

const MainSlider = ({ data }: Omit<SliderProps, "text" | "className">) => {
  console.log(data);
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {data.map((movie) => (
        <img
          key={movie.id}
          className="h-[16.1rem]"
          src={getMoviePoster(movie.poster_path)}
        />
      ))}
      {/* <div className="h-[16.1rem] bg-red-500" />
      <div className="h-[16.1rem] bg-green-500" />
      <div className="h-[16.1rem] bg-red-500" />
      <div className="h-[16.1rem] bg-green-500" />
      <div className="h-[16.1rem] bg-red-500" />
      <div className="h-[16.1rem] bg-green-500" />
      <div className="h-[16.1rem] bg-red-500" />
      <div className="h-[16.1rem] bg-green-500" /> */}
    </StyledSlider>
  );
};

export default function CustomSlider({ text, data, className }: SliderProps) {
  console.log(data);
  return (
    <div className={twMerge("bg-background-main pl-[0.5rem]", className)}>
      <div className="font-sub text-white mb-[1.4rem] pl-[1.1rem]">{text}</div>
      <MainSlider data={data} />
    </div>
  );
}

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding-left: 0.7rem;
  }
`;
