import React from "react"

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-buttonbox">
                <h3 className="footer-text">Volg het laatste nieuws op:</h3>
                <a href="https://www.facebook.com/marritfardau"  target="blank"><button className="footer-button">Facebook</button></a>
                <a href="https://www.instagram.com/marritreusien_dressage/" target="blank"><button className="footer-button">Instagram</button></a>
                <h3 className="footer-text">©Marrit Reussien Dressage</h3>
            </div>
            <div className="leonieke-gootjes">
                <p>Website by Leonieke Gootjes</p>
            </div>
        </div>
    )
}