import React from "react";
import { NavLink } from "react-router-dom";
import MRDressage23 from "..//images/MRDressage23.jpg"
import MRDressage24 from "../images/MRDressage24.jpg"
import MRDressage25 from "../images/MRDressage25.jpg"
import MRDressage26 from "../images/MRDressage26.jpg"
import star from "../images/star.png"
import truck from "../images/truck.png"
import line from "../images/line.png"
import horsetruck4 from "../images/horsetruck4.png"
import truckback from "../images/truckback.png"
import driver from "../images/driver.png"
import price from "../images/price.png"
import safe from "../images/safe.png"
import stars from "../images/stars.png"
import forsale from "../images/forsale.png"
import MRdressage8 from "../images/MRDressage8.jpg"
import MRdressage9 from "../images/MRDressage9.jpg"
import readmore from "../images/readmore.png"
import contact from "../images/contact.png"

export default function Home () {

    return (
        <div className="home">
            <h2>Welkom op de website van MR Dressage</h2>
            <div className="images-home">
                <div>
                    <h3 className="home-h3-horses">Ga naar "paarden"</h3>
                    <NavLink to="horses" className="home-links"><img src={MRDressage25} className="home-image" alt="dressage25"/>
                    </NavLink>
                </div>
                <div>
                    <h3 className="home-h3-instruction">Ga naar "instructie"</h3>
                    <NavLink to="instruction" className="home-links"><img src={MRDressage23} className="home-image" alt="dressage23"/>
                    </NavLink>
                </div>
                <div>
                    <h3 className="home-h3-training">Ga naar "training"</h3>
                    <NavLink to="training" className="home-links"><img src={MRDressage26} className="home-image" alt="dressage26"/>
                    </NavLink>
                </div>
            </div>

            <div className="home-text">
                <p>Mijn naam is Marrit Reusien en ik ben al jaren actief in de dressuursport. Mijn stal is gevestigd in Appelscha, maar je kan ook bij mij terecht voor lessen op je eigen locatie. Dierenwelzijn staat bij mij hoog in het vaandel. Mijn specialiteit is het rijden van Friese paarden en het opleiden van paarden tot Lichte Tour niveau. Op deze website kan je alles vinden over de diensten waarvoor je bij mij terecht kan; van privélessen tot het laten trainen van je paard of maak gebruik van mijn paardentaxi.</p>
            </div>

            <div className="home-service">
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Doortrainen van jonge paarden</h6>
                </div>
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Het klasseren van paarden voor bijvoorbeeld het sportpredicaat</h6>
                </div>
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Het opleiden voor een aanlegtest (IBOP) of jonge paarden wedstrijden</h6>
                </div>
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Het begeleiden van combinaties; recreatie of wedstrijdrijders van jong tot oud</h6>
                </div>
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Verkoop van een paard</h6>
                </div>
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Aankoopadvies van een paard</h6>
                </div>
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Instructie of clinics op maat</h6>
                </div>
                <div className="home-service-child">
                    <img src={star} className="star-image" alt="ster"/>
                    <h6>Paardentaxi, veilig en zorgeloos je paard laten vervoeren</h6>
                </div>
                
            </div>

            <div className="boxes-home">
                <div className="box-about-me">
                    <p>Marrit Reusien, van jongs af aan een enthousiaste paardenliefhebster, heeft haar passie voor het opleiden en trainen van van jonge paarden, uitgebouwd tot een specialisme. Met een solide achtergrond in de paardenhouderij en een indrukwekkende lijst van prestaties, heeft Marrit.....
                    </p>
                    <NavLink to="aboutme"><img src={readmore} className="read-more-image" alt="Readmore"/></NavLink>
                </div>
                <img src={MRDressage24} className="home-image-box" alt="dressage24"></img>
                <div className="box-calendar">
                    <p>MRDressage organiseert het hele jaar door diverse leuke en leerzame clinics op fijne binnen en buitenlocaties. Iedereen kan hiervoor inschrijven, ook als je geen lesklant bent. Nieuwsgierig geworden? Kijk dan snel in de kalender en ontdek welke workshop jij wilt volgen met je paard of pony.
                    </p>
                    <NavLink to="calendar"><img src={readmore} className="read-more-image" alt="Readmore"/></NavLink>
                </div>
            </div>

            <div className="horsetruck">
                <img src={truck} className="truck-image" alt="paardenvrachtwagen"/>
                <img src={line} className="line-image" alt="lijn"/>
                <img src={horsetruck4} className="horsetruck-image" alt="Paardentaxi"/>
                <img src={line} className="line-image" alt="lijn"/>
                <img src={truckback} className="truck-image" alt="paardenvrachtwagen"/>
            </div>

            <NavLink to="horsetaxi" className="horsetruck-links">
                <div className="horsetruck-logos">
                    <div className="horsestruck-symbols">
                        <img src={driver} className="symbols" alt="chauffeur"/>
                        <h6>Vervoer inclusief chauffeur</h6>
                    </div>
                    <div className="horsestruck-symbols">
                        <img src={stars} className="symbols" alt="nieuw"/>
                        <h6>Mooie nieuwe vrachtwagen</h6>
                    </div>
                    <div className="horsestruck-symbols">
                        <img src={safe} className="symbols" alt="veilig"/>
                        <h6>Veilig en comfortabel</h6>
                    </div>
                    <div className="horsestruck-symbols">
                        <img src={price} className="symbols" alt="prijs"/>
                        <h6>Scherpe prijzen</h6>
                    </div>
                </div>
            </NavLink>

            <img src={line} className="line" alt="lijn"/>

            <div className="box-contact-for-sale">
                <div><img src={MRdressage9} className="home-bottom-image" alt="MRDressage9"/></div>
                <div className="box-for-sale">
                    <NavLink to="forsale">
                        <img src={forsale} className="for-sale-image" alt="TeKoop"/>
                    </NavLink>
                </div>
                <div className="box-contact">
                    <NavLink to="contact">
                        <img src={contact} className="contact-image" alt="contact"/>
                    </NavLink>
                </div>
                <div><img src={MRdressage8} className="home-bottom-image" alt="MRDressage8"/></div>
            </div>
        </div>
    )
}