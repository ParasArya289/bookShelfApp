import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../Context/dataContext";
import { updateSearchQuery } from "../../helper/helperFunctions";
import "./Searchbar.css"
export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const {dataState,dataDispatch} = useData();

  useEffect(() => {
    if (location.pathname === "/search") {
      updateSearchQuery(dataDispatch,searchQuery)
    } else if (location.pathname !== "/search") {
      if (searchQuery) {
        navigate(`/search`);
        updateSearchQuery(dataDispatch,searchQuery)
      }
    }
  }, [searchQuery]);
  return (
    <>
      <input
        type="search"
        value={dataState.searchQuery}
        placeholder="Search books by name"
        className="searchbar-input"
        onChange={(e)=>setSearchQuery(e.target.value)}
      />
    </>
  );
};
