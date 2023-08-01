import { Dialog, DialogContent } from "@mui/material";
import PropTypes from 'prop-types';

export default function ReplyComment({id, open, handleClose}) {
  const { dispatch }  = useContext(CommentContext)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const handlePost = async(e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/videos/1/addcomments/", {
        method: "POST",
        body: JSON.stringify({
          comment
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(fetchResponse);
      dispatch({type:"POST_COMMENT", payload: fetchResponse})
      setLoading(false)
    } catch (error) {
      console.error('Error adding comment:', error);
      setLoading(false)
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
            <DialogContent style={{padding:0}}>

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