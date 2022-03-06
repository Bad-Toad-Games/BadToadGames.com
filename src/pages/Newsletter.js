import React from "react"
import Newsletter_Style from "../styles/Newsletter.module.css"

function Newsletter() {
    return (
        <div className={Newsletter_Style.Main} >
            <div className={Newsletter_Style.Newsletter} >
                <h1>Newsletter</h1>
                <p>
                    Want to receive news on our progress right in your inbox? Enter your email below and we’ll send you our newsletter… just as soon as we teach the Toads to use keyboards.
                </p>
                <input className={Newsletter_Style.Input} type="text" placeholder="Email" /><br />
                <div className={Newsletter_Style.CheckBox}>
                    <div className={Newsletter_Style.Box_Parent}>
                        <input className={Newsletter_Style.Box} type="checkbox" />
                        <label>I authorize Bad Toad Games to contact me via email </label>
                    </div>
                    <br />
                    <div className={Newsletter_Style.Box_Parent}>
                        <input className={Newsletter_Style.Box} type="checkbox" />
                        <label>I want to receive inormation on special promotions and offers from Bad Toad Games </label>
                    </div>
                </div>
                <br />
                <button>Submit</button>
                <p>
                    Rest assured that we hate junk email just as much as you, and the Toads hate having to sort it, so we will never give/sell your information to Third parties without your consent.
                </p>
            </div>
        </div >
    );
}

export default Newsletter;
