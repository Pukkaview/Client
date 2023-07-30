import dummy from "../../assets/categorydummy.png";
import MovieCard from "../MovieCardPlay/MovieCardPlay";
const defaultData = {
  title: "Interview with God",
  coverImage: dummy,
  bio: "The Redemption's Path is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal. Set in a small town struggling with personal struggles.",
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
export default function PlayCat() {
  return (
    <div className="lg:w-[48%] flex flex-col gap-[37px]">
      <div className="flex justify-between items-center mx-4 md:mx-9">
              <span className="text-[20px] font-bold text-white">Watch More</span>

              <div className="bg-[#FFEEFF] px-4 rounded-md py-2">
                <select
                  name=""
                  id=""
                  className="bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4"
                >
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Sermon">Sermon</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="New">New</option>
                </select>
              </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <MovieCard title={defaultData.title} content={defaultData.bio}/>
        <MovieCard title={defaultData.title} content={defaultData.bio}/>
        <MovieCard title={defaultData.title} content={defaultData.bio}/>
        <MovieCard title={defaultData.title} content={defaultData.bio}/>
        <MovieCard title={defaultData.title} content={defaultData.bio}/>
        <MovieCard title={defaultData.title} content={defaultData.bio}/>
      </div>
    </div>
  )
}