import { Dialog, DialogContent } from "@mui/material";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { CommentContext } from "../../context/useComment";
import { useState } from "react";
import Fetcher from "../../utils/fetcher";
import './popup.css'
import cancel from '../../assets/cancel.svg'

export default function ReplyComment({id, open, handleClose}) {
  const { dispatch }  = useContext(CommentContext)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const handleReply = async(e) => {
    e.preventDefault()
    console.log(id);
    try {
      setLoading(true)
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/api/videos/16/comment/${id}/reply/`, {
        method: "POST",
        body: JSON.stringify({
          reply:comment
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(fetchResponse);
      dispatch({type:"POST_REPLY", payload: {res:fetchResponse, id}})
      setLoading(false)
      handleClose()
      setComment('')
    } catch (error) {
      console.error('Error adding comment:', error);
      setLoading(false)
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
            <DialogContent style={{padding:0}}>
            <form className="flex flex-col w-[464px] mx-auto bg-[#FEF] p-[24px]" onSubmit={handleReply}>
              <label className="w-full">
                <textarea required className="w-full bg-[#180018] p-[10px] rounded-[10px] text-[#fef] h-[180px]" placeholder="Reply" onChange={(e) => setComment(e.target.value)} value={comment} />
              </label>
              <div className="flex justify-between">
              <button disabled={loading} onClick={handleClose} className='px-[18px] sm:px-[29px] py-[18px] bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px] mt-[20px]'>
              <span className='text-text-color sm:text-[16px] text-[14px] font-[Goemetric-415-Black-BT]'>Close</span>
              </button>
              <button disabled={loading} className='px-[18px] sm:px-[29px] py-[18px] bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px] mt-[20px]'>
              <span className='text-text-color sm:text-[16px] text-[14px] font-[Goemetric-415-Black-BT]'>Send Reply</span>
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