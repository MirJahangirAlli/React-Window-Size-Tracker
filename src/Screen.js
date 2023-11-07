import React, { useEffect, useState } from "react";

const Screen=()=>{

    // This useState is use for hide and show text field 
    const[show,setShow]=useState(true);
    const toShow=()=>{
        setShow(!show);
    }

    // This useState is use for change the button name when clicking 
    const[change,setChange]=useState("Show Screen Size");

    //This useState is use for show screen size
    const[size,setSize]=useState(window.screen.width);

    //When i resize the window then size is decrease/increase
    useEffect(()=>{
        window.addEventListener("resize",currentSize);

        //This return is use for cleanup storage 
        return ()=>{
            window.removeEventListener("resize",currentSize);
        }
    });
    const currentSize=()=>{
        setSize(()=>window.innerWidth);
    };
    const tochange=()=>{
        setChange(change==="Show Screen Size"?"Hide Screen Size":"Show Screen Size");
    }
    return(
        <>
            
            {show || <h1>The Size Of Window is  <span>{size}</span></h1>}
            <button onClick={() => {
                        toShow();
                        tochange();
                        }}>{change}</button>
        </>
    )
}
export default Screen;