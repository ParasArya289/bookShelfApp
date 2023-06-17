import { moveToRead, selectMenuSelection } from "../../helper/helperFunctions";
import "./BookCard.css";

export const BookCard = ({ book, dispatch }) => {
  return (
    <div className="bookcard-container">
      <div name="Move to" className="bookcard-img">
        <select
        value={book.state}
          className="bookcard-dropdown"
          onChange={(e) => selectMenuSelection(e, dispatch, book.id, book)}
        >
          <option value="read">Read</option>
          <option value="wantToRead">Want to read</option>
          <option value="currentlyReading">Currently reading</option>
          <option value="none">None</option>
        </select>
      </div>
      <p className="bookcard-title">{book.title}</p>
      <p className="bookcard-author">{book.author}</p>
    </div>
  );
};
