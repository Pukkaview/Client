import { Skeleton } from "@mui/material";
import MovieCard2 from "./cards/MovieCard2";
import { SearchContext } from "../context/useSearch";
import { useContext } from "react";


const Search = ({data}) => {
  const {byCat, byName, byCast, dispatch:dispatch2} = useContext(SearchContext)
  return (
    <div className="">   
      <div className="md:px-[40px] px-[20px] pt-[150px] text-text-color">
      <h2 className="text-[24px] font-goemetric font-[400]">Search Results by Movie Title</h2>
        <div>
          {byName.length === 0 && <p className="text-[18px] text-center my-[20px]">No Match Found</p> }
            {byName.length > 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 pt-10 max-w-[1440px] mx-auto">
            {byName.map((c,i)=> (
              <div className={`flex mb-[20px] ${(i + 4)%4 === 0 ? 'lg:justify-start': (i + 1)%4 === 0 ? 'lg:justify-end': 'lg:justify-center'}`}>
                <MovieCard2 key={c.id} data={c} />
              </div>
              ))}
              
            </div>}
        </div>
      </div>
      <div className="md:px-[40px] px-[20px] pt-[30px] text-text-color">
      <h2 className="text-[24px] font-goemetric font-[400]">Search Results by Movie Category</h2>
        <div>
          {byCat.length === 0 && <p className="text-[18px] text-center my-[20px]">No Match Found</p> }
            {byCat.length > 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 pt-10 max-w-[1440px] mx-auto">
            {byCat.map((c,i)=> (
              <div className={`flex mb-[20px] ${(i + 4)%4 === 0 ? 'lg:justify-start': (i + 1)%4 === 0 ? 'lg:justify-end': 'lg:justify-center'}`}>
                <MovieCard2 key={c.id} data={c} />
              </div>
              ))}
              
            </div>}
        </div>
      </div>
      <div className="md:px-[40px] px-[20px] pt-[30px] pb-[65px] text-text-color">
      <h2 className="text-[24px] font-goemetric font-[400]">Search Results by Movie Cast</h2>
        <div>
          {byCast.length === 0 && <p className="text-[18px] text-center my-[20px]">No Match Found</p> }
            {byCast.length > 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 pt-10 max-w-[1440px] mx-auto">
            {byCast.map((c,i)=> (
              <div className={`flex mb-[20px] ${(i + 4)%4 === 0 ? 'lg:justify-start': (i + 1)%4 === 0 ? 'lg:justify-end': 'lg:justify-center'}`}>
                <MovieCard2 key={c.id} data={c} />
              </div>
              ))}
              
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Search;

