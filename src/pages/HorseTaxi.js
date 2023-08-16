import React from "react";
import truck from "../images/truck.png"

export default function AboutMe () {
    return (
        <div className="horse-taxi">
            <h1>MR Paardentaxi</h1>
            <div className="road">
                <img src={truck} className="horsetruck-animation" alt="mrpaardentaxi"/>
            </div>
        </div>
    )
}