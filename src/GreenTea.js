import React from "react";
import {NavLink} from "react-router-dom";
import "./Item.css";

function GreenTea(){
    return (
        <div className="Item-container">
        
            <div className="Item-header">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="Item-body">
                <h1>You must be thirsty!</h1>
                <img alt="green tea" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36936/green-tea-drink-clipart-md.png"></img>

            </div>
        </div>
    );
}

export default GreenTea;