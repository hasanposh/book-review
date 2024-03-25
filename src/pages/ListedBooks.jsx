import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div>
      <div className="mb-10 bg-[#f3f3f3] flex items-center justify-center rounded-xl h-24">
        <p className="text-3xl font-bold">Books</p>
      </div>
      {/* Dropdown btn */}
      <div className="dropdown flex items-center mb-10 justify-center ">
        <div tabIndex={0} role="button" className="btn text-white w-32 bg-[#23BE0A] m-1">
        Sort By <IoIosArrowDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of Pages</a>
          </li>
          <li>
            <a>Publisher Year</a>
          </li>
        </ul>
      </div>

      {/* tab slider */}
      <div role="tablist" className="tabs w-1/3  tabs-lifted">
        <Link
        to={'readbooks'}
          onClick={() => setTabIndex(1)}
          role="tab"
          className={`tab ${tabIndex === 1 ? "tab-active font-medium" : ""}`}
        >
          Read Books
        </Link>
        <Link
        to={'wishlistbooks'}
          onClick={() => setTabIndex(2)}
          className={`tab ${tabIndex === 2 ? "tab-active font-medium" : ""}`}
          role="tab"
        >
          Wishlist Books
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default ListedBooks;
