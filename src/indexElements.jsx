import React from "react"
import { Navbar } from './components/navbar/navbar'
import { Body } from './components/body/body'

const IndexElements = () => {

    return (
        <div id="mainContainer">
            <Navbar />
            <Body />
        </div>
    );
};

export { IndexElements };