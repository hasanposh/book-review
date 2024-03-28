import { Link } from "react-router-dom";
import bannerBook from "../assets/book.jpeg";

const HomeBanner = () => {
  return (
    <div className="bg-[#f3f3f3] m-4 p-10 lg:h-[600px] rounded-xl flex items-center justify-around">
      <div className="flex flex-col justify-center gap-10">
        <h2 className="text-4xl lg:text-6xl font-bold">
          Books to freshen
          <br />
          up your bookshelf
        </h2>
        <Link to={"/listedbooks"}>
          <button className="btn w-36 text-base text-white bg-[#23BE0A]">
            View The List
          </button>
        </Link>
      </div>
      <div>
        <img src={bannerBook} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
