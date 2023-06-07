import React from "react";
//import { NavLink } from "react-router-dom";

export default function List ({ horses, title }) {
    return (
        <div className="list">
            <h3>{title}</h3>
            <div className="horse-list"> 
                {horses.map((horse) => (
                    <div className="horse-display" key={horse.id}>
                        <h4>{horse.name}</h4>
                        <p>Afstamming: {horse.by}</p>
                        <img src={horse.imageUrl} alt="horse" className="horse-img"/>
                        {/*<div>
                            <NavLink to=":id"><button className="horse-button" onClick={handleClick}>Lees alles over {horse.name}</button></NavLink>
                        </div>*/}
                    </div>
                ))}
            </div>
        </div>
    )
}