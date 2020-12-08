import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import SubHeader from "./SubHeader";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type=" text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Bonjour {!user ? "invité" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Déconnexion" : "Identifiez-Vous"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Retours</span>
              <span className="header__optionLineTwo">& Commandes</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Testez</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasket />
              <span
                className="header__optionLineTwo 
              header__basketCount"
              >
                {basket?.length} {/*le ? ne fonctionne pas 2h2 */}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/">
        <SubHeader />
      </Link>
    </div>
  );
}

export default Header;
