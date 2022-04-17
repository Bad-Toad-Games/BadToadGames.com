import React from "react"
import Footer_Style from "../styles/Footer.module.css"

import { FaYoutube, FaTwitter } from "react-icons/fa"
import { SiDiscord } from "react-icons/si"

import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className={Footer_Style.Main}>
            <div className={Footer_Style.Icons}>
                <a href="https://www.youtube.com/channel/UC9vWLWdzsHvUDAR1EjziV4w" className={Footer_Style.Icon_href}>
                    <FaYoutube className={Footer_Style.Icon} />
                </a>
                <a href="https://twitter.com/bad_toad_games" className={Footer_Style.Icon_href}>
                    <FaTwitter className={Footer_Style.Icon} />
                </a>
                <a href="https://discord.gg/3SqXXEaSCn" className={Footer_Style.Icon_href}>
                    <SiDiscord className={Footer_Style.Icon} />
                </a>
            </div>
            <div className={Footer_Style.ExtraLinks}>
                <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to="/join" className={Footer_Style.ExtraLink}>Join the team</NavLink>
                •
                <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to="/support" className={Footer_Style.ExtraLink}>Support the Dream</NavLink>
                •
                <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to="/contact" className={Footer_Style.ExtraLink}>Contact us</NavLink>
                <br />
                <NavLink onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} to="/newsletter" className={Footer_Style.ExtraLink} >Newsletter</NavLink>
            </div>
            <p className={Footer_Style.Copyright}>© 2022 Bad Toad Games LLC, All Rights Reserved</p>
        </div >
    );
}

export default Header;
