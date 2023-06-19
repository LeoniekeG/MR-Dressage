import React from "react";
import { Link } from "react-router-dom"
import calendardata from "../data/calendardata.json"
import emailcalendar from "../images/emailcalendar.png"

export default function Calendar () {

    const [data, setData] = React.useState(calendardata)

    const dataStyles = {
        fontWeight: "lighter",
        color: "#8B7500"
    }

    return (
        <div className="calendar">
            <div className="back-button-instruction">
                <Link to=".." relative="path" className="back-button-calendar"> &larr; <span>Terug naar home</span></Link>
            </div>
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
                    <a href={`mailto:marritfardau@hotmail.com?subject=${data.activity}`}><button><img src={emailcalendar} className="image-email"/> Opgeven</button></a>
                </div>
            ))}
            </div>
        </div>
    )
}