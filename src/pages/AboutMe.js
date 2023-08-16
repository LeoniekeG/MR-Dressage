import React from "react";
import { useState, useEffect } from "react";
import MRDressage5 from "../images/MRDressage (5).jpg"
import MRDressage6 from "../images/MRDressage (6).jpg"
import MRDressage4 from "../images/MRDressage (4).jpg"
import MRDressage7 from "../images/MRDressage (7).jpg"
import Logo from "../images/Logo.png"

export default function AboutMe () {
    
    return (
        <div className="about-me">
            <div className="box-1">
                <div className="text-1">
                    <h4>Een echte paardenliefhebster</h4>
                    <p>Marrit Reusien, van jongs af aan een enthousiaste paardenliefhebster, heeft haar passie voor het opleiden en trainen van van jonge paarden, uitgebouwd tot een specialisme. Met een solide achtergrond in de paardenhouderij en een indrukwekkende lijst van prestaties, heeft Marrit haar eigen bedrijf, Marrit Reusien Dressage, gevestigd in Appelscha bij de South Side Stables. Door haar uitgebreide ervaring, zowel als ruiter als instructeur, heeft ze bewezen jonge paarden een goede basis te kunnen geven voor prestaties op latere leeftijd in de (internationale) dressuursport. </p>
                </div>
                <div className="text-1">
                    <h4>Marrit haar opleiding en ervaring</h4>
                    <p>De weg naar succes begon voor Marrit Reusien met haar opleiding in de paardenhouderij. Ze koos bewust voor een degelijke basis en studeerde af met uitstekende resultaten. Tijdens haar opleiding deed ze waardevolle kennis op over de anatomie, voeding en verzorging van paarden en leerde het praktijkvak tijdens stage bij Marian Staal en werkte bij Stal de Brinkhof. Dit legde een stevige basis voor haar latere werk als jonge paarden specialist.</p>
                </div>
                <div className="text-1">
                    <h4>Opleiden van jonge paarden</h4>
                    <p>Marrit's vaardigheden als jonge paarden specialist hebben de aandacht getrokken van vele paardeneigenaren. Ze heeft zich bewezen in het klaarmaken van talloze paarden, waarbij ze haar expertise en geduld gebruikt om jonge dieren te trainen en te begeleiden naar succes op verschillende niveaus. Haar vermogen om zich aan te passen aan de individuele behoeften van elk paard heeft haar een goede reputatie opgeleverd.</p>
                </div>
            </div>
            <div className="box-slider">
                <div className="text-slider">
                    <h4>Succes in de dressuursport</h4>
                    <p>Marrit Reusien heeft haar bekwaamheid als ruiter en trainer bewezen door haar successen in de dressuurwereld. Met haar vastberadenheid en toewijding heeft ze enkele van de meest uitdagende paarden kunnen trainen en succesvol kunnen voorbereiden op prestigieuze wedstrijden. Haar gestructureerde opbouw en technische vaardigheden hebben haar geholpen om een goede band met verschillende paarden op te bouwen en succesvol te presteren op wedstrijden. Voorbeelden hiervan zijn: Meerdere malen Regio Kampioen. Meerdere malen Nederlands Kampioen fries ras. Brons op KNHS Kampioenschap. Een 9e plaats Pavo cup 4-jarige paarden.</p>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <img src={MRDressage5} className="slider-image-1" alt="mrdressage"/>
                        <img src={Logo} className="slider-image-2" alt="mrdressage"/>
                        <img src={MRDressage6} className="slider-image-3" alt="mrdressage"/>
                        <img src={Logo} className="slider-image-2" alt="mrdressage"/>
                    </div>
                </div>
                <div className="text-slider">
                    <h4>Ervaring met de jonge Friese hengsten van het KFPS</h4>
                    <p>Naast haar succes in de dressuurwereld, heeft Marrit Reusien ook waardevolle ervaring opgedaan met het trainen van de jonge Friese hengsten van het Koninklijk Friesch Paarden-Stamboek (KFPS). Als jonge paarden specialist heeft ze een speciale affiniteit ontwikkeld voor het werken met deze trotse en majestueuze dieren. Haar beheersing van de specifieke behoeften en uitdagingen die de Friese paarden met zich meebrengen, heeft haar in staat gesteld om mooie resultaten te behalen met deze edele rassen.</p>
                </div>
            </div>
            <div className="box-2">
                <div className="text-2">
                    <h4>Instructeur van verschillende ruiters</h4>
                    <p>Marrit Reusien heeft haar kennis en vaardigheden niet alleen toegepast op haar eigen training en wedstrijden, maar heeft ook haar expertise gedeeld als instructeur van verschillende ruiters. Haar vermogen om zich aan te passen aan de behoeften van haar leerlingen en haar geduldige en bemoedigende benadering hebben haar tot een gewilde instructeur gemaakt. Ze is in staat om zowel beginnende ruiters te begeleiden bij het opbouwen van een sterke basis als ervaren ruiters te helpen hun prestaties naar een hoger niveau te tillen.</p>
                </div>
                <div className="text-2">
                    <h4>Marrit Reusien Dressage: Een groeiend bedrijf</h4>
                    <p>Marrit heeft haar passie voor paarden omgezet in het bedrijf, Marrit Reusien Dressage, gevestigd in Appelscha bij de South Side Stables. Hier biedt ze haar diensten aan als jonge paarden specialist, trainer en instructeur. Het bedrijf heeft een uitstekende reputatie opgebouwd dankzij Marrit's vastberadenheid, toewijding en succesvolle resultaten. Afspraak is afspraak. Ze heeft een team van professionals samengesteld die dezelfde passie en toewijding delen, waardoor ze een unieke omgeving creëert waarin zowel paarden als ruiters kunnen gedijen.</p>
                </div>
                <div className="text-2">
                    <h4>Eigen ervaring op Lichte Tour niveau</h4>
                    <p>Naast haar werk als trainer heeft Marrit Reusien haar eigen paardentraining naar nieuwe hoogten gebracht. Ze heeft persoonlijk deelgenomen aan wedstrijden op lichte tour niveau, waarbij ze haar vaardigheden en toewijding heeft laten zien. Haar eigen ervaring als ruiter heeft haar geholpen om een dieper begrip te ontwikkelen van de uitdagingen en voldoening die gepaard gaan met het rijden op dit niveau. Deze ervaring heeft haar ook in staat gesteld om een nog betere instructeur te worden, omdat ze uit de eerste hand begrijpt wat ruiters doormaken tijdens hun training en wedstrijden.</p>
                </div>
            </div>
        </div>
    )
}

