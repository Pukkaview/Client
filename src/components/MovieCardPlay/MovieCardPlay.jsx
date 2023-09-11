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
        className="cursor-pointer justify-start border-0 rounded-xl gap-[21px] flex hover:bg-accent3 transition duration-300 sm:h-[150px] h-[100px]"
      >
        <div className=" relative z-10 sm:w-[30%] w-[40%] justify-center items-center flex rounded-l-xl bg-cover bg-no-repeat ">
        <img className='h-full w-full absolute z-[-2]' src={encodeURI(img)} alt="" />
        
          {playIcon && <div className="">
            <img src={Play} alt="" />
          </div>}
        </div>
        <div className=" flex-col sm:w-[70%] w-[60%]  justify-start items-start gap-2 flex py-[10px]">
          <div className="hidden sm:flex text-fuchsia-50 sm:text-[24px] text-[18px] font-normal leading-normal">
            <h3 className="leading-none">{title.length > 60 ? `${title.slice(0, 60)}...` : title}</h3>
          </div>
          <div className="sm:hidden flex text-fuchsia-50 sm:text-[24px] text-[18px] font-normal leading-normal">
            <h3 className="leading-none">{title.length > 40 ? `${title.slice(0, 40)}...` : title}</h3>
          </div>
          <div className="hidden sm:flex text-fuchsia-50  md:text-[14px] text-[12px] pb-3 font-bold">
            <p>{content.length > 200 ? `${content.slice(0, 200)}...` : content}</p>
          </div>
          <div className="sm:hidden flex text-fuchsia-50  md:text-[14px] text-[12px] pb-3 font-bold">
            <p>{content.length > 50 ? `${content.slice(0, 50)}...` : content}</p>
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
