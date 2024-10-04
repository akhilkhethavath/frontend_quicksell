import React, { useEffect } from 'react';
import "./App.css"
const Display = (props)=>{

    useEffect(()=>{
        const Handler = (e)=>{
            if(!props.refer.current.contains(e.target)&&!props.refer1.current.contains(e.target)){
                props.setIsActive(false);
            }
        }
        document.addEventListener("mousedown",Handler);
        return ()=>{
            document.removeEventListener("mousedown",Handler);
        }
    });

    const groupHandler = (e)=>{ 
        props.setGrouping(e.target.value);
    }
    const orderHandler = (e)=>{
        props.setOrdering(e.target.value);
    }
    return (
        <div className="dialog-box-wrap"  ref={props.refer}>
            <div className = "dialog-box">
                <div className="feild">
                    <label htmlFor="grouping">Grouping</label>
                    <select name="grouping" id="group" value={props.grouping} onChange={groupHandler}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="feild">
                    <label htmlFor="ordering">Ordering</label>
                    <select name="order" id="order" value={props.ordering} onChange={orderHandler}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Display;
