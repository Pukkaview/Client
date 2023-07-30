import { formatDistanceToNow } from "date-fns";
import { useContext, useEffect, useState } from "react"
import { CommentContext } from "../../context/useComment"
import Fetcher from "../../utils/fetcher";
import like from '../../assets/like.svg'

export default function AllComments() {
  const {comments, dispatch} = useContext(CommentContext)
  const sortedComments = comments.sort((a, b) => b.id - a.id)
  const [show, setShow] = useState(window.innerWidth > 1025)
  console.log(show);

  const handleToggle=()=> {
    show ? setShow(false):setShow(true)
  }

  console.log(sortedComments);
  useEffect(() => {
    // Function to fetch the video URL
    const getComment = async () => {
      try {
        const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/videos/1/getcomments/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(fetchResponse);
        dispatch({type:"GET_COMMENTS", payload: fetchResponse})
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    getComment();
  }, [dispatch]);
  return (
    <div className="w-full">
      <div className="flex items-center mt-[43px] mb-[29px]">
        <div className="h-[10px] w-[10px] rounded-[50%] bg-accent3"></div>
        <div className="w-[95%] h-[2px] bg-accent3"></div>
        <div className="h-[10px] w-[10px] rounded-[50%] bg-accent3"></div>
      </div>
      <div className="flex justify-between lg:hidden mb-[20px]">
        <span>Recent Comments</span>
        <svg className={`cursor-pointer ${show ? 'rotate-180': ''} transition duration-300`} onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10L7 10Z" fill="#FFEEFF"/>
        </svg>
      </div>
      {show && <div className="w-full flex flex-col gap-[20px]">
        {sortedComments && sortedComments.map(c => (
          <div key={c.id} className='sm:w-[40%] w-[60%]'>
            <h6 className="text-text-color ">{c.comment}</h6>
            <div className="flex justify-between items-center">
            <p className="text-[12px]">{formatDistanceToNow(new Date(c.created_at).setMinutes(new Date(c.created_at).getMinutes() + 60), {addSuffix: true})}</p>
            <span>Reply</span>
            </div>
            <img src={like} alt="" />
          </div>
        ))}
      </div>}
    </div>
  )
}