import React from "react";
import Card from "./Card";
import "./App.css"
const CardList = (props)=>{

    const title = props.title;
    const count = props.count;
    const renderedList = props.list.map((details)=>{
        return <Card details={details} userStatus={props.userAvailability} grouping = {props.grouping} status= {props.status} userNames={props.userNames} key={details.id}/>
    });

    return(
        <div className="test">
        <div className="head-tag">
            <div className="head-tag-left">
                {props.grouping!=="user"?<span className="material-symbols-outlined" >
                {title.icon}
                </span>:<div className = "imge">
                    <div className = "online" style={{marginTop:"-10px",backgroundColor:props.userAvailability[props.keyy].available?"green":"grey"}}></div>
                    <img src ={title.icon} alt="user"/>
                </div>}
                <span style={{color:"black",fontSize:"12px",margin:"4px"}}>{title.type} <span>{count}</span></span>
            </div>
            <div>
                <span className="material-symbols-outlined">
                add
                </span><span className="material-symbols-outlined">
                more_horiz
                </span>
            </div>
        </div>  
        {renderedList}
    </div>
    );
}


export default CardList;