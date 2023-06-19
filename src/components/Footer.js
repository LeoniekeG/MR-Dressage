import React from "react"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-buttonbox">
                <h3 className="footer-text">Volg het laatste nieuws op:</h3>

                <a href="https://www.facebook.com/marritfardau"  target="blank"><button className="footer-button"><img src={facebook} className="fb-image-footer" /></button></a>
                
                <a href="https://www.instagram.com/marritreusien_dressage/" target="blank"><button className="footer-button"><img src={instagram} className="insta-image-footer" /></button></a>

                <h3 className="footer-text">©Marrit Reusien Dressage</h3>
            </div>
            <div className="leonieke-gootjes">
                <p>Website by Leonieke Gootjes</p>
            </div>
        </div>
    )
}

/*

<a href="https://www.instagram.com/marritreusien_dressage/" target="blank"><button className="footer-button">Instagram</button></a

*/