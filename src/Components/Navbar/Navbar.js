import {BiArrowBack} from "react-icons/bi";
import { Searchbar } from "../SearchBar/SearchBar";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
     <BiArrowBack/>
     <Searchbar/>
    </nav>
  );
};
