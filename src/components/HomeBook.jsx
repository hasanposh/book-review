import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const HomeBook = ({ book }) => {
  const { bookName ,image,author,rating,category ,bookId,tags} = book;
  return (
    <Link to={`/bookdetails/${bookId}`} className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="books"
        />
      </figure>
      <div className="p-10 space-y-3 ">
        <div className="flex gap-3">
        {
            tags.map((tag,indx)=><p key={indx} className=" p-3 font-medium bg-[#f3f3f3] rounded-full text-[#23BE0A]">{tag}</p>)
        }
        </div>
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p className="font-medium">By : {author}</p>
        <hr className="my-3" />
        <div className="flex font-medium items-center justify-between">
          <p>{category}</p>
          <div className="flex items-center gap-2">
            {rating}
            <CiStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

HomeBook.propTypes = {
  book: PropTypes.object,
};

export default HomeBook;
