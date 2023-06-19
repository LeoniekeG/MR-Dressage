import React from "react";
import { Link } from "react-router-dom"

export default function Instruction () {
    return (
        <div className="instruction">
            <div className="back-button-instruction">
                <Link to=".." relative="path" className="back-button-horse-detail"> &larr; <span>Terug naar home</span></Link>
            </div>
            <h1>Instruction page</h1>
        </div>
    )
}