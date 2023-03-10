import { useState, useEffect } from "react";

const useBookData = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.matgargano.com/api/books/${id}`;
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