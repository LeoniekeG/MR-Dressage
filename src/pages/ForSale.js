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
