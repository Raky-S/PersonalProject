import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type=" text" />
        {/*Logo*/}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Hello Guest</span>
        </div>
        <div className="header_option">
          <span className="header_optionTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionThree">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
