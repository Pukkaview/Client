import { Dialog, DialogContent } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import Fetcher from "../../utils/fetcher";
import '../comment/popup.css'
import logo from '../../assets/logo-2.png'
import angry from '../../assets/angry.png'
import sad from '../../assets/sad.png'
import okay from '../../assets/okay.png'
import satisfied from '../../assets/satisfied.png'
import cancel from '../../assets/cancel.svg'

import { toast } from "react-toastify";

export default function Rate({open, handleClose }) {
  const [rating, setRating] = useState('')
  const [email, setEmail] = useState('')
  const [review, setReview] = useState('')
  const [ratingSuccess, setRatingSuccess] = useState(false)

  const [loading, setLoading] = useState(false)
  const handleError = (message) => {
    setLoading(false);
    toast.dismiss();
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleSuccess = (message) => {
    setLoading(false);
    
    toast.dismiss();
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleReview = async(e) => {
    if(e){
      e.preventDefault()
    }
    setLoading(true)
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/forms/review-form/`, {
        method: "POST",
        body: JSON.stringify({
          email,
          review_message:review,
          rating
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      setLoading(false)
      handleSuccess('Review Submitted!')
      setEmail('')
      setReview('')
      handleClose()
    } catch (error) {
      handleError('Something went wrong, try again')
      console.error('Error adding comment:', error);
      setLoading(false)
    }
  };

  const handleRating = async() => {
    if(!rating){
      handleError('Please select a rating')
    }
    if(rating){
      setRatingSuccess(true)
    }
  };
  const handleSubmitOnClose = async () => {
    if(rating){
      handleReview()
      console.log('yes');
    }
  }
  return (
    <div>
      <Dialog open={open}>
        <DialogContent style={{padding:0}}>
          <div className=" relative flex flex-col gap-[47px] bg-[#180018] sm:p-[36px] px-[15px] py-[30px] max-w-[600px] mx-auto">
            <img className="absolute top-[10px] right-[10px] h-[32px] cursor-pointer" onClick={() => {handleClose(); handleSubmitOnClose()}} src={cancel} alt="cancel" />
            <div className="flex flex-col justify-center items-center gap-[30px] max-w-[350px] mx-auto">
              <img src={logo} alt="logo" />
              {!ratingSuccess && <h2 className="sm:text-[18px] text-[16px] text-center text-text-color">We are tying our best to serve you better with awesome updates</h2>}
              {ratingSuccess && <h2 className="sm:text-[18px] text-[16px] text-center text-text-color">Have More To Pass Across To Us ? <br/> Please Do So Below.</h2>}
            </div>
            {!ratingSuccess &&<div className="flex flex-col gap-[30px]">
            <h2 className="text-[18px] text-text-color">Rate Platform</h2>
            <div className="flex sm:gap-[25px] gap-[10px] text-text-color">
              <div className="flex flex-col gap-[10px] cursor-pointer" onClick={() => setRating('Awful')}>
                <img className="sm:h-[45px] h-[30px] w-[30px] sm:w-[45px]" src={angry} alt="awful" />
                <div className="flex gap-[5px] items-center">
                  <div className={`sm:h-[23px] h-[14px] sm:w-[23px] w-[14px] rounded-[50%] border border-text-color ${rating === 'Awful' ? 'bg-primary': ''}`}></div>
                  <span className="sm:text-[14px] text-[12px]">Awful</span>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] cursor-pointer" onClick={() => setRating('Bad')}>
                <img className="sm:h-[45px] h-[30px] w-[30px] sm:w-[45px]" src={sad} alt="bad"  />
                <div className="flex gap-[5px] items-center">
                  <div className={`sm:h-[23px] h-[14px] sm:w-[23px] w-[14px] rounded-[50%] border border-text-color ${rating === 'Bad' ? 'bg-primary': ''}`}></div>
                  <span className="sm:text-[14px] text-[12px]">Bad</span>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] cursor-pointer" onClick={() => setRating('Okay')}>
                <img className="sm:h-[45px] h-[30px] w-[30px] sm:w-[45px]" src={okay} alt="okay" />
                <div className="flex gap-[5px] items-center">
                  <div className={`sm:h-[23px] h-[14px] sm:w-[23px] w-[14px] rounded-[50%] border border-text-color ${rating === 'Okay' ? 'bg-primary': ''}`}></div>
                  <span className="sm:text-[14px] text-[12px]">Okay</span>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] cursor-pointer" onClick={() => setRating('Satisfied')}>
                <img className="sm:h-[45px] h-[30px] w-[30px] sm:w-[45px]" src={satisfied} alt="satisfied" />
                <div className="flex gap-[5px] items-center">
                  <div className={`sm:h-[23px] h-[14px] sm:w-[23px] w-[14px] rounded-[50%] border border-text-color ${rating === 'Satisfied' ? 'bg-primary': ''}`}></div>
                  <span className="sm:text-[14px] text-[12px]">Satisfied</span>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] cursor-pointer" onClick={() => setRating('Extremely Satisfied')}>
                <img className="sm:h-[45px] h-[30px] w-[30px] sm:w-[45px]" src={okay} alt="ex_satisfied" />
                <div className="flex gap-[5px] items-center">
                  <div className={`sm:h-[23px] h-[14px] sm:w-[23px] w-[14px] rounded-[50%] border border-text-color ${rating === 'Extremely Satisfied' ? 'bg-primary': ''}`}></div>
                  <span className="sm:text-[14px] text-[12px]">Extremely Satisfied</span>
                </div>
              </div>
            </div>
            </div>}
            {!ratingSuccess && <div>
            <button onClick={handleRating} className='w-[150px] px-[18px] sm:px-[29px] py-[18px] bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px] mt-[20px]'>
              <span className='text-text-color sm:text-[16px] text-[14px] font-[Goemetric-415-Black-BT]'>{loading ?<i className="fa-solid fa-circle-notch fa-spin fa-lg " style={{ animationDuration: "1s" }}></i> :'Drop Review'}</span>
              </button>
            </div>}
            {ratingSuccess && <form className="flex flex-col justify-end items-start gap-[25px]" onSubmit={handleReview}>
            <label className="w-full">
              <h2 className="text-[18px] text-text-color font-[400] mb-[10px]">Email</h2>
              <input type="email" required  className="w-full bg-[#FEF] p-[10px] rounded-[10px] text-black" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label className="w-full">
              <h2 className="text-[18px] text-text-color font-[400] mb-[10px]">Review</h2>
              <textarea required className="w-full bg-[#FEF] p-[10px] rounded-[10px] text-black" placeholder="Your review" onChange={(e) => setReview(e.target.value)} value={review} />
            </label>
            <button disabled={loading} className='w-[150px] px-[18px] sm:px-[29px] py-[18px] bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px] mt-[20px]'>
            <span className='text-text-color sm:text-[16px] text-[14px] font-[Goemetric-415-Black-BT]'>{loading ?<i className="fa-solid fa-circle-notch fa-spin fa-lg " style={{ animationDuration: "1s" }}></i> :'Comment'}</span>
            </button>
          </form>}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
Rate.propTypes = {
  id: PropTypes.number,
  open:PropTypes.bool,
  handleClose:PropTypes.func,
};