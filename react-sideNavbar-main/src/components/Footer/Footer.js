import React from "react";
import './Footer.css';
import LG from '../../Imgs/Lg.png'

export default function Footer(){
    return(
        <div className="Footers">
            <div className="FooterBotom">
                <div className="FooterText">
                    <img src={LG} className="LG" />
                    <p>Pond Club</p>
                </div>
                <div className="text">
                    <p>Home</p>
                    <p>Lorem</p>
                </div>
                <div className="text">
                    <p>About</p>
                    <p>Lorem Impose</p>
                </div>
                <div className="text">
                    <p>Contact Us</p>
                    <p>+254 7123456789</p>
                </div>
                <div className="text">
                    <p>Service</p>
                    <p>Team Work</p>
                </div>
            </div>
            <hr/>
            <div className="FooterBotom">
                <div className="footerBox">
                   <i class="bi bi-facebook"></i>
                   <i class="bi bi-twitter"></i>
                   <i class="bi bi-linkedin"></i>
                   <i class="bi bi-google"></i>
                </div>
            </div>
        </div>
    )
}