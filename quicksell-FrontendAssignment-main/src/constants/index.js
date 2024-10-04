
import user1 from '../images/1.jpg';
import user2 from '../images/2.jpg';
import user3 from '../images/3.jpg';
import user4 from '../images/4.jpg';
import user5 from '../images/5.jpg';

const types = [{type:"Backlog",icon:"rotate_left"},{type:"Todo",icon:"circle"},{type:"In progress",icon:"clock_loader_40"},{type:"Done",icon:"check_circle"},{type:"Canceled",icon:"cancel"}];
const userid = ["usr-1","usr-2","usr-3","usr-4","usr-5"];
const userNames = [{type:"Anoop sharma",icon:user1},{type:"Yogesh",icon:user2},{type:"Shankar Kumar",icon:user3},{type:"Ramesh",icon:user4},{type:"Suresh",icon:user5}];
const priorities = [0,4,3,2,1];
const prioritiestext = [{type:"No priority",icon:"more_horiz"},{type:"Urgent",icon:"crisis_alert"},{type:" High",icon:"priority_high"},{type: "Medium",icon:"priority"} ,{type:"Low",icon:"low_priority"}];

export {types,userid,userNames,priorities,prioritiestext};