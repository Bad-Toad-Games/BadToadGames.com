import React from "react"

import Footer_Style from "../styles/Footer.module.css"

import { FaYoutube, FaTwitter } from "react-icons/fa"
import { SiDiscord } from "react-icons/si"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className={Footer_Style.Main}>
            <div className={Footer_Style.Icons}>
                <a href="https://www.youtube.com/channel/UC9vWLWdzsHvUDAR1EjziV4w" target="_blank" className={Footer_Style.Icon_href}>
                    <FaYoutube className={Footer_Style.Icon} />
                </a>
                <a href="https://twitter.com/bad_toad_games" target="_blank" className={Footer_Style.Icon_href}>
                    <FaTwitter className={Footer_Style.Icon} />
                </a>
                <a href="https://discord.gg/3SqXXEaSCn" target="_blank" className={Footer_Style.Icon_href}>
                    <SiDiscord className={Footer_Style.Icon} />
                </a>
            </div>
            <div className={Footer_Style.ExtraLinks}>
                <NavLink to="/join" className={Footer_Style.ExtraLink}>Join the team</NavLink>
                •
                <NavLink to="/support" className={Footer_Style.ExtraLink}>Support the Dream</NavLink>
                •
                <NavLink to="/contact" className={Footer_Style.ExtraLink}>Contact us</NavLink>
                <br />
                <NavLink to="/newsletter" className={Footer_Style.ExtraLink}>Newsletter</NavLink>
            </div>
        </div >
    );
}

export default Header;
