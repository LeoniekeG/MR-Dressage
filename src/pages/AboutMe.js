import React from "react";
import { Link } from "react-router-dom";

export default function AboutMe () {
    return (
        <div className="about-me">
            <div className="back-button-about-me">
                <Link to=".." relative="path" className="back-button-horse-detail"> &larr; <span>Terug naar home</span></Link>
            </div>
            <h1>About Me page</h1>
        </div>
    )
}