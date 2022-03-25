import React from "react"
import Contributors_Style from "../styles/Contributors.module.css"

function Home() {
    return (
        <div className={Contributors_Style.Main} >
            <div className={Contributors_Style.Content}>
                <h1 className={Contributors_Style.Content_Title}>ARTISTS</h1>
                <div className={Contributors_Style.Content_Paragraph_Parent}>
                    <p className={Contributors_Style.Content_Paragraph}>
                        Logo: <a href="https://www.instagram.com/p/CU8d0DEqK9n/?utm_source=ig_web_copy_link">@Ntina_arts</a>
                    </p>
                    <p className={Contributors_Style.Content_Paragraph}>
                        Background: <a href="https://leszekwo.artstation.com/">Leszek Woźniak</a>
                    </p>
                </div>
                <br />
                <h1 className={Contributors_Style.Content_Title}>DEVELOPERS</h1>
                <div className={Contributors_Style.Content_Paragraph_Parent}>
                    <p className={Contributors_Style.Content_Paragraph}>
                        WEBSITE DEVELOPER: <a className={Contributors_Style.Thecoolerofthethree} href="https://stianwiu.me">StianWiu(Pignuuu)</a>
                    </p>
                </div>
                <br />

                <div className={Contributors_Style.Content_Paragraph_Parent}>
                    <p className={Contributors_Style.Content_Paragraph}>
                        Please support those who supported us. <br />
                        <span className={Contributors_Style.Signature}>
                            J & C
                        </span>
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Home;
