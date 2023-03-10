import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert.jsx";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import useBookData from "../hooks/useBookData.js";
import BookInformation from "../components/BookInformation.jsx";

const Book = () => {
  const params = useParams();

  const [loading, error, bookData] = useBookData(params.id);

  return (
    <Container>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!error && loading && (
        <div className="max-w-[230px]">
          <Skeleton count="5" />
        </div>
      )}
      {!error && !loading && <BookInformation bookData={bookData} />}
    </Container>
  );
};

export default Book;
