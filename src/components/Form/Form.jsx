import ContactImage from "../../assets/ContactImage.png";
const Form = () => {
  return (
    <div>
      <div className="w-full flex flex-col-reverse md:flex-row py-5">
        <div className=" text-white  bg-fuchsia-800 md:w-[45%] text-[20px] font-normal leading-relaxed">
          <h2 className="p-10 font-bold">
            We Await Your Feedbacks <br /> And Requests
          </h2>

          <form className="px-10 py-6">
            <label htmlFor="name">Your name</label> <br />
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="rounded-md my-3  w-full px-6 py-2"
            />{" "}
            <br />
            <label htmlFor="email">Your email</label> <br />
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="rounded-md my-3  w-full px-6 py-2"
            />{" "}
            <br />
            <label htmlFor="message">Your message</label>
            <br />
            <textarea
              id="message"
              className="rounded-md my-3 w-full px-6 py-16"
              placeholder="Your message here"
            />
            <button className=" w-[130px] md:w-[102px] py-[10px] md:py-[18px] border-[1px] border-accent4 bg-accent4 hover:bg-primary hover:text-text-color transition duration-300 ease-in-out cursor-pointer  rounded-[10px] text-primary md:text-[16px] text-[14px]">
              Send
            </button>
          </form>
        </div>

        <div className="w-full md:w-[55%] bg-cover bg-ContactImage">
          {/* <img src={ContactImage} className="w-full" /> */}
        </div>
      </div>
    </div>
  );
};
export default Form;
