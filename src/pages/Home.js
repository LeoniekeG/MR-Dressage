import React from "react";
import { NavLink } from "react-router-dom";
import MRDressage23 from "..//images/MRDressage23.jpg"
import MRDressage24 from "../images/MRDressage24.jpg"
import MRDressage25 from "../images/MRDressage25.jpg"
import MRDressage26 from "../images/MRDressage26.jpg"

export default function Home () {
    return (
        <div className="home">
            <h1>Marrit Reussien Dressage</h1>
            <div className="images-home">
                <div>
                    <NavLink to="horses"><img src={MRDressage25} className="home-image" alt="dressage25"/></NavLink>
                    <h4>Paarden</h4>
                </div>
                <div>
                    <NavLink to="instruction"><img src={MRDressage23} className="home-image" alt="dressage23"/></NavLink>
                    <h4>Instructie</h4>
                </div>
                <div>
                    <NavLink to="training"><img src={MRDressage26} className="home-image" alt="dressage26"/></NavLink>
                    <h4>Training</h4>
                </div>
            </div>
            <p className="home-text">hgw4hmrgkj4awbszfnms
                negm
                rnkja3whN ABEHMervfhrstbjk5ybcmbn,tjrxjdhy5.jbekuykes
                dnesrthjk,abnmrybmubttttttsrnbnsaV vqewhjwqrbtv  5yjhykhky
            </p>
            <div className="boxes-home">
                <div className="box-about-me">
                    <p>Ik ben namejhrgnasdrsezte. fnmeshjzgfnbnbgj4t. hherehjrgjxzjgrjsbc dxg drxzkgmhrfmhgjhdxbmg. jjhsshmgferj. hjghhgjhgehnsrvbs4ngrshdgbdrn.
                    jrhmgjzsvfzxbnrn uhrja urgjtrhc uhrjz uhhrkuezbmrnmnnben3 x3wrgjh jegrjzhbc  ugrjhgnb 
                    </p>
                    <NavLink to="aboutme"><button>Lees verder.....</button></NavLink>
                </div>
                <img src={MRDressage24} className="home-image-box" alt="dressage24"></img>
                <div className="box-calendar">
                    <p>MRDressage organiseert het hele jaar door diverse activiteiten. Iedereen kan hiervoor inschrijven, ook als je geen lesklant bent. Nieuwsgierig geworden? Kijk dan snel in de kalender en ontdek welke workshop jij wolt volgen met je paard of pony.
                    </p>
                    <NavLink to="calendar"><button>Lees verder.....</button></NavLink>
                </div>
            </div>
            <div className="box-contact">
                <NavLink to="contact">
                <h4>Vragen of opmerkingen? Neem gerust contact met mij op. Klik hier voor mijn contactgegevens.</h4>
                </NavLink>
            </div>
        </div>
    )
}