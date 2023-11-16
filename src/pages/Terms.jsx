// import Form from "../components/Form/Form";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search";
import { useContext } from "react";
import { SearchContext } from "../context/useSearch";

const Terms = () => {
  const { search } = useContext(SearchContext);
  return (
    <div className="bg-[#180018] bg-contactPattern h-fit  font-[Futura]">
      <Navbar />
      {!search && (
        <>
          <div className="text-center text-white text-[48px] py-32">
            Term Of Use And Disclaimer
          </div>
          <div className="text-white  bg-background p-10 md:p-32">
            <div className="md:w-[62rem] md:ml-12 mb-12">
              <h1 className=" text-2xl md:text-3xl mb-6">Term Of Use:</h1>
              <p className="md:text-xl">
                Pukkaview do not own the rights to all the video on this
                platform; all credit and ownership belong to their respective
                copyright holders. Pukkaview respects the intellectual property
                rights of others and strives to adhere to copyright laws and
                fair use principles. If you believe that any of the videos on
                our platform infringes upon your rights, please contact us for
                resolution.
              </p>
            </div>
            <div className="md:w-[62rem] md:ml-12">
              <h1 className=" text-2xl md:text-3xl md:mb-6">Disclaimer:</h1>
              <p className="md:text-xl">
                Pukkaview do not own the rights to all the video on this
                platform; all credit and ownership belong to their respective
                copyright holders. Pukkaview respects the intellectual property
                rights of others and strives to adhere to copyright laws and
                fair use principles. If you believe that any of the videos on
                our platform infringes upon your rights, please contact us for
                resolution.
              </p>
            </div>
          </div>
        </>
      )}
      {search && <Search />}
      <Footer />
    </div>
  );
};
export default Terms;
