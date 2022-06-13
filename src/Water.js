import React from "react";
import {NavLink} from "react-router-dom";
import "./Item.css";

function Water(){
    return (
        <div className="Item-container">
        
            <div className="Item-header">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="Item-body">
                <h1>You must be thirsty!</h1>
                <img alt="water" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76512/water-bottle-clipart-xl.png"></img>

            </div>
        </div>
    );
}

export default Water;