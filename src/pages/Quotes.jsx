import { useLoaderData } from "react-router-dom";

const Quotes = () => {
  const data = useLoaderData();
  return (
    <div className="space-y-10">
      {data.map((qoute) => (
        <>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-1/2 ">
              <img src={qoute.image} alt="Album" />
            </figure>
            <div className="px-10 space-y-3 py-2">
              <h2 className="card-title font-bold text-4xl">
                {qoute.bookName}
              </h2>
              <div className="flex flex-col lg:flex-row justify-between">
                <p className="text-xl">Author : {qoute.author}</p>
                <p className="text-xl">Category : {qoute.category}</p>
              </div>
              {qoute.quotes.map((q, indx) => (
                <ul key={indx}>
                  <li className="text-lg font-semibold " >
                    {indx + 1} . {q}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Quotes;
