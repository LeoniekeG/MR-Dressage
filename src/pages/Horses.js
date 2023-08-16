import React from "react";
import { Link } from "react-router-dom";
import horsedata from "../data/horsedata.json"
import List from "./List";

export default function Horses () {

    const [horses, setHorses] = React.useState(horsedata);
 
    return (
        <div className="horses-box">
            <div className="horses">
                <List horses={horses} title="Paarden:"/>
                <List horses={horses.filter((horse) => horse.forsale === "yes")} title="Te koop:"/>
                <List horses={horses.filter((horse) => horse.sold === "yes")} title="Verkocht:"/>
            </div>
        </div>
    )
}







