import React from "react"
import Footer_Style from "../styles/Footer.module.css"

import { FaYoutube, FaTwitter } from "react-icons/fa"
import { SiDiscord } from "react-icons/si"

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
                <span onClick={() => { window.location.href = "/join" }} className={Footer_Style.ExtraLink}>Join the team</span>
                •
                <span onClick={() => { window.location.href = "/support" }} className={Footer_Style.ExtraLink}>Support the Dream</span>
                •
                <span onClick={() => { window.location.href = "/contact" }} className={Footer_Style.ExtraLink}>Contact us</span>
                <br />
                <span onClick={() => { window.location.href = "/newsletter" }} className={Footer_Style.ExtraLink} >Newsletter</span>
            </div>
        </div >
    );
}

export default Header;
