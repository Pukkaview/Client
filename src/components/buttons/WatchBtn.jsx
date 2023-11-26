import play from "../../assets/playwhite.svg";
export default function WatchBtn({ className, textSize }) {
  return (
    <button
      className={`${
        className
          ? className
          : "px-[18px] sm:px-[20px] sm:py-[14px] py-[14px]  sm:gap-[19px] gap-[10px] rounded-[10px]"
      } bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex justify-center items-center `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none">
        <path
          d="M21.909 9.353C22.3893 9.60841 22.791 9.98969 23.0712 10.456C23.3514 10.9223 23.4994 11.456 23.4994 12C23.4994 12.544 23.3514 13.0777 23.0712 13.544C22.791 14.0103 22.3893 14.3916 21.909 14.647L9.097 21.614C7.034 22.736 4.5 21.276 4.5 18.968V5.033C4.5 2.723 7.034 1.264 9.097 2.385L21.909 9.353Z"
          fill="white"
        />
      </svg>
      <span
        className={`${
          textSize ? textSize : "sm:text-[16px] text-[12px]"
        } text-text-color  font-[GeneralSans-Regular]`}>
        Watch now
      </span>
    </button>
  );
}
