import React from "react";
import {NavLink} from "react-router-dom";
import "./Item.css";

function Latte(){
    return (
        <div className="Item-container">
        
            <div className="Item-header">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="Item-body">
                <h1>You must be thirsty!</h1>
                <img alt="latte" src="https://cdn.shopify.com/s/files/1/0535/9180/2038/products/bottle-VANILLA-LATTE16_1024x1024.png?v=1616207194"></img>

            </div>
        </div>
    );
}

export default Latte;