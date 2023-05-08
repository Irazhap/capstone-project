import styled from "styled-components";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-slide > li {
    margin: 0 16px;
  }
`;

export default function MovieList({ movies, title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2>{title}</h2>
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
