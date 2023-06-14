import React from "react";
import calendardata from "../data/calendardata.json"
import emailcalendar from "../images/emailcalendar.png"

export default function Calendar () {

    const [data, setData] = React.useState(calendardata)

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
                    <a href="mailto:marritfardau@hotmail.com?subject={$data.activity}"><button><img src={emailcalendar} className="image-email"/> Opgeven</button></a>
                </div>
            ))}
            </div>
        </div>
    )
}