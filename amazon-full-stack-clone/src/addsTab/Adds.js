import React from "react";
import "./Adds.css";


function Adds( {image}) {

 
  return (
    <div className="adds">
   {/* espace inscrivez vous */}
      <img src={image} alt="" />
    </div>
  );
}

export default Adds;
