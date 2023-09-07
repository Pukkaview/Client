import { useState } from "react";
import ContactImage from "../../assets/ContactImage.png";
import Fetcher from "../../utils/fetcher";
import { toast } from "react-toastify";
const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

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

  const handleContact = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/forms/contact/`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      setLoading(false)
      handleSuccess(fetchResponse.message)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      handleError('Something went wrong, try again')
      console.error('Error adding comment:', error);
      setLoading(false)
    }
  };
  return (
    <div>
      <div className="w-full flex flex-col-reverse md:flex-row pb-0 font-[Futura] bg-[#180018]">
        <div className=" text-white  bg-fuchsia-800 md:w-[45%] text-[20px] font-normal">
          <h2 className="p-10 font-bold">
            We Await Your Feedbacks <br /> And Requests
          </h2>

          <form className="px-10 pb-6 pt-2" onSubmit={handleContact}>
            <label htmlFor="name">Your name</label> <br />
            <input
            required
              type="text"
              id="name"
              placeholder="Your Name"
              className="rounded-md my-3  w-full px-6 py-2 text-black"
              onChange={(e)=> setName(e.target.value)}
              value={name}
            />{" "}
            <br />
            <label htmlFor="email">Your email</label> <br />
            <input
            required
              type="email"
              id="email"
              placeholder="Your email"
              className="rounded-md my-3  w-full px-6 py-2 text-black"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />{" "}
            <br />
            <label htmlFor="message">Your message</label>
            <br />
            <textarea
            required
              id="message"
              className="rounded-md my-3 w-full px-6 py-16 text-black"
              placeholder="Your message here"
              onChange={(e)=> setMessage(e.target.value)}
              value={message}
            />
            <button className=" w-[130px] md:w-[102px] py-[10px] md:py-[18px] border-[1px] border-accent4 bg-accent4 hover:bg-primary hover:text-text-color transition duration-300 ease-in-out cursor-pointer  rounded-[10px] text-primary md:text-[16px] text-[14px]">
            {loading ?<i className="fa-solid fa-circle-notch fa-spin fa-lg " style={{ animationDuration: "1s" }}></i> :'Send'}
            </button>
          </form>
        </div>

        <div className="w-full md:w-[55%] h-96 md:h-[700px] bg-cover bg-center bg-ContactImage">
          {/* <img src={ContactImage} className="w-full" /> */}
        </div>
      </div>
    </div>
  );
};
export default Form;
