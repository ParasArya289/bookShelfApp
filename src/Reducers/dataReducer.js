export const initDataState = {
  read: [],
  none: [],
  wantToRead: [],
  currentlyReading: [],
  searchQuery:"",
};
export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return action.payload;
    case "MOVE_TO_READ":
      return {
        ...state,
        read: [...state.read, action.payload.data],
        none: state.none.filter(({ id }) => id !== action.payload.id),
        wantToRead: state.wantToRead.filter(
          ({ id }) => id !== action.payload.id
        ),
        currentlyReading: state.currentlyReading.filter(
          ({ id }) => id !== action.payload.id
        ),
      };
    case "MOVE_TO_CURRENTLYREADING":
      return {
        ...state,
        currentlyReadig: [...state.currentlyReadig, action.payload.data],
        none: state.none.filter(({ id }) => id !== action.payload.id),
        wantToRead: state.wantToRead.filter(
          ({ id }) => id !== action.payload.id
        ),
        read: state.read.filter(({ id }) => id !== action.payload.id),
      };
    case "MOVE_TO_WANTTOREAD":
      return {
        ...state,
        wantToRead: [...state.wantToRead, action.payload.data],
        none: state.none.filter(({ id }) => id !== action.payload.id),
        read: state.read.filter(({ id }) => id !== action.payload.id),
        currentlyReading: state.currentlyReading.filter(
          ({ id }) => id !== action.payload.id
        ),
      };
    case "MOVE_TO_NONE":
      return {
        ...state,
        none: [...state.none, action.payload.data],
        wantToRead: state.wantToRead.filter(
          ({ id }) => id !== action.payload.id
        ),
        read: state.read.filter(({ id }) => id !== action.payload.id),
        currentlyReading: state.currentlyReading.filter(
          ({ id }) => id !== action.payload.id
        ),
      };
      case "INIT_SEARCHQUERY":
        return{
          ...state,
          searchQuery:action.payload
        }
    default:
      return state;
  }
};
