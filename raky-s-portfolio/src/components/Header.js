import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>i'm a web developer!</h1>
                <Typed
                className="typed-text"
                strings={["Web development", "Front-end", "Back-end", "Web design" ]}
                typeSpeed={60}
                backSpeed={60}
                loop    
                />      
                <a href="#" className="btn-main-offer">Contact me</a>  
            </div>
        </div>
    )
}

export default Header
