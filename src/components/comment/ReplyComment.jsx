import { Dialog, DialogContent } from "@mui/material";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { CommentContext } from "../../context/useComment";
import { useState } from "react";
import Fetcher from "../../utils/fetcher";
import './popup.css'
import cancel from '../../assets/eva_close-outline.svg'
import { toast } from "react-toastify";

export default function ReplyComment({id, open, handleClose, videoId}) {
  const { dispatch }  = useContext(CommentContext)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const handleError = () => {
    setLoading(false);
    toast.dismiss();
    toast.error('Error sending reply, Try again', {
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
    toast.success('Reply sent!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleReply = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const fetchResponse = await Fetcher(`https://api.pukkaview.com/videoplayer/api/videos/${videoId}/comment/${id}/reply/`, {
        method: "POST",
        body: JSON.stringify({
          reply:comment
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      dispatch({type:"POST_REPLY", payload: {res:fetchResponse, id}})
      setLoading(false)
      setComment('')
      handleClose()
      handleSuccess()
    } catch (error) {
      console.error('Error adding comment:', error);
      setLoading(false)
      handleError()
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
            <DialogContent style={{padding:0}}>
            <form className="flex flex-col sm:w-[464px] w-[310px] mx-auto bg-[#FEF] px-[24px] pb-[24px] pt-[35px] rounded-[10px] relative" onSubmit={handleReply}>
              <img src={cancel} onClick={handleClose} alt="" className="h-[25px] absolute top-[5px] right-[5px] cursor-pointer"  />
              <label className="w-full">
                <textarea required className="w-full bg-[#180018] p-[10px] rounded-[10px] text-[#fef] h-[180px]" placeholder="Reply" onChange={(e) => setComment(e.target.value)} value={comment} />
              </label>
              <div className="flex justify-between">
              <button disabled={loading} className='w-[150px] px-[18px] sm:px-[29px] py-[18px] bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px] mt-[20px]'>
              <span className='text-text-color sm:text-[16px] text-[14px] font-[Goemetric-415-Black-BT]'>{loading ?<i className="fa-solid fa-circle-notch fa-spin fa-lg " style={{ animationDuration: "1s" }}></i> :'Send Reply'}</span>
              </button>
              </div>
            </form>
            </DialogContent>
      </Dialog>
    </div>
  )
}
ReplyComment.propTypes = {
  id: PropTypes.number.isRequired,
  open:PropTypes.bool.isRequired,
  handleClose:PropTypes.func.isRequired,
};