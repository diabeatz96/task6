import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useBookData from "../hooks/useBookData.js";

const Books = () => {

  const [loading, error, books] = useBookData();



  return (
    <>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!error && loading && (
        <div className="max-w-[230px]">
          <Skeleton count="10" />
        </div>
      )}
      {!error && !loading && (
        <>
          {books.map((book) => {
            return (
              <div key={book.id}>
                <Link className="hover:underline" to={`/books/${book.id}`}>
                  {book.title}
                </Link>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Books;