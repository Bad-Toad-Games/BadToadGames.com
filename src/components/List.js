import React from "react"
import List_Style from "../styles/List.module.css"
import { NavLink } from "react-router-dom";

function List() {
    return (
        <div className={List_Style.Main}>
            <NavLink to="/merch" className={List_Style.Button}>MERCH</NavLink>
            <NavLink to="/tabletop-games" className={List_Style.Button}>TABLETOP<br />GAMES</NavLink>
            <NavLink to="/games" className={List_Style.Button}>VIDEO GAMES</NavLink>
            <NavLink to="/projects" className={List_Style.Button}>PROJECTS</NavLink>
            <NavLink to="/contributors" className={List_Style.Button}>CONTRIBUTORS</NavLink>
        </div >
    );
}

export default List;
