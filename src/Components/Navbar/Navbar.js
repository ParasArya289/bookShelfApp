import {BiArrowBack} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Searchbar } from "../SearchBar/SearchBar";
import "./Navbar.css";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
     <BiArrowBack onClick={()=>navigate("/")}/>
     <Searchbar/>
    </nav>
  );
};
