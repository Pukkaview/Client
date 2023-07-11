import Slider from "react-slick";
import PropTypes from "prop-types";
export default function Carousel({ children, sliderClassName }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3, // Number of components to show for screen width <= 1024px
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2, // Number of components to show for screen width <= 1024px
        },
      },
      {
        breakpoint: 40,
        settings: {
          slidesToShow: 1, // Number of components to show for screen width <= 768px
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className={`z-[1] hover:z-[10] pt-[30px] pb-[70px] flex flex-col gap-[50px] mx-auto justify-center ${sliderClassName}`}
    >
      {children}
    </Slider>
  );
}
Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};
