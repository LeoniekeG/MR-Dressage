import React from "react";
import { useParams } from "react-router-dom";
import horsedata from "../data/horsedata.json"

export default function HorseDetail () {
    const [horses, setHorses] = React.useState(horsedata);
    const { id } = useParams();
    const horseId = horses.find((horse) => horse.id === Number(id)); 
  
    const horseElement = horseId ? (
        <div key={horseId.id} className="horse-details">
            <div className="horse-detail-text">
                <h3>{horseId.name}</h3>
                <h5>Afstamming: {horseId.by}</h5>
                <h5>Geboortejaar: {horseId.born}</h5>
                <div><p>Omschrijving: {horseId.about} </p></div>
            </div>
            <div className="horse-details-photo">
                <img src={horseId.imageUrl} alt={horseId.name}/>
            </div>
        </div>
    ) : <h3>Pagina niet gevonden...</h3> 

    return (
        <div className="horse-detail-box">
            {horseElement}
            <div className="box-gold"></div>
        </div>
    );
}