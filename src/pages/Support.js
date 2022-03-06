import React from "react"
import Support_Style from "../styles/Support.module.css"

function Support() {
    return (
        <div className={Support_Style.Main} >
            <div className={Support_Style.Content}>
                <div className={Support_Style.Warning}>
                    <h1>GENERAL DONATIONS</h1>
                </div>
                <div className={Support_Style.Content_Paragraph_Parent}>
                    <p className={Support_Style.Content_Paragraph}>
                        If you’ve been inspired by what you’ve seen so far, be it our dream of helping Gamers make memories, the products we’re working on, or just cause you want to feed the Toads so they don’t eat us, then this is for you. We accept donations through PayPal. Rest assured that any money you donate to us goes towards developing our products and improving our ability to work with you.
                    </p>
                </div>
                <br />
                <div className={Support_Style.Warning}>
                    <h1>INVESTORS</h1>
                </div>
                <div className={Support_Style.Content_Paragraph_Parent}>
                    <p className={Support_Style.Content_Paragraph}>
                        If you’re a prospective investor and want to discuss possibilities with us, please email us at <a href="mailto:Invest@BadToadGames.com">Invest@BadToadGames.com</a>, we’ll consult the Toads and arrange a time to discuss any offers or answer questions.
                    </p>
                </div>
                <br />
                <div className={Support_Style.Warning}>
                    <h1>STREAMERS</h1>
                </div>
                <div className={Support_Style.Content_Paragraph_Parent}>
                    <p className={Support_Style.Content_Paragraph}>
                        If you want to create a streaming partnership with us, please email <a href="mailto:Streams@BadToadGames.com">Streams@BadToadGames.com</a>, include your streaming sites/name so the Toads can review them.
                    </p>
                </div>
                <br />
                <div className={Support_Style.Content_Paragraph_Parent}>
                    <p className={Support_Style.Content_Paragraph}>
                        Please follow us on the sites<br /> below for updates.<br />
                        Thank you for the interest and support.<br />
                        The Brothers of Bad Toad<br />
                        <span className={Support_Style.Signature}>
                            J & C
                        </span>

                    </p>
                </div>
            </div>
        </div >
    );
}

export default Support;
