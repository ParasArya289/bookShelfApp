import {BiArrowBack} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Searchbar } from "../SearchBar/SearchBar";
import "./Navbar.css";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
     <BiArrowBack className="navbar-icon" onClick={()=>navigate("/")}/>
     <Searchbar/>
    </nav>
  );
};
