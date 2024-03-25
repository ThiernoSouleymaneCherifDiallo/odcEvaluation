import React from 'react';


import { useEffect, useState } from 'react';

function Composant1(){
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

export default Composant1