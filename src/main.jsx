import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Root from "./MainLayout/Root.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import PagesToRead from "./pages/PagesToRead.jsx";
import BookDetails from "./components/BookDetails.jsx";
import ReadBooks from "./components/ReadBooks.jsx";
import WishListBooks from "./components/WishListBooks.jsx";
import { Toaster } from "react-hot-toast";
import SearchTheBook from "./pages/SearchTheBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    exact: true,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            // path: "readbooks/",
            element: <ReadBooks />,
            loader: () => fetch("/books.json"),
          },
          {
            path: "wishlistbooks",
            element: <WishListBooks />,
          },
        ],
      },

      {
        path: "/pagestoread",
        element: <PagesToRead />,
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/seacrhthebook",
        element: <SearchTheBook />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
