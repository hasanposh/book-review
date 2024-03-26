import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { BiBookBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getWishListBooks } from "../utility/wishListBooks";

const WishListBooks = () => {
  const [wishListBooks, setWishListBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getWishListBooks();
    setWishListBooks(storedBooks);
  }, []);
  return (
    <div className="my-8 space-y-8">
      {wishListBooks.map((wishListBook) => (
        <div
          key={wishListBook.bookId}
          className="card lg:card-side border-2 p-6"
        >
          <div className="w-1/3">
            <figure>
              <img
                className="rounded-xl"
                src={wishListBook.image}
                alt="image"
              />
            </figure>
          </div>
          <div className="pl-10 w-full space-y-3">
            <h2 className="card-title font-bold text-3xl">
              {wishListBook.bookName}
            </h2>
            <p className="font-semibold">By : {wishListBook.author}</p>
            <div className="flex gap-3 items-center">
              <p className="font-bold">Tag </p>
              <div className="flex gap-3">
                {wishListBook.tags.map((tag, indx) => (
                  <p
                    key={indx}
                    className=" p-3 font-medium bg-[#f3f3f3] rounded-full text-[#23BE0A]"
                  >
                    #{tag}
                  </p>
                ))}
              </div>
              <div className="ml-4 flex items-center gap-3 font-medium">
                <IoLocationOutline className="text-xl " />
                <p>Year of Publishing : {wishListBook.yearOfPublishing}</p>
              </div>
            </div>
            <div className="flex text-lg gap-10">
              <div className="flex items-center gap-3">
                <GoPeople />
                <p>Publisher : {wishListBook.publisher}</p>
              </div>
              <div className="flex items-center gap-3">
                <BiBookBookmark />
                <p>Page : {wishListBook.totalPages}</p>
              </div>
            </div>
            <hr />
            <div className="card-actions">
              <button className="btn bg-[#328EFF] border-none text-[#328EFF] bg-opacity-15  rounded-full">
                Category: {wishListBook.category}
              </button>
              <button className="btn bg-[#FFAC33] border-none text-[#FFAC33] bg-opacity-15  rounded-full">
                Rating: {wishListBook.rating}
              </button>
              <Link
                to={`/bookdetails/${wishListBook.bookId}`}
                className="btn bg-[#23BE0A] border-none text-white rounded-full"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishListBooks;
