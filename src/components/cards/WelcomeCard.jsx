const WelcomeCard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-full   sm:pt-[250px] pt-[100px] bg-HeroBg text-text-color">
        <div className="md:max-w-[815px] max-w-[349px] flex flex-col sm:gap-[18px] gap-[10px]  sm:pb-[205px] pb-[50px]">
          <h1 className="text-center text-[32px] sm:text-[48px] font-[500] leading-none mb-4">
            WELCOME TO PUKKAVIEW
          </h1>
          <p className="text-center text-[14px] sm:text-[18px] mb-8">
            Our contents are streamlined to serve the whole Christian body,
            feeding your body and soul with contents that entertain you and help
            build your faith. <span className="text-[#C600C6]">Zero need</span>{" "}
            for parental control because our contents are strictly for the whole
            family consumption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
