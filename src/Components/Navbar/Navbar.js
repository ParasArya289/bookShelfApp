import {BiArrowBack} from "react-icons/bi";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav>
     <BiArrowBack/>
      <input type="search" placeholder="Search books by name" />
    </nav>
  );
};
