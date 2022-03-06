import React from "react"
import Header_Style from "../styles/Header.module.css"

// Import assets
import Header_Image from "../assets/header/BadToadTransparent.png"

function Header() {
    return (
        <div className={Header_Style.Main}>
            <div >
                <img src={Header_Image} alt="Bad Toad" className={Header_Style.Image} />
            </div>
        </div >
    );
}

export default Header;
