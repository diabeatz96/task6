import { useState, useEffect } from "react";

const useBookData = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bookData, setBookData] = useState(!!id ? null : []); // if no id passed into hook, we are requesting all books, so lets default to an empty array so the books.map doesnt break on the Books component

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.matgargano.com/api/books/${!!id ? id : ''}`; // if we don't pass in an ID, lets make sure we request the collection
      setLoading(true);
      setError(false);
      try {
        const request = await fetch(url);
        const response = await request.json();
        setBookData(response);
      } catch (e) {
        setError("Error: " + e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return [loading, error, bookData];
};

export default useBookData;