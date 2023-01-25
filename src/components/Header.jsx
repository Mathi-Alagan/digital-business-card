import React from "react";
import person from "../assets/Mathi-img.jpg"

export default function Header(){
    return(
        <div className="header">
            <img src={person} alt="Mathi Alagan" className="person-img"/>
            <div className="person-info">
                <h2 className="person-name">Mathi Alagan T</h2>
                <h4 className="person-role">Frontend Developer</h4>
                <p className="person-site">mathialagan.website</p>
            </div>
        </div>
    )
}