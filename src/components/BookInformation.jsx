import { Link } from "react-router-dom";

function BookInformation({ bookData }) {
  return (
    <>
      <section className="grid min-w-full border solid border-4 bg-gradient-to-r from-rose-100 to-teal-100 ">
        <Link
          className=" m-2 absolute inline-block rounded-full border border-indigo-600 bg-white p-3 text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          to="/books"
        >
          <span className="sr-only"> Download </span>

          <svg
            className="h-5 w-5 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        <div className="  text-center  ">
          <h2 className=" text-5xl p-5 font-black">
            {" "}
            {!bookData ? "Loading" : bookData.title}{" "}
          </h2>
          <h3 className=" text-lg p-5 font-bold">
            {" "}
            {!bookData
              ? "Loading"
              : ` ✍️ Written by: ${bookData.author} 📚 Published by: ${bookData.publisher}`}{" "}
          </h3>
        </div>

        <div>
          <img
            alt={!bookData ? "" : bookData.imageURL}
            className=" my-4 mx-auto "
            src={!bookData ? "" : bookData.imageURL}
          />
        </div>

        <div>
          <div className="flex justify-center">
            <ul className="w-96 justify-self-center">
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                Year Released: {!bookData ? "" : bookData.year}
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                Amount of Pages: {!bookData ? "" : bookData.pages}
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                Created in {!bookData ? "" : bookData.country}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookInformation;
