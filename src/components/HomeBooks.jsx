import PropTypes from "prop-types";
import HomeBook from "./HomeBook";

const HomeBooks = ({ data }) => {
  return (
    <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
      {data.map((book) => (
        <HomeBook key={book.bookId} book={book} />
      ))}
    </div>
  );
};

HomeBooks.propTypes = {
  data: PropTypes.array,
};

export default HomeBooks;
