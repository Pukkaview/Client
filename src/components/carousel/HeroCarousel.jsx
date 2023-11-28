import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WelcomeCard from "../cards/WelcomeCard";
import IntroCard from "../cards/IntroCard";
import PropTypes from "prop-types";

const HeroCarousel = ({ data }) => {
  const CustomIndicator = ({ isSelected }) => {
    const indicatorStyle = {
      width: "8px",
      height: "8px",
      margin: "0 5px",
      background: isSelected ? "#C600C6" : "gray",
      borderRadius: "50%",
      cursor: "pointer",
      display: "inline-block",
    };

    return <div style={indicatorStyle} />;
  };

  const CustomArrow = ({ onClick, isNext }) => {
    const arrowStyle = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      cursor: "pointer",
      padding: "10px",
      borderRadius: "50%",
      border: "none",
      outline: "none",
    };

    if (isNext) {
      arrowStyle.right = "600px";
      arrowStyle.top = "630px";
    } else {
      arrowStyle.left = "600px";
      arrowStyle.top = "630px";
    }

    return (
      <button style={arrowStyle} onClick={onClick}>
        {isNext ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none">
            <path
              d="M11.2476 3.47651C10.8492 3.87501 10.6254 4.41541 10.6254 4.97888C10.6254 5.54236 10.8492 6.08276 11.2476 6.48126L21.7663 17L11.2476 27.5188C10.8605 27.9195 10.6463 28.4563 10.6512 29.0135C10.656 29.5707 10.8795 30.1036 11.2735 30.4976C11.6675 30.8916 12.2004 31.1151 12.7576 31.1199C13.3148 31.1248 13.8516 30.9106 14.2523 30.5235L26.2735 18.5024C26.6718 18.1039 26.8956 17.5635 26.8956 17C26.8956 16.4365 26.6718 15.8961 26.2735 15.4976L14.2523 3.47651C13.8538 3.07813 13.3134 2.85434 12.75 2.85434C12.1865 2.85434 11.6461 3.07813 11.2476 3.47651Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none">
            <path
              d="M22.7524 3.47651C23.1508 3.87501 23.3746 4.41541 23.3746 4.97889C23.3746 5.54236 23.1508 6.08277 22.7524 6.48126L12.2337 17L22.7524 27.5188C23.1395 27.9195 23.3537 28.4563 23.3488 29.0135C23.344 29.5707 23.1205 30.1036 22.7265 30.4976C22.3325 30.8916 21.7996 31.1151 21.2424 31.1199C20.6852 31.1248 20.1484 30.9106 19.7477 30.5235L7.72654 18.5024C7.32816 18.1039 7.10437 17.5635 7.10437 17C7.10437 16.4365 7.32816 15.8961 7.72654 15.4976L19.7477 3.47651C20.1462 3.07814 20.6866 2.85434 21.25 2.85434C21.8135 2.85434 22.3539 3.07814 22.7524 3.47651Z"
              fill="#C600C6"
            />
          </svg>
        )}
      </button>
    );
  };
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}  
        interval={3000}
        infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomArrow onClick={onClickHandler} isNext={false} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomArrow onClick={onClickHandler} isNext={true} />
        }
        renderIndicator={(onClickHandler, isSelected, index) => (
          <CustomIndicator
            onClick={() => onClickHandler(index)}
            isSelected={isSelected}
          />
        )}>
        <WelcomeCard />
        <IntroCard data={data[0]}  tag="All" />
        <IntroCard data={data[1]}  tag="All" />
        <IntroCard data={data[2]}  tag="All" />
      </Carousel>
    </div>
  );
};

HeroCarousel.propTypes = {
  data: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isNext: PropTypes.bool.isRequired,
};

export default HeroCarousel;