/*
const [currentSlide, setCurrentSlide] = useState(0);

    const sliderData = [
        {image: "../horseimage/noblemanmrd.jpg"},
        {image: "../horseimage/thomasvantwold.jpg"}
    ]

    const slideLength = sliderData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 3000;

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect (() => {
        setCurrentSlide(0)
    }, [])

    useEffect (() => {
        if(autoScroll) {
            auto()
        }
    }, [currentSlide])

    const nextSlide = (() => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide +1)
    })

    const Slider = () => {
        return (
            <div className="slider">
                {sliderData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? "slide currennt" : "slide"} key={index}> 
                            {index === currentSlide && (
                                <div>
                                    <img src={slide.image} alt="slide" />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        )
    }









    const getImages = sliderData.map((data) => {
        return(
        <div className="slider-images">
            <img src={data[counter]} alt={"sliderImage"} />
        </div>
        )
    })

    const showImages = (() => {
        counter ++;
        setInterval(getImages, 3000)
    })


    const imageBox = document.getElementById("image-box")
    let imageData = [{id: "img1", imgUrl: "../horseimage/sliderimage1.jpg"}, {id: "img2", imgUrl: "../horseimage/logo.png"}, {id: "img3", imgUrl: "../horseimage/sliderimage2.jpg"}]
    const counter = 0;

    /*const getImage = imageData.map((data) => {

        return(
            <div className="image-box">
                <img src={data.imgUrl} className="map-image"/>
            </div>
        )
    })

    const showImage = (() => {

        if(counter >= imageData.length) {
            counter = 0;
        }

        imageBox = imageData.imgUrl[counter];
        counter ++;
    }) 

    const showImage = (() => {
        if (counter >= imageData.length) {
            counter = 0;
        }

        counter ++;

        imageBox = imageData.map((data) => {
            return (
                
            )
        })
    })

    setInterval(showImage, 3000);


    */