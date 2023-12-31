import InfoBtn from "../buttons/InfoBtn";
import PropTypes from "prop-types";
import { useState } from "react";
import "./moviecards.css";
import MovieDetailCard from "./MovieDetailsCard";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import WatchBtn from "../buttons/WatchBtn";

export default function IntroCard({ data, tag }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (!data) {
    return (
      <Skeleton
        animation="wave"
        variant="rectangular"
        className="mx-auto mt-[100px] rounded-[15px]"
        width={"90%"}
        height={"70vh"}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "white",
          marginLeft: "",
        }}
      />
    );
  }
  return (
    <div className="contain sm:pt-[250px] pt-[100px] md:px-[30px] px-[10px] sm:pb-[95px] pb-[30px] text-text-color z-10 relative">
      <img
        className="h-full w-full absolute top-0 left-0 z-[-2]"
        src={encodeURI(data.thumbnaillink)}
        alt=""
      />
      <div className="sm:max-w-[615px] max-w-[349px] flex flex-col sm:gap-[18px] gap-[10px] z-10 text-start">
        <div className="flex gap-[18px] items-start ">
          <span className="bg-accent3 p-[7px] text-center rounded-[4px] text-[#000] font-bold text-[12px] sm:text-[14px] font-[Goemetric-415-Black-BT]">
            {tag}
          </span>
          <span className="text-[14px] sm:text-[16px] font-[Goemetric-415-Black-BT]">
            <b>Time:</b> {data.time}
          </span>
        </div>
        <h1 className="sm:text-[32px] text-[24px] font-[500] leading-none">
          {data.title}
        </h1>
        <p className="text-[14px] sm:text-[18px]">{data.plot}</p>
        <div className="flex gap-[10px] sm:mt-[22px]">
          <Link to={`/play/${data.id}-${data.title}`}>
            <WatchBtn   className={` w-[182px] px-[18px] sm:px-[20px] sm:py-[19px] py-[14px]  sm:gap-[19px] gap-[10px] rounded-[10px] `}/>
          </Link>
          <div onClick={handleClickOpen}>
            <InfoBtn />
          </div>
        </div>
      </div>
      <MovieDetailCard open={open} handleClose={handleClose} data={data} />
    </div>
  );
}

IntroCard.propTypes = {
  data: PropTypes.object.isRequired,
};
