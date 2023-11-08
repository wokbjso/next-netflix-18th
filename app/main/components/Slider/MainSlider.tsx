import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const MainSlider = () => {
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
      <SliderItem1 />
      <SliderItem />
      <SliderItem1 />
      <SliderItem />
      <SliderItem1 />
      <SliderItem />
      <SliderItem1 />
      <SliderItem />
    </StyledSlider>
  );
};
export default MainSlider;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding-left: 0.7rem;
  }
`;

const SliderItem = styled.div`
  background-color: red;
  height: 16.1rem;
`;

const SliderItem1 = styled.div`
  background-color: green;
  height: 16.1rem;
`;
