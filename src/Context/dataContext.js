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

  const wantToRead = books.filter(({ state }) => state === "wantToRead");
  const read = books.filter(({ state }) => state === "read");
  const currentlyReading = books.filter(
    ({ state }) => state === "currentlyReading"
  );
  const none = books.filter(({ state }) => state === "none");

  useEffect(() => {
    dataDispatch({
      type: "INIT_DATA",
      payload: {
        read,
        wantToRead,
        currentlyReading,
        none,
      },
    });
  }, []);

  return (
    <dataContext.Provider value={{ none, wantToRead, read, currentlyReading,dataState,dataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
