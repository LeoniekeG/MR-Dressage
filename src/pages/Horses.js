import React from "react";
//import { useNavigate } from "react-router-dom";
import horsedata from "../data/horsedata.json"
import List from "./List";

export default function Horses () {

    const [horses, setHorses] = React.useState(horsedata);
    //const navigate = useNavigate();

    /*
    function handleClick (horseid) {
        navigate(`/horses/${horseid}`);
    }
    */
    return (
        <div className="horses">
            <List horses={horses} title="Paarden:"/>
            <List horses={horses.filter((horse) => horse.forsale === "yes")} title="Te koop:"/>
        </div>
    )
}







