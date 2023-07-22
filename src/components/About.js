import React from "react";

function About ({image = "logo", about}) {
    return (
    <aside>
        <img src= {image} alt = "Here is an image"/>
        <p>{about}</p>
    </aside>
    )
}

export default About