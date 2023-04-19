import React from "react";
import web from "../src/images/img2.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About=()=>{
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    );
};
export default About;