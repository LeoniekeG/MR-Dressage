import React from "react";
import phonenumber from "../images/phonenumber.png"

export default function Training () {

    return (
        <div className="training">
            <h1>Training page</h1>
            <div className="pop-up-container">
                <div className="pop-up">
                    <h3>Laat je paard professioneel trainen!</h3>
                    <p>Ik heb momenteel nog plek voor trainingspaarden. Wil jij je paard professioneel door mij laten (door)trainen en eventueel uit laten brengen? Neem dan contact met mij op.
                    </p>
                    <img src={phonenumber} className="phonenumber" alt="marritreussien"/>
                    <button>Stuur een e-mail</button>
                    <div className="cross"> x </div>
                </div>
            </div>
        </div>
    )
}