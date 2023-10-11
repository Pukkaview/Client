import React from "react";
import { VideoContext } from "../../context/useVideo";
import { useContext } from "react";
import Fetcher from "../../utils/fetcher";
import { useState } from "react";
import like from "../../assets/like-dark.svg";
import ShareBtnV2 from "../buttons/shareBtnV2";
import SharePop from "../cards/sharePop";
import Disclaimer from "../Disclaimer/Disclaimer";

export default function MovieDescription({ data }) {
  const { video, dispatch } = useContext(VideoContext);
  const [ids, setIds] = useState([]);
  const [openShare, setOpenShare] = useState(false);
  const [plot, setPlot] = useState(false);
  const handleCloseShare = () => {
    setOpenShare(false);
  };
  const handleOpenShare = () => {
    setOpenShare(true);
  };
  const handleLike = async (id) => {
    if (ids.includes(id)) return;
    setIds((prev) => [...prev, id]);
    dispatch({ type: "LIKE_VIDEO", payload: id });
    try {
      const fetchResponse = await Fetcher(
        `https://api.pukkaview.com/videoplayer/api/videos/${id}/like/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
    } catch (error) {
      console.error("Error fetching video URL:", error);
    }
  };
  return (
    <div>
      <div className="flex justify-between flex-col mt-[90px] md:px-[59px] px-[20px] mx-auto">
        <div className="absolute bottom-[300px] md:bottom-[-44px] left-0">
          <Disclaimer />
        </div>
        <div className="flex flex-col gap-[10px] items-start mt-[18.5rem] md:mt-20 w-full">
          <div className="flex justify-between w-full">
            <span className="sm:px-[30px] px-[10px] py-[5px] rounded-[5px] bg-accent3 text-black sm:text-[16px] text-[14px]">
              {data.genre}
            </span>
            <div className="flex sm:gap-[20px] gap-[5px] items-start">
              <button
                className="flex items-center justify-between gap-[10px] p-2 rounded cursor-pointer bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4"
                onClick={() => handleLike(video.id)}>
                <img
                  src={like}
                  alt=""
                  className="cursor-pointer sm:h-[24px] h-[16px]"
                />
                <span className="text-[#000] sm:text-[16px] text-[12px]">
                  {video.likes} {video.likes > 1 ? "likes" : "like"}
                </span>
              </button>
              <div>
                <ShareBtnV2
                  data={data}
                  hideText={true}
                  handleOpen={handleOpenShare}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:gap-[10px] gap-[5px] items-start max-w-[800px]">
            <h2 className="sm:text-[32px] text-[24px] font-[500] leading-none text-text-color">
              {data.title}
            </h2>
            <span className="text-[14px] text-text-color">
              <b>Year:</b> {data.year}
            </span>
            <div className="flex justify-between w-full">
              <span className="text-[14px] text-text-color">
                <b>Cast/Crew:</b> {data.cast}
              </span>
            </div>
            <span
              className={`${plot ? "" : "hidden"} text-[14px] text-text-color`}>
              <b>Plot:</b> {data.plot}
            </span>
            <span
              onClick={() => setPlot(!plot)}
              className="text-[14px] text-text-color cursor-pointer text-right justify-end w-full">
              {plot ? "Read less" : "Read more"}
            </span>
          </div>
        </div>
      </div>
      <SharePop data={data} open={openShare} handleClose={handleCloseShare} />
    </div>
  );
}
