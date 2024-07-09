import { useEffect, useState } from "react"
import headDesk from "../images/bg-header-desktop.svg"
import headMob from "../images/bg-header-mobile.svg"
import data from "../data.json"
export default function Header(props){
    const [windowSize,setWindowSize]=useState(getWindowSize());
    
    useEffect(()=>{

        function handleWindowSize(){
            setWindowSize(getWindowSize())
        }
    
        window.addEventListener("resize",handleWindowSize)
        return()=>{
            window.removeEventListener("resize",handleWindowSize)
        }
    
    },[])
    function getWindowSize(){
        const innerWidth=window.innerWidth;
        return innerWidth;
    }

    // useEffect(()=>{
    //     const exits=document.querySelectorAll(".item span")
    //     const items=document.querySelectorAll(".item")
    //     exits.forEach((exit) => {
    //         exit.addEventListener("click", (e) => {
    //             const clickedItem = e.currentTarget.closest('.item');
    //             if (clickedItem) {
    //                 clickedItem.classList.add("delete");
    //             }
    //             console.log("done");
    //         });
    //     });
    // },[])
    
    
    
        return(

        <div className="header">
            <img src={ windowSize>370? headDesk: headMob} alt=""/>
            <div className="filter">
                <div className="requirements">
                    
                        {props.dataOfItems}
                        {/* {arrElements} */}
                        
                    {/*<div className="item">
                        <h3></h3>
                        <span></span>
                    </div>
                    <div className="item">
                        <h3></h3>
                        <span></span>
                    </div>
                    <div className="item">
                        <h3></h3>
                        <span></span>
                    </div> */}
                </div>
                <p onClick={props.clear}>Clear</p>
            </div>
        </div>
    )
}