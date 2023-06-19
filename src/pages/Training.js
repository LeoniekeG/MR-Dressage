import React from "react";
import { Link } from "react-router-dom"

export default function Training () {
    return (
        <div className="training">
            <div className="back-button-trainig">
                <Link to=".." relative="path" className="back-button-horse-detail"> &larr; <span>Terug naar home</span></Link>
            </div>
            <h1>Training page</h1>
        </div>
    )
}