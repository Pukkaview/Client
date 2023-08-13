import { useContext } from "react";
import Fetcher from "../../utils/fetcher";
import { CommentContext } from "../../context/useComment";
import AllComments from "./AllComments";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Comment({videoId}) {
  const { dispatch }  = useContext(CommentContext)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  // console.log(comment);
  const handleError = () => {
    setLoading(false);
    toast.dismiss();
    toast.error('Error adding comment, Try again', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleSuccess = () => {
    setLoading(false);
    toast.dismiss();
    toast.success('Comment sent!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handlePost = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/api/videos/${videoId}/addcomments/`, {
        method: "POST",
        body: JSON.stringify({
          comment
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      console.log(fetchResponse);
      dispatch({type:"POST_COMMENT", payload: {...fetchResponse, replies:[], likes:0}})
      setLoading(false)
      handleSuccess()
      setComment('')
    } catch (error) {
      handleError()
      console.error('Error adding comment:', error);
      setLoading(false)
    }
  };
  return (
    <div className="lg:w-[50%] text-text-color">
      <div>
        <form className="flex flex-col justify-end items-end" onSubmit={handlePost}>
          <label className="w-full">
            <h2 className="text-[24px] font-[400] mb-[20px]">Drop A Comment</h2>
            <textarea required className="w-full bg-[#FEF] p-[10px] rounded-[10px] text-black h-[90px]" placeholder="Your coment here" onChange={(e) => setComment(e.target.value)} value={comment} />
          </label>
          <button disabled={loading} className='w-[150px] px-[18px] sm:px-[29px] py-[18px] bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px] mt-[20px]'>
           <span className='text-text-color sm:text-[16px] text-[14px] font-[Goemetric-415-Black-BT]'>{loading ?<i className="fa-solid fa-circle-notch fa-spin fa-lg " style={{ animationDuration: "1s" }}></i> :'Comment'}</span>
          </button>
        </form>
      </div>
      <div>
      <AllComments videoId={videoId}/>
      </div>
    </div>
  )
}