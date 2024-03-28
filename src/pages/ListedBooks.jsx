import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { getReadBooks } from "../utility/localStorage";
import { getWishListBooks } from "../utility/wishListBooks";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [readBooks, setReadBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);
  useEffect(() => {
    const storedReadBooks = getReadBooks();
    const storedWishListBooks = getWishListBooks();
    setReadBooks(storedReadBooks);
    setWishListBooks(storedWishListBooks);
  }, []);

  const handleSortedBooks = (property) => {
    // const storedReadBooks = getReadBooks();
    // const storedWishListBooks = getWishListBooks();
    // const sortedStoredBooks = storedReadBooks.sort(
    //   (a, b) => parseFloat(b[property]) - parseFloat(a[property])
    // );
    // setReadBooks(sortedStoredBooks);
    setReadBooks((prevState) =>
      [...prevState].sort((a, b) => b[property] - a[property])
    );
    setWishListBooks((prevState) =>
      [...prevState].sort((a, b) => b[property] - a[property])
    );
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
              <span onClick={() => handleSortedBooks("rating")}>Rating</span>
            </li>
            <li>
              <span onClick={() => handleSortedBooks("totalPages")}>
                Number Of Pages
              </span>
            </li>
            <li>
              <span onClick={() => handleSortedBooks("yearOfPublishing")}>
                Publisher year
              </span>
            </li>
          </ul>
        </details>
      </div>

      {/* tab slider */}
      <div role="tablist" className="tabs lg:w-1/3  tabs-lifted">
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
      <div className="m-4 lg:m-0">
        <Outlet context={[readBooks, wishListBooks]} />
      </div>
    </div>
  );
};

export default ListedBooks;
