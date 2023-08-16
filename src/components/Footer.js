import React from "react"
//import instagrambutton from "../images/instagrambutton.png"
//import facebookbutton from "../images/facebookbutton.png"
import buttonfacebook from "../images/buttonfacebook.png"
import buttoninstagram from "../images/buttoninstagram.png"

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-buttonbox">
                <h3 className="footer-text">Volg het laatste nieuws op:</h3>

                <a href="https://www.facebook.com/marritfardau"  target="blank"><img src={buttonfacebook} className="fb-image-footer" /></a>
                
                <a href="https://www.instagram.com/marritreusien_dressage/" target="blank"><img src={buttoninstagram} className="insta-image-footer" /></a>

                <h3 className="footer-text">©Marrit Reusien Dressage</h3>
            </div>
            <div className="leonieke-gootjes">
                <p>Website by Leonieke Gootjes</p>
            </div>
        </div>
    )
}
