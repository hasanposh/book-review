import { useState } from "react";
import SearchedBook from "../components/SearchedBook";
import { useLoaderData } from "react-router-dom";

const SearchTheBook = () => {
  const data = useLoaderData();
  //   console.log(data);

  const [searchName, setSearchName] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearch = () => {
    const books = data.filter((book) =>
      book.bookName.toLowerCase().includes(searchName.toLowerCase())
    );
   
    if (books) {
      setBooks(books);
    }
  };

  return (
    <div>
      <div className="bg-[#f3f3f3] gap-4 flex flex-col items-center justify-center rounded-xl p-14">
        <p className="text-3xl font-bold">Search Your Book</p>
        <div className="space-y-5 text-center">
          <input
            type="text"
            placeholder="Search Your Book"
            className="input input-bordered w-96"
            value={searchName}
            onChange={handleChange}
          />
          <button
            className="btn w-36 lg:ml-4 text-base text-white bg-[#23BE0A]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <SearchedBook books={books} />
    </div>
  );
};

export default SearchTheBook;
