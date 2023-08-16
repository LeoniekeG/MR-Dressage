import React from "react";
import { useParams, Link } from "react-router-dom";
import horsedata from "../data/horsedata.json"

export default function HorseDetail () {
    const [horses, setHorses] = React.useState(horsedata);
    const { id } = useParams();
    const horseId = horses.find((horse) => horse.id === Number(id)); 
  
    const horseElement = horseId ? (
        <div key={horseId.id} className="horse-details">
            <div className="horse-detail-text">
                <div style={horseId.forsale === "yes" ? {display: "block"} : {display: "none"}}><h3>Te Koop:</h3></div>
                <div style={horseId.sold === "yes" ? {display: "block"} : {display: "none"}}><h3>Verkocht</h3></div>
                <h3>{horseId.name}</h3>
                <h5>Afstamming: {horseId.by}</h5>
                <h5>Geboortejaar: {horseId.born}</h5>
                <h5>Niveau: {horseId.niveau}</h5>
                <div><p>Omschrijving: {horseId.about} </p></div>
            </div>
            <div className="horse-details-photo">
                <img src={horseId.imageUrl} alt={horseId.name}/>
            </div>
        </div>
    ) : <h3>Pagina niet gevonden...</h3> 

    return (
        <div className="horse-detail-box">
            <div className="back-button-box-horse-detail">
                <Link to=".." relative="path" className="back-button-horse-detail"> &larr; <span>Terug naar het overzicht</span></Link>
            </div>
            {horseElement}
        </div>
    );
}
