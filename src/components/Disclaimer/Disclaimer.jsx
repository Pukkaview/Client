const Disclaimer = () => {
  return (
    <div className="bg-[#490049] text-white md:px-[59px] py-[15px] px-[20px]">
      <h1 className=" text-white">Disclaimer:</h1>
      <p className="text-sm md:text-md">
        Pukkaview do not own the rights to this video; all credit and ownership
        belong to their respective copyright holders. Pukkaview respects the
        intellectual property rights of others and strives to adhere to
        copyright laws and fair use principles. If you believe that any of the
        videos on our platform infringes upon your rights, please{" "}
        <a href="/contact" className="text-[#C423C4]">
          {" "}
          Contact Us
        </a>{" "}
        for resolution.
        <a href="/privacy" className="text-[#C423C4]">
          {" "}
          Read More
        </a>
      </p>
    </div>
  );
};

export default Disclaimer;
