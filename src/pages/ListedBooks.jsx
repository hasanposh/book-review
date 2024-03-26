import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { getReadBooks } from "../utility/localStorage";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1);
  
  const handleSortedBooksByRating = () => {
    const storedReadBooks = getReadBooks();
    const ratingOfBooks = storedReadBooks.map(book=> book.rating) 
    const sortedByRating =ratingOfBooks.sort(function(a, b){return a - b});
    const sortedByRatingBooks = storedReadBooks.filter(obj => sortedByRating.includes(obj.rating))
    // setReadBooks(sortedByRatingBooks);
  };
  return (
    <div>
      <div className=" bg-[#f3f3f3] flex items-center justify-center rounded-xl h-24">
        <p className="text-3xl font-bold">Books</p>
      </div>
      {/* Dropdown btn */}
      <div className="flex justify-center my-10 ">
        <details className="dropdown ">
          <summary className="m-1 bg-[#23BE0A] text-white btn">
            Sort By <IoIosArrowDown />{" "}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={handleSortedBooksByRating}>Rating</a>
            </li>
            <li>
              <a>Number Of Pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tab slider */}
      <div role="tablist" className="tabs w-1/3  tabs-lifted">
        <Link
          to={""}
          onClick={() => setTabIndex(1)}
          role="tab"
          className={`tab ${tabIndex === 1 ? "tab-active font-medium" : ""}`}
        >
          Read Books
        </Link>
        <Link
          to={"wishlistbooks"}
          onClick={() => setTabIndex(2)}
          className={`tab ${tabIndex === 2 ? "tab-active font-medium" : ""}`}
          role="tab"
        >
          Wishlist Books
        </Link>
      </div>
      <Outlet handleSortedBooksByRating={handleSortedBooksByRating} />
    </div>
  );
};

export default ListedBooks;
