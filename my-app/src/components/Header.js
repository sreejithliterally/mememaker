import React from "react"
import icon from './icon.png';
export default function Header(){
    return ( 

    <header className="header">
     <img src={icon} height={100} width={100} className="header--image"/>
    <h2 className="header--title"> Meme generator</h2>
   
    
    </header>
    )
}