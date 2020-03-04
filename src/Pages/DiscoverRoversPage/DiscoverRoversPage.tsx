﻿import React from 'react';
import {Photocard} from "../../Photocard/Photocard";
import "./DiscoverRoversPage.scss"
import {Link} from "react-router-dom";

export function DiscoverRoversPage() {
    return (
        <div className="discoverRovers">
            <h1>Discover Rovers</h1>
            <h3>Meet the Rovers on The Red Planet</h3>
            <Link to={`${window.location.pathname}/sojourner`}>
                <Photocard imageUrl={"https://spaceplace.nasa.gov/mars-sojourner/en/sojourner-first.en.jpg"}
                           altText={"Sojourner Rover"}
                           imageTitle={"Sojourner Rover"}
                           description={"Sojourner is a rover that landed on Mars in 1997 in a location called Ares Vallis where it explored and took many photos."}/>
            </Link>
            <Link to={`${window.location.pathname}/spiritandopportunity`}>
                <Photocard imageUrl={"https://spaceplace.nasa.gov/mars-spirit-opportunity/en/spirit-opportunity.en.jpg"}
                           altText={"Spirit and Opportunity Rovers"}
                           imageTitle={"Spirit and Opportunity Rovers"}
                           description={"Spirit and Opportunity are twin rovers that were made to learn more about the planet Mars."}/>
            </Link>
            <Link to={`${window.location.pathname}/curiosity`}>
                <Photocard imageUrl={"https://spaceplace.nasa.gov/mars-curiosity/en/curiosity-here.en.jpg"}
                       altText={"Curiosity Rover"}
                       imageTitle={"Curiosity Rover"}
                           description={"Curiosity is a rover that was sent to Mars to determine if the Red Planet ever had the proper conditions for microbial life to survive."}/>
            </Link>
        </div>
    )
}