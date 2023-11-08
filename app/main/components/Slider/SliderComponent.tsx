import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "./MainSlider";

interface SliderProps {
  text: string;
  addClass?: string;
}

export default function SliderBox({ text, addClass }: SliderProps) {
  return (
    <SliderContainer $addClass={addClass}>
      <SliderTitle>{text}</SliderTitle>
      <MainSlider />
    </SliderContainer>
  );
}

const SliderContainer = styled.div<{ $addClass: string | undefined }>`
  padding-left: 0.5rem;
  background-color: ${(props) => props.theme.colors.black};
  ${(props) => props.$addClass}
`;

const SliderTitle = styled.div`
  padding-left: 1.1rem;
  margin-bottom: 1.4rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.body1}
`;
