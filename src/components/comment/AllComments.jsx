import { formatDistanceToNow } from "date-fns";
import { useContext, useEffect, useState } from "react"
import { CommentContext } from "../../context/useComment"
import Fetcher from "../../utils/fetcher";
import like from '../../assets/like.svg'
import ReplyComment from "./ReplyComment";

export default function AllComments({videoId}) {
  const {comments, dispatch} = useContext(CommentContext)
  const [show, setShow] = useState(window.innerWidth > 1025)
  const [sortedComments, setSortedComments] = useState([])
  const [hideReply, setHideReply] = useState(true)
  const [commentId, setCommentId] = useState(0)
  const [open, setOpen] = useState(false);
  const [ids, setIds] = useState([])


  const handleClickOpen = (id) => {
    setOpen(true);
    setCommentId(id)
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    if(comments){
      const sorted = comments.sort((a, b) => b.id - a.id)
      setSortedComments(sorted)
    }
  }, [comments])

  const handleToggle=()=> {
    show ? setShow(false):setShow(true)
  }
  useEffect(() => {
    // Function to fetch the video URL
    const getComment = async () => {
      try {
        const fetchResponse = await Fetcher(`https://api.pukkaview.com/videoplayer/api/videos/${videoId}/getcomments/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (fetchResponse.failure) throw new Error(fetchResponse.message);
        dispatch({type:"GET_COMMENTS", payload: fetchResponse})
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    getComment();
  }, [dispatch, videoId]);

  const likeComment = async(id) => {
    if(ids.includes(id)) return
    setIds((prev) => [...prev, id])
    dispatch({type:"LIKE_COMMENT", payload: id})
    try {
      const fetchResponse = await Fetcher(`https://api.pukkaview.com/videoplayer/api/videos/${videoId}/comments/${id}/like/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  }
  const likeReply = async(commentId, replyId) => {
    if(ids.includes(replyId)) return
    setIds((pre) => [...pre, replyId])
    dispatch({type:"LIKE_REPLY", payload: {commentId, replyId}})
    try {
      const fetchResponse = await Fetcher(`https://api.pukkaview.com/videoplayer/api/videos/${videoId}/comments/${replyId}/like/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  }
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
            <span className="cursor-pointer" onClick={() => handleClickOpen(c.id)}>Reply</span>
            </div>
            <div className="flex gap-[2px]">
              <button onClick={() => likeComment(c.id)}>

              <img src={like} alt="" className="cursor-pointer" />
              </button>
              <span>{c.likes}</span>
            </div>
            <ReplyComment open={open} handleClose={handleClose} id={commentId} videoId={videoId}/>
            {c.replies.length > 0 && (
              <>
              <div className="my-[10px] cursor-pointer" onClick={() => {
                hideReply ? setHideReply(false) : setHideReply(true)
                setCommentId(c.id)
              }}>
                <span className="text-accent1">{c.replies.length} {c.replies.length === 1 ? 'Reply': 'Replies'}</span>
              </div>
              {(!hideReply && commentId === c.id) && c.replies.map(r => (
                <div key={r.id} className='ml-[41px]'>
                  <h6 className="text-text-color ">{r.comment}</h6>
                  <div className="flex justify-between items-center">
                  <p className="text-[12px]">{formatDistanceToNow(new Date(r.created_at).setMinutes(new Date(r.created_at).getMinutes() + 60), {addSuffix: true})}</p>
                  </div>
                  <div className="flex gap-[2px]">
                    <button onClick={() => likeReply(c.id, r.id)}>
                    <img src={like} alt="" className="cursor-pointer" />
                    </button>
                    <span>{r.likes}</span>
                  </div>
                </div>
              ))}
              </>
            )}
          </div>
        ))}
      </div>}
    </div>
  )
}