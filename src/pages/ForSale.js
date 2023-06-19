import React from "react";
import { Link } from "react-router-dom"
import horsedata from "../data/horsedata.json"
import List from "./List";

export default function ForSale () {

    const [horses, setHorses] = React.useState(horsedata);

    return (
        <div>
            <Link to=".." relative="path" className="back-button-for-sale"> &larr; <span>Terug naar home</span></Link>
            <div className="for-sale">
                <List horses={horses.filter((horse) => horse.forsale === "yes")} title="Te koop:"/>
            </div>
        </div>
    ) 
}



/*

export default function ForSale () {

    const [horses, setHorses] = React.useState(horsedata);

    return (
        <div>
            <Link to=".." relative="path" className="back-button"> &larr; <span>Terug naar alle paarden</span></Link>
            <div className="for-sale">
                <List horses={horses.filter((horse) => horse.forsale === "yes")} title="Te koop:"/>
            </div>
        </div>
    )
}

*/

/* poging 2 werkt niet

const [horses, setHorses] = React.useState(horsedata);
    const horseForSale = horses.filter((horse) => horse.forsale === "yes"); 

    const forSaleDisplay = horseForSale ? (
            <div key={horses.id} className="horse-details">
            <div className="horse-detail-text">
                <h3>{horses.name}</h3>
                <h5>Afstamming: {horses.by}</h5>
                <h5>Geboortejaar: {horses.born}</h5>
                <div><p>Omschrijving: {horses.about} </p></div>
                <img src={horses.imageUrl} alt={horses.name}/>
            </div>
        </div>
    ) : "No horses for sale"

    return (
        <div className="horse-detail-box">
            {forSaleDisplay}
        </div>
    )

*/
