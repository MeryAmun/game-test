import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { logo } from "../../assets/index";
import { GoSidebarCollapse,GoSidebarExpand } from "react-icons/go";
import {BsHeart} from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Search from "../Search/Search";

const Navbar = ({toggleBar,handleToggle}) => {
  const displayName = null
  //const displayName = null;
  // const [toggleBar, setToggleBar] = useState(false);
  // const handleToggle = () => {
  //   setToggleBar((prev) => !prev)
  // }


  return (
   <div className="navbar">
      <div className="navbar__side">
    {
      toggleBar ?   <GoSidebarCollapse
      size={40}
       className="nav__icon"
       onClick={handleToggle} 
      /> :
      <GoSidebarExpand
      size={40}
       className="nav__icon"
       onClick={handleToggle} 
      />
    }
      <div className="navbar__sideSub">
        <Link to="/" className="nav__logo_link">
          <img src={logo} alt="logo" className="navbar__logo" />
        </Link>
        <span className="logo__title">
          Crazy <br /> Games
        </span>
        </div>
        </div>
        <Search />
        <div className="nav__links">
            <div className="nav__login">
              <BsHeart className="nav__icon" size={20} />
              <Link to="/login" className="nav__link">
                {" "}
               My Games
              </Link>  
              </div>
          
          {displayName ? (
           
              <Link to="/profile" className="nav__link">
                {displayName}
              </Link>
           
          ) : (
              <div className="nav__login">
                <Link to="/login" className="nav__link">
                {" "}
                Login
              </Link>  
              <BiUserCircle  className="nav__icon"  size={25}/>
              </div>
          )}
          </div>
    </div>
  );
};

export default Navbar;
