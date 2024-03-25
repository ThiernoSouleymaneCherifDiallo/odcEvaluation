import React from 'react';
import { useState, useEffect } from 'react';

function Composant(){
    useEffect(()=>{
        document.title = "Pemier composant"
        console.log("le premier composant est monté")
    })

    return (
        <>
            <div>le premier composant est monté</div>
        </>
    )
}

export default Composant;




