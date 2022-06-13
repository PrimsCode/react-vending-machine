import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

import VendingMachine from "./VendingMachine";
import Water from "./Water";
import GreenTea from "./GreenTea";
import Latte from "./Latte";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}/>
          <Route path="water" element={<Water />} />
          <Route path="greentea" element={<GreenTea />} />
          <Route path="latte" element={<Latte />} />
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;