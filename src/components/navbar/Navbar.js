import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <NavLogo to="/" />
                </NavLink>
                <NavLink to="/list">
                    <Bars />
                </NavLink>
                <NavMenu>
                    <NavLink
                        to="/merch"
                        activeStyle={{ color: 'black' }}
                    >
                        MERCH
                    </NavLink>
                    <NavLink
                        to="/tabletop-games"
                        activeStyle={{ color: 'black' }}
                    >
                        TABLETOP GAMES
                    </NavLink>
                    <NavLink
                        to="/games"
                        activeStyle={{ color: 'black' }}
                    >
                        VIDEO GAMES
                    </NavLink>
                    <NavLink
                        to="/projects"
                        activeStyle={{ color: 'black' }}
                    >
                        PROJECTS
                    </NavLink>
                    <NavLink
                        to="/contributors"
                        activeStyle={{ color: 'black' }}
                    >
                        CONTRIBUTORS
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;