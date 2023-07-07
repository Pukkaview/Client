import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";

import Footer from "../components/Footer/Footer";
import IntroCard from "../components/cards/IntroCard";
import MovieCard from "../components/cards/MovieCard";
import dummy from "../assets/categorydummy.png";
import Carousel from "../components/carousel/Carousel";
import MovieDetailCard from "../components/cards/MovieDetailsCard";
import { movieDataOptions } from "../../src/movieDataOptions";
// import data from "../../src/data";

// Sample data. To be replaced by data coming from the backend
const data = {
  title: "Interview with God",
  coverImage: dummy,
  bio: "The Redemption's Path is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal. Set in a small town struggling with personal struggles and a loss of hope, the film centers around the lives of three main characters whose paths intersect in unexpected ways.",
  time: "1hr 20min",
  year: 2019,
  genre: "Action",
  casts: [
    "Segun Jackob",
    "Segun Daniel",
    "Oguntedo Aremu",
    "Segun Gabriel",
    "Jesus Caleb",
  ],
};

const Categories = ({}) => {
  const [selectedOption, setSelectedOption] = useState("Action");
  const movieData = movieDataOptions[selectedOption];
  const updatedData = { ...data, genre: selectedOption };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="bg-background overflow-x-hidden ">
      <Navbar handleCategoryChange={setSelectedOption} />
      <IntroCard data={updatedData} />
      <div className="md:px-[59px] px-[20px] pt-[107px] pb-[65px] text-text-color">
        <div className="bg-[#fff]">
          <MovieDetailCard data={movieData} />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <span className="text-[20px]">{selectedOption}</span>

            <select
              name=""
              id=""
              className="text-black border-0 outline-none rounded-md px-4"
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Sermon">Sermon</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="New">New</option>
            </select>
          </div>
          <Carousel sliderClassName=" pb-[1px]">
            <MovieCard data={movieDataOptions[selectedOption]} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
          </Carousel>

          <Carousel sliderClassName=" pb-[1px]">
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
          </Carousel>

          <Carousel sliderClassName="pb-[1px]">
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
            <MovieCard data={movieData} />
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Categories;
