import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const book = books.find(book=> book.bookId===intId)
//   console.log(book , id);
const {bookName ,image,author,rating,category,totalPages,yearOfPublishing,publisher ,bookId,tags,review}=book
  return (
    <div className="card lg:card-side ">
  <div className="w-1/2">
  <figure><img src={image} className="rounded-xl" alt="Album"/></figure>
  </div>
  <div className=" pl-10 space-y-3">
    <h2 className="card-title text-5xl font-bold">{bookName}</h2>
    <p className="font-medium text-xl">By : {author}</p>
    <hr />
    <p className="font-medium text-xl">{category}</p>
    <hr />
    <p><span className="font-bold">Review : </span>{review}</p>
    
    <div className="flex gap-3 items-center">
    <p className="font-bold">Tag  </p>
    <div className="flex gap-3">
        {
            tags.map((tag,indx)=><p key={indx} className=" p-3 font-medium bg-[#f3f3f3] rounded-full text-[#23BE0A]">#{tag}</p>)
        }
        </div>
    </div>
    <hr />
    <div className="space-y-2  grid grid-cols-2">
        <p >Number of Pages :</p>
        <p className="font-bold">{totalPages}</p>
        <p >Publisher :</p>
        <p className="font-bold">{publisher}</p>
        <p >Year of Publishing :</p>
        <p className="font-bold">{yearOfPublishing}</p>
        <p >Rating :</p>
        <p className="font-bold">{rating}</p>

    </div>
    <div className=" space-x-4">
        <a className="btn border-2 w-28 bg-transparent">Read</a>
        <a className="btn w-28 text-white bg-[#59C6D2]">Wishlist</a>
      </div>
  </div>
</div>
  );
};

export default BookDetails;
