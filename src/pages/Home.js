import React from "react"
import Home_Style from "../styles/Home.module.css"

function Home() {
    return (
        <div className={Home_Style.Main} >
            <div className={Home_Style.Content}>
                <h1 className={Home_Style.Content_Title}>WHO WE ARE</h1>
                <div className={Home_Style.Content_Paragraph_Parent}>
                    <p className={Home_Style.Content_Paragraph}>
                        We are the “The Brothers Toad”. Brothers, fathers, and gamers. After years of gaming in the tabletop and digital areas, we decided to throw our hat into the ring and bring our ideas to life.
                    </p>
                </div>
                <br />
                <h1 className={Home_Style.Content_Title}>OUR MISSION</h1>
                <div className={Home_Style.Content_Paragraph_Parent}>
                    <p className={Home_Style.Content_Paragraph}>
                        We want to create both tabletop and digital games that bring a spark of something special to the lives of everyone that plays them, whether that’s a Game Master breaking down due to a Rouge’s actions, or simply escaping into a digital world of adventure. We want to help make memories.
                    </p>
                </div>
                <br />
                <div className={Home_Style.Content_Paragraph_Parent}>
                    <p className={Home_Style.Content_Paragraph}>
                        Please follow us on the sites<br /> below for updates.<br />
                        Thank you for the interest and support.<br />
                        The Brothers of Bad Toad<br />
                        <span className={Home_Style.Signature}>
                            J & C
                        </span>

                    </p>
                </div>
            </div>
        </div >
    );
}

export default Home;
