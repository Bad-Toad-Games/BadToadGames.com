import React from "react"
import Contact_Style from "../styles/Contact.module.css"

function Contact() {
    return (
        <div className={Contact_Style.Main} >
            <div className={Contact_Style.Content}>
                <div className={Contact_Style.Warning}>
                    <h1>QUESTIONS?</h1>
                </div>
                <div className={Contact_Style.Content_Paragraph_Parent}>
                    <p className={Contact_Style.Content_Paragraph}>
                        For general questions please email us at <a href="mailto:General@BadToadGames.com">General@BadToadGames.com</a> and we will get back to you as soon as we get away from the Toads.
                    </p>
                </div>
                <br />
                <div className={Contact_Style.Warning}>
                    <h1>PRODUCT ISSUES?</h1>
                </div>
                <div className={Contact_Style.Content_Paragraph_Parent}>
                    <p className={Contact_Style.Content_Paragraph}>
                        If you have issues with the quality of any of our products that you’ve purchased from us, please contact us at <a href="mailto:Products@BadToadGames.com">Products@BadToadGames.com</a>.com and we will get the Toads back in line and work to correct the issue. Please provide proof of purchase and pictures of the issue if possible.
                    </p>
                </div>
                <br />
                <div className={Contact_Style.Warning}>
                    <h3>STAY TUNED FOR OUR FAQS PAGE FOR COMMON QUESTIONS</h3>
                </div>
                <div className={Contact_Style.Content_Paragraph_Parent}>
                    <p className={Contact_Style.Content_Paragraph}>
                        Please follow us on the sites<br /> below for updates.<br />
                        Thank you for the interest and support.<br />
                        The Brothers of Bad Toad<br />
                        <span className={Contact_Style.Signature}>
                            J & C
                        </span>

                    </p>
                </div>
            </div>
        </div >
    );
}

export default Contact;
