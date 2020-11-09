import React from 'react';
import './cube.css'

//THE CUBE HERE IS THE CUBE ANIMATED IN THE WEBSITE

const Cube =()=>{
    return(
        <div id="mainDiv">
    <div id="boxDiv">
        <div id="front"></div>
        <div id="back"></div>
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <div id="bottom"></div>
        
        <div className="shadow"></div>
    </div>
</div>    
    )
}

export default Cube