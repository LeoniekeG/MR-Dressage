import React from "react";
import { useParams } from "react-router-dom";
import horsedata from "../data/horsedata.json"

export default function HorseDetail () {

    const [horses, setHorses] = React.useState(horsedata)
    const { id } = useParams();

    const horseId = horses.find((horses) => horses.id === id);
    console.log(horses)

    const horseElement = horseId ? (
        <div key={horses.id} className="horse-details">
            <h2>{horses.name}</h2> 
            <h4>Afstamming: {horses.by}</h4>
            <h4>Geboortejaar: {horses.born}</h4>
            <img src={horses.imageUrl}/>
            <div><p>Omschrijving: {horses.about}</p></div>
        </div>
    ) : <h3>Loading...</h3>

    return (
        <div className="horse-detail-box"> 
            {horseElement}
        </div>
    )
}


