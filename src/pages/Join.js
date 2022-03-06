import React from "react"
import Join_Style from "../styles/Join.module.css"

function Join() {
    return (
        <div className={Join_Style.Main} >
            <div className={Join_Style.Content}>
                <div className={Join_Style.Warning}>
                    <h1>CURRENT OPENINGS</h1>
                </div>
                <div className={Join_Style.Content_Paragraph_Parent}>
                    <p className={Join_Style.Content_Paragraph}>
                        While your enthusiasm to join our small team is greatly appreciated, we are not currently hiring. If you’d like to be considered for a position later, please email <a href="mailto:Employment@BadToadGames.com">Employment@BadToadGames.com</a> and if the Toads pick you, we’ll contact you. <br /> <br />
                        Please include your resume and example work (if applicable)

                    </p>
                </div>
                <br />
                <div className={Join_Style.Warning}>
                    <h1>COMMISSIONED WORK</h1>
                </div>
                <div className={Join_Style.Content_Paragraph_Parent}>
                    <p className={Join_Style.Content_Paragraph}>
                        If you’re an artist, model designer, or just looking for commissioned based work and think we’d be a good fit please email <a href="mailto:Commissions@BadToadGames.com">Commissions@BadToadGames.com</a>, include a samples of your work and if the Toads like what they see, we’ll contact you.
                    </p>
                </div>
                <br />
                <div className={Join_Style.Warning}>
                    <h3>Prospective Investors, use the Support link below</h3>
                </div>
                <div className={Join_Style.Content_Paragraph_Parent}>
                    <p className={Join_Style.Content_Paragraph}>
                        Please follow us on the sites<br /> below for updates.<br />
                        Thank you for the interest and support.<br />
                        The Brothers of Bad Toad<br />
                        <span className={Join_Style.Signature}>
                            J & C
                        </span>

                    </p>
                </div>
            </div>
        </div >
    );
}

export default Join;
