import {
  Children,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { books } from "../dataBase";
import { dataReducer, initDataState } from "../Reducers/dataReducer";

export const dataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initDataState);
  const wantToRead = dataState.books.filter(({ state }) => state === "wantToRead");
  const read = dataState.books.filter(({ state }) => state === "read");
  const currentlyReading = dataState.books.filter(
    ({ state }) => state === "currentlyReading"
  );
  const none = dataState.books.filter(({ state }) => state === "none");

  useEffect(() => {
    dataDispatch({
      type: "INIT_DATA",
      payload: {
        books,
      },
    });
  }, []);

  return (
    <dataContext.Provider
      value={{
        books,
        dataState,
        dataDispatch,
        wantToRead,
        read,
        none,
        currentlyReading,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
