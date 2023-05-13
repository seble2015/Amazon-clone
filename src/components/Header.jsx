import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [showMenu, setShowMenu] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

const toggleMenu = () => {
  setShowMenu(!showMenu);
};

  return (
    <div>
      <section className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header_clearlink">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="header_clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="./checkout">
            <div className="header__optionBasket">
              <AddShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section>
        <div>
          <div className="secondHeader">
            <p className="flex items-center">
              <MenuIcon className="h-6 mr-1 menu" onClick={toggleMenu} />
            </p>
            <p className="link">Prime Video</p>
            <Link to="https://www.amazon.com/amazonprime?ref_=nav_cs_primelink_nonmember"></Link>
            <p className="link">Amazon Business</p>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food &Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shoper toolkit</p>
            <p className="link hidden lg:inline-flex">Health & parsonal Care</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
