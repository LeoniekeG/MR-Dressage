import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {

    return (
        <div className="layout">
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}