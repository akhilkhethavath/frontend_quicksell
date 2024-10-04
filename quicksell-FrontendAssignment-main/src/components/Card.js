import React from "react";
import "./App.css"
const Card = (props)=>{
    const info = props.details;
    const currUser = props.userStatus.find((obj) => obj.id === props.details.userId);
    const icon = props.status.find((obj) => obj.type === props.details.status).icon;
    return(
        <div className = "card">
            <div className = "header">
                <div style={{display:"flex",padding:"5px",alignItems:"center"}}><h2>{info.id}</h2></div>
                {props.grouping!=="user"&&<div className = "imge">
                    <div className = "online" style={{backgroundColor:currUser.available?"green":"grey"}}></div>
                    <img src ={currUser.img} alt="user"/>
                </div>   }   
            </div>
            <div className = "content">{props.grouping!=="status"&&<span className="material-symbols-outlined">{icon}</span>}<p>{info.title}</p></div>
            <div className = "footer"> 
                <div className = "tag">
                    <div className="dot"></div>
                    <div className="footer-content">{info.tag}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;