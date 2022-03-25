import React from "react"
import Error_Style from "../styles/Error.module.css"
import Harold from "../assets/harold.png"
function Home() {
    return (
        <div className={Error_Style.Main} >
            <div className={Error_Style.Content}>
                <a href="/">
                    <img className={Error_Style.Harold} src={Harold}></img>
                </a>
                <center>
                    <h1>Harold does not approve of where you have gone. <br /> Click Harold to go to the main page</h1>
                </center>
            </div>
        </div >
    );
}

export default Home;
