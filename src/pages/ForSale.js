import React from "react";
import List from "./List";

export default function ForSale ({ horses }) {
    return (
        <div className="for-sale">
            <h1>Horses for sale</h1>
            <List horses={horses.filter((horse) => horse.forsale === "yes")} title="Te koop:"/>
        </div>
    )
}