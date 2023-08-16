import React from "react";
import { Link } from "react-router-dom"
import calendardata from "../data/calendardata.json"
import submit from "../images/submit.png"
import submitbutton from "../images/submitbutton.png"

export default function Calendar () {

    const [data, setData] = React.useState(calendardata)

    const dataStyles = {
        fontWeight: "lighter",
        color: "#8B7500"
    }

    return (
        <div className="calendar">
            <h2>Kalender 2023:</h2>
            <div className="calendar-box">
            {data.map((data) => (
                <div className="calendar-display">
                    <h3>{data.activity}</h3>
                    <h5>Datum: {data.date}</h5>
                    <h5>Prijs: € {data.price},-</h5>
                    <h5>Gegeven door: {data.by}</h5>
                    <h5>Locatie: {data.location}</h5>
                    <h5>Wat gaan we doen:</h5>
                    <p>{data.description}</p>
                    <a href={`mailto:marritfardau@hotmail.com?subject=${data.activity}`}><img src={submitbutton} className="submit-image"/></a>
                </div>
            ))}
            </div>
        </div>
    )
}