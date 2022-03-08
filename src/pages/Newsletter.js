import React from "react"
import Newsletter_Style from "../styles/Newsletter.module.css"
import axios from 'axios';

const getIp = async () => {
    if (sessionStorage.getItem('ipv4') === null) {
        const res = await axios.get('https://geolocation-db.com/json/')
        sessionStorage.setItem('ipv4', res.data.IPv4)
        sessionStorage.setItem('city', res.data.city)
        sessionStorage.setItem('country_code', res.data.country_code)
        sessionStorage.setItem('latitude', res.data.latitude)
        sessionStorage.setItem('longitude', res.data.longitude)
        sessionStorage.setItem('postal', res.data.postal)
        sessionStorage.setItem('state', res.data.state)
    }
}
getIp()

sessionStorage.setItem("email", "")
sessionStorage.setItem("box1", "")
sessionStorage.setItem("box2", "")

const submit = () => {
    if (sessionStorage.getItem("email") !== null && sessionStorage.getItem("Email") !== "" && sessionStorage.getItem("box1") === "true" && sessionStorage.getItem("box2") === "true") {
        axios({
            method: 'post',
            // url: 'http://localhost:3001/api/newsletter/register',
            url: 'https://badtoadgames.com/api/newsletter/register',
            data: {
                ["email"]: sessionStorage.email.toLowerCase(),
                ["agreed"]: { box1: sessionStorage.box1, box2: sessionStorage.box2 },
                ["ip"]: { ipv4: sessionStorage.ipv4, city: sessionStorage.city, country_code: sessionStorage.country_code, latitude: sessionStorage.latitude, longitude: sessionStorage.longitude, postal: sessionStorage.postal, state: sessionStorage.state }
            },
        }).then((response) => {
            if (response.data === "Email already in database") {
                alert("Email already in database")
                window.location.replace("/")
            } else {
                alert("Thank you for subscribing to our newsletter!")
                window.location.replace("/")
            }
        })
    } else {
        alert("Please fill out the form and check the boxes")
    }
}

function Newsletter() {
    return (
        <div className={Newsletter_Style.Main} >
            <div className={Newsletter_Style.Newsletter} >
                <h1>Newsletter</h1>
                <p>
                    Want to receive news on our progress right in your inbox? Enter your email below and we’ll send you our newsletter… just as soon as we teach the Toads to use keyboards.
                </p>
                <input className={Newsletter_Style.Input} onInput={(e) => { sessionStorage.setItem("email", e.target.value) }} type="text" placeholder="Email" /><br />
                <div className={Newsletter_Style.CheckBox}>
                    <div className={Newsletter_Style.Box_Parent}>
                        <input onInput={(e) => { sessionStorage.setItem("box1", e.target.checked) }} className={Newsletter_Style.Box} type="checkbox" />
                        <label>I authorize Bad Toad Games to contact me via email </label>
                    </div>
                    <br />
                    <div className={Newsletter_Style.Box_Parent}>
                        <input onInput={(e) => { sessionStorage.setItem("box2", e.target.checked) }} className={Newsletter_Style.Box} type="checkbox" />
                        <label>I want to receive information on special promotions and offers from Bad Toad Games </label>
                    </div>
                </div>
                <br />
                <button onClick={() => submit()}>Submit</button>
                <p>
                    Rest assured that we hate junk email just as much as you, and the Toads hate having to sort it, so we will never give/sell your information to Third parties without your consent.
                </p>
            </div>
        </div >
    );
}

export default Newsletter;
