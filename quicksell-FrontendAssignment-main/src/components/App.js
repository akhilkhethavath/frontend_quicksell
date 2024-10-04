import React, { useEffect, useState,useRef } from "react";
import "./App.css"
import Header from './Header'
import Display from "./Display";
import CardList from "./CardList";
import { types, userid, priorities, userNames, prioritiestext } from "../constants";
import api from "../api/index"

function App() {
  const refbtn = useRef();
  const refdbox = useRef();

  const LOCAL_STORAGE_KEY = "initial_state";
  const [tickets, setTickets] = useState([]);
  const [users,setUsers] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [grouping, setGrouping] = useState("");
  const [ordering, setOrdering] = useState("");
  const [cardLists, setCardLists] = useState([]);
  const [titleList, setTitleList] = useState([]);
  const [countList, setCountList] = useState([]);
  const [userAvailability, setUserAvailability] = useState([]);
  
  const retrieveData = async ()=>{
      const response = await api.get();
      return response.data;
  }

  const displaySettingHandler = () => {
    const list = [];
    const filterList = grouping === "status" ? types :
      grouping === "user" ? userNames :
      grouping === "priority" ? prioritiestext : [];
    for (let i = 0; i < 5; i++) {
      list.push(tickets.filter((ticket) => {
        if (grouping === "status") return ticket.status === types[i].type;
        if (grouping === "user") return ticket.userId === userid[i];
        if (grouping === "priority") return ticket.priority === priorities[i];
        return false;
      }));
    }
    if (ordering === "title") {
      list.forEach(subList => subList.sort((a, b) => a.title.localeCompare(b.title)));
    } else if (ordering === "priority") {
      list.forEach(subList => subList.sort((a, b) => b.priority - a.priority));
    }
    const countList = list.map(subList => subList.length);
    const userAvailability = users.map((user,index)=> {
      const userState = {id:user.id,available:user.available,img:userNames[index].icon};
      return userState;
    });
    setCardLists(list);
    setTitleList(filterList);
    setCountList(countList);
    setUserAvailability(userAvailability);
  }

  useEffect(() => {
    const getData = async ()=>{
        const data = await retrieveData();
        if(data) {
            setTickets(data.tickets);
            setUsers(data.users)
        }
        const getIntialState = () => {
          const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
          if (data) {
            setGrouping(data.group);
            setOrdering(data.order);
          } else {
            setGrouping("status");
            setOrdering("priority");
          }
        }
        getIntialState();
    }
    getData();
    displaySettingHandler();
  }, []);

  useEffect(() => {
    displaySettingHandler();
    if (grouping !== "" && ordering !== "")
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ group: grouping, order: ordering }));
  }, [grouping, ordering]);

  return (
    <div>
      <Header isActive={isActive} setIsActive={setIsActive} refer={refbtn}/>
      {isActive && <Display setIsActive={setIsActive} grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} refer={refdbox} refer1={refbtn}/>}
      <div className="main-div">
        {titleList.map((title, index) => (
          <CardList key={index} keyy={index} title={title} list={cardLists[index]} count={countList[index]} userAvailability={userAvailability} status={types} grouping={grouping}/>
        ))}
      </div>
    </div>
  );
}

export default App;
