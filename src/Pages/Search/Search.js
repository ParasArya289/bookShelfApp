import { filterBooks } from "../../helper/helperFunctions";
import { useData } from "../../Context/dataContext";
import { BookCard } from "../../Components/BookCard.js/BookCard";
export const Search = () => {
  const {
    dataState: { searchQuery },
    books,
    dataDispatch,
  } = useData();
  let searchResult = filterBooks(books, searchQuery);
  return (
    <div>
      <h3>Showing Results ({searchResult.length} books)</h3>
      <div className="shelf-container">
        {searchResult.map((book) => (
          <BookCard book={book} dispatch={dataDispatch} />
        ))}
      </div>
    </div>
  );
};
