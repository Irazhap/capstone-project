import styled from "styled-components";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledPageTitle } from "./PageTitle.styled";

const StyledSlider = styled(Slider)`
  .slick-slide > li {
    margin: 0 16px;
  }

  //border-top-style: solid;
  //border-bottom-style: solid;
  //border-width: 2px;
  //border-color: #f2f2f2;
  //background-color: #f2f2f2;
`;

export default function Carousel({ movies, title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <>
      <StyledPageTitle>{title}</StyledPageTitle>
      <StyledSlider {...settings}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Card image={movie.image} year={movie.year} title={movie.title} />
          </li>
        ))}
      </StyledSlider>
    </>
  );
}
