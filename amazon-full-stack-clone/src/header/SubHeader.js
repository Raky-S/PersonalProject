import React from "react";
import "./SubHeader.css";

function SubHeader() {
  return (
    <div className="sub__header">
      <div className="sub__header__option">
        <span className="sub__header__optionLineOne">Bonjour</span>
        <span className="sub__header__optionLineTwo">Entrez votre adresse</span>
      </div>
      <span className="sub__header__option">Chèques-cadeaux</span>
      <span className="sub__header__option">Meilleurs Ventes</span>
      <span className="sub__header__option">Ventes Flash</span>
      <span className="sub__header__option">AmazonBasics</span>
      <img
        className="sub__header__option"
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/G/08/FRGateway/SWM_SMB_V2_400x39._CB416537158_.jpg"
      />
    </div>
  );
}

export default SubHeader;
