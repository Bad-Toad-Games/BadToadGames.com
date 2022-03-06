import React from "react"
import NotFinished_Style from "../styles/NotFinished.module.css"

function NotFinished() {
    return (
        <div className={NotFinished_Style.Main} >
            <div className={NotFinished_Style.Content}>
                <div className={NotFinished_Style.Warning}>
                    <h1>UNDER CONSTRUCTION</h1>
                </div>
                <div className={NotFinished_Style.Content_Paragraph_Parent}>
                    <p className={NotFinished_Style.Content_Paragraph}>
                        While we here at Bad Toad Games, all two of us, appreciate your enthusiasm, this page isn’t quite up yet. Rest assured we are working on it just as fast as the Toads let us. To stay up to date with our progress and products please follow us at the links below.
                    </p>
                </div>
                <br />
                <div className={NotFinished_Style.Content_Paragraph_Parent}>
                    <p className={NotFinished_Style.Content_Paragraph}>
                        Thank you for the interest and support, you curious camper you.<br />
                        The Brothers of Bad Toad
                        <br />
                        <span className={NotFinished_Style.Signature}>
                            J & C
                        </span>

                    </p>
                </div>
            </div>
        </div >
    );
}

export default NotFinished;
