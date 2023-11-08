import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const MainSlider = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
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
