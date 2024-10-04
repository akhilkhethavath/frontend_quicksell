import React from "react";
import './App.css';


const Header = (props)=>{
    const clickHander = ()=>{
        props.setIsActive(!props.isActive);
    }
    return(
        <div className="nav">
            <button className="nav-btn" onClick={clickHander} ref={props.refer}>
            <span className="material-symbols-outlined">tune</span>
            <span>Display</span>
            <span className="material-symbols-outlined">expand_more</span>
            </button>
        </div>
    );
}

export default Header;