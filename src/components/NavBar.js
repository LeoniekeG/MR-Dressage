import React from "react"
import bgImg from "../images/Logo.png"
import { NavLink } from "react-router-dom"

export default function NavBar() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#8B7500"
    }

    return (
        <nav className="navbar">
            <img src={bgImg} className="logo-image" alt="logo"/>
            <div className="links">
                <NavLink to="/" style={({ isActive }) => isActive ? activeStyles : null}>Home</NavLink>
                <NavLink to="aboutme" style={({ isActive }) => isActive ? activeStyles : null}>Over mij</NavLink>
                <NavLink to="horses" style={({ isActive }) => isActive ? activeStyles : null}>Paarden</NavLink>
                <NavLink to="instruction" style={({ isActive }) => isActive ? activeStyles : null}>Instructie</NavLink>
                <NavLink to="training" style={({ isActive }) => isActive ? activeStyles : null}>Training</NavLink>
                <NavLink to="horsetaxi" style={({ isActive }) => isActive ? activeStyles : null}>Paardentaxi</NavLink>
                <NavLink to="calendar" style={({ isActive }) => isActive ? activeStyles : null}>Kalender</NavLink>
                <NavLink to="contact" style={({ isActive }) => isActive ? activeStyles : null}>Contact</NavLink>
            </div>
        </nav>
    )
}