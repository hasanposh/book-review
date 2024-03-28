import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";

const SearchedBook = ({ books }) => {
  // const { bookName ,image,author,rating,category ,bookId,tags} = book;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
      
      {books.map((book) => (
        <>
          <div key={book.bookId} >
            <Link
              to={`/bookdetails/${book.bookId}`}
              className="card bg-base-100 shadow-xl"
            >
              <figure>
                <img src={book.image} alt="books" />
              </figure>
              <div className="p-10 space-y-3 ">
                <div className="flex gap-3">
                  {book.tags.map((tag, indx) => (
                    <p
                      key={indx}
                      className=" p-3 font-medium bg-[#f3f3f3] rounded-full text-[#23BE0A]"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <h2 className="card-title text-2xl font-bold">
                  {book.bookName}
                </h2>
                <p className="font-medium">By : {book.author}</p>
                <hr className="my-3" />
                <div className="flex font-medium items-center justify-between">
                  <p>{book.category}</p>
                  <div className="flex items-center gap-2">
                    {book.rating}
                    <CiStar />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

SearchedBook.propTypes = {
  books: PropTypes.array,
};

export default SearchedBook;
