export const initDataState = {
  searchQuery: "",
  books: [],
};
export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return { ...state, ...action.payload };

    case "UPDATE_BOOKS":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id
            ? { ...book, state: action.payload.state }
            : book
        ),
      };
    case "INIT_SEARCHQUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
