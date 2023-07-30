import Play from "../../assets/play.png";
import PropTypes from "prop-types";
const MovieCard = ({ title, content, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || "",
  };
  return (
    <div>
      <div
        style={cardStyle}
        className="justify-start border-0 rounded-xl gap-[21px] flex hover:bg-accent3 transition duration-300"
      >
        <div className="w-[30%] justify-center items-center flex bg-movieCardBg bg-cover bg-no-repeat ">
          <div className="">
            <div className=" w-[37px] h-[37px]  justify-start items-start flex " />
            <img src={Play} alt="" />
          </div>
        </div>
        <div className=" flex-col w-[70%]  justify-start items-start gap-2 flex">
          <div className="text-fuchsia-50 text-[24px] font-normal leading-relaxed">
            <h3 className="card-title">{title}</h3>
          </div>
          <div className="text-fuchsia-50  mg:text-[14px] text-[12px] pb-3 font-bold">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
export default MovieCard;
