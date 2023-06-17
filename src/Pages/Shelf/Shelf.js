import { BookCard } from "../../Components/BookCard.js/BookCard";
import { useData } from "../../Context/dataContext";
import "./Shelf.css";

export const Shelf = () => {
  const {dataDispatch, none, wantToRead, currentlyReading, read } = useData();
  return (
    <div>
      <h1>Checkout these books</h1>
      <div className="shelf-container">
        {none?.map((book) => (
          <BookCard book={book} dispatch={dataDispatch}/>
        ))}
      </div>
      <h1>Currently Reading</h1>
      <div className="shelf-container">
        {currentlyReading?.map((book) => (
          <BookCard book={book} dispatch={dataDispatch}/>
        ))}
      </div>

      <h1>Want to read</h1>
      <div className="shelf-container">
        {wantToRead?.map((book) => (
          <BookCard book={book} dispatch={dataDispatch}/>
        ))}
      </div>
      <h1>Read</h1>
      <div className="shelf-container">
        {read?.map((book) => (
          <BookCard book={book} dispatch={dataDispatch}/>
        ))}
      </div>
    </div>
  );
};
