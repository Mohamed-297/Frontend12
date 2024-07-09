import { useEffect, useState } from "react"
import data from"../data.json"
export default function MiniSections(props){
    
    const clName=props.featured? "mini-sec featured":"mini-sec";
    useEffect(()=>{
    },[])
    
    return(
        <div className={clName} >
            
            <div className="img-details">
                <img src={props.logo} alt="logo"/>            
                <div className="details">
                    <div className="aboutComp">
                        {<p className="comp">{props.company}</p>}
                        {props.new&&<p className="new">NEW!</p>}
                        {props.featured&&<p className="featured">FEATURED</p>}
                    </div>
                    {<h3 className="pose">{props.position}</h3>}
                    <div className="aboutJob">
                        {<p>{props.postedAt}</p>}
                        {<p>{props.contract}</p>}
                        {<p>{props.location}</p>}
                    </div>
                </div>
            </div>
            <div className="lang">
                {<p onClick={props.click}>{props.role}</p>}
                {<p onClick={props.click}>{props.level}</p>}
                {props.languages.map((lan)=>{return <p  onClick={props.click}>{lan}</p>})}
                {props.tools.map((tool)=>{return <p  onClick={props.click}>{tool}</p>})}
            </div>
        </div>
        )}
