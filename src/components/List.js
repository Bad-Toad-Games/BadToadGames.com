import React from "react"
import List_Style from "../styles/List.module.css"
import { NavLink } from "react-router-dom";

function List() {
    return (
        <div className={List_Style.Main}>
            <NavLink to="/Merch" className={List_Style.Button}>MERCH</NavLink>
            <NavLink to="/Tabletop" className={List_Style.Button}>TABLETOP<br />GAMES</NavLink>
            <NavLink to="/Video-Games" className={List_Style.Button}>VIDEO GAMES</NavLink>
            <NavLink to="/Projects" className={List_Style.Button}>PROJECTS</NavLink>
        </div >
    );
}

export default List;
