import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/App.css'
import '../../assets/css/landing_page.css'

import BackgroundImage from '../../assets/images/bg_landingpage.png'

export default function LandingPage() {
    return (
        <Fragment>
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Welcome to SoGen</h1>
            <p className="main-para text-center"></p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
            </div>
        </header>
        <Footer/>
        </Fragment>
     
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed by Sick Duck Team</p>
    )
}

const FooterStyle = {
    background: "",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
