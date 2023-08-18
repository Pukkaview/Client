import MovieCard2 from "./cards/MovieCard2";
import { SearchContext } from "../context/useSearch";
import { useContext } from "react";
import cancel from '../assets/cancel.svg'

const Search = () => {
  const {byName, dispatch} = useContext(SearchContext)
  const handleClose = () => {
    dispatch({type: 'CANCEL_SEARCH'})
    dispatch({type: 'UPDATE_BY_NAME', payload:[]})
  }
  return (
    <div className="">
      <div onClick={handleClose} className="flex justify-end w-full pt-[120px] md:px-[40px] px-[20px] cursor-pointer">
        <img className="h-[40px]" src={cancel} alt="cancel" />
      </div>   
      <div className="md:px-[40px] px-[20px] pt-[30px] text-text-color">
        <div>
          {byName.length === 0 && <p className="sm:text-[18px] text-[16px] text-center my-[20px]">No Match Found</p> }
            {byName.length > 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 pt-10 max-w-[1440px] mx-auto">
            {byName.map((c,i)=> (
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

