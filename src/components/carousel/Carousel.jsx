import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { useState } from "react";

import next from "../../assets/next.png";
import prev from "../../assets/prev.png";
export default function Carousel({ children }) {
  const [infinite, setInfinite] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleAfterChange = (current) => {
    if (!infinite) {
      setInfinite(true);
    }
    setCurrentSlide(current);
  };
  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };
  // const Next = () => (
  //   <img className="h-[32px] w-[32px]" src={next} alt="next" />
  // )
  const settings = {
    dots: false,
    infinite: infinite,
    // centerMode: true,
    centerPadding: '150px',
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: infinite ? (
      <img className="h-[32px] w-[32px] cursor-pointer" src={prev} alt="prev" />
    ) : (
      <></>
    ),
    nextArrow: <img className="h-[32px] w-[32px] cursor-pointer" src={next} alt="next" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5, // Number of components to show for screen width <= 1024px
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4, // Number of components to show for screen width <= 1024px
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3, // Number of components to show for screen width <= 768px
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2, // Number of components to show for screen width <= 768px
          // centerPadding: "100px"
        },
      },
    ],
    };
    // const activeDivs = document.querySelectorAll('.slick-active');
    // const lastActiveDiv = activeDivs[activeDivs.length - 1];
    // if (lastActiveDiv) {
    //   lastActiveDiv.style.backgroundColor = 'red'; // Apply your desired styling here
    // }
    const lastActiveSlideIndex = currentSlide + (settings.slidesToShow - 1);
    const test = document.querySelectorAll('.slick-slide div')

    return (
      <Slider {...settings} afterChange={handleAfterChange} beforeChange={handleBeforeChange} className="z-[1] relative hover:z-[10] sm:py-[16px] pt-[6px] pb-[10px]  flex flex-col gap-[50px] mx-auto justify-center">
      {React.Children.map(children, (child, index) => {
        if(index === lastActiveSlideIndex){
          test.forEach(element => {
            element.classList.add('last');
          });
        }else{
          test.forEach(element => {
            element.classList.remove('last');
          });
        }
        const extraProps = index === lastActiveSlideIndex ? { isLastActive: true } : {};
        return React.cloneElement(child, extraProps);
      })}
      </Slider>
    );
}
Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};
