import { useState } from "react";
import "./css/header.css"
import logo from "../svg/logo.png";
import cart from "../svg/bag.png";
import wishlist from "../svg/wishlist.png";
const Header = () => {
  const [toggle , setToggle] = useState(false);
  const toggling = ()=>{
    setToggle(!toggle)
    console.log(toggle)
  }
  return (
    <header>
      <div className="menu" onClick= {()=>toggling()}>
        <i className="fa fa-chevron-circle-right"
        
        ></i>
      </div>
      <div className ="logo">
        <img
          src={logo}
          width="100px"
          alt="emoji"
          border="0"
        />
        <span>SOULMADE!</span>
      </div>
      <nav>
        
        <ul className = {toggle ? "toggle" : ""}>
        <div className ="logo side-logo">
        <img
          src={logo}
          alt="emoji"
          border="0"
        />
      </div>
          <li>Products</li>
          <li>About</li>
          <li ><span id ="login">Login/Register</span></li>
          <li> <i className = "fa fa-chevron-circle-left close" onClick= {()=>toggling()}></i></li>
        </ul>
        <div className="nav-icon">
          <img src={cart} alt="bag"  />
          <span>0</span>
        </div>
        <div className="nav-icon">
          <img src={wishlist} alt="bag" />
          <span>0</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
