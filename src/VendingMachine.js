import React from "react";
import {Link} from "react-router-dom"
import "./VendingMachine.css"

function VendingMachine() {
    return(
        <div className="VendingMachine">
            <div className="VendingMachine-header">
                <h1>Hello</h1>
                <h2>Select your beverage from the vending machine!</h2>

            </div>

            <div className="VendingMachine-items">
                <h3><Link to="water">Water</Link></h3>
                <h3><Link to="greentea">Green Tea</Link></h3>
                <h3><Link to="latte">Latte</Link></h3>

            </div>
        </div>
    )
}

export default VendingMachine;