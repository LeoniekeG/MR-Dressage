import React from "react";
import { Link } from "react-router-dom"

export default function Contact () {
    return (
        <div className="contact">
            <div className="back-button-contact">
                <Link to=".." relative="path" className="back-button-horse-detail"> &larr; <span>Terug naar home</span></Link>
            </div>
            <h1>Contact page</h1>
        </div>
    )
}