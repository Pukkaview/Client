import { Link } from "react-router-dom";
import Play from "../../assets/play.png";
import PropTypes from "prop-types";
const MovieCardPlay = ({ title, content, backgroundColor, img, id, playIcon }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || "",
  };
  return (
    <Link to={`/play/${id}`} >
      <div
        style={cardStyle}
        className="cursor-pointer justify-start border-0 rounded-xl gap-[21px] flex hover:bg-accent3 transition duration-300 h-[150px]"
      >
        <div style={{
        backgroundImage: `url(${encodeURI(img)})`,
        
      }}  className="w-[30%] justify-center items-center flex bg-movieCardBg rounded-l-xl bg-cover bg-no-repeat ">
          {playIcon && <div className="">
            <img src={Play} alt="" />
          </div>}
        </div>
        <div className=" flex-col w-[70%]  justify-start items-start gap-2 flex">
          <div className="text-fuchsia-50 sm:text-[24px] text-[18px] font-normal leading-normal">
            <h3 className="">{title.length > 60 ? `${title.slice(0, 60)}...` : title}</h3>
          </div>
          <div className="text-fuchsia-50  md:text-[14px] text-[12px] pb-3 font-bold">
            <p>{content.length > 200 ? `${content.slice(0, 200)}...` : content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
MovieCardPlay.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  img: PropTypes.string,

};
export default MovieCardPlay;
