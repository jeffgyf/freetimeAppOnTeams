import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './components/EventCard'
import EventPage from './components/EventPage'
import ProfilePage from './components/ProfilePage'
import {initializeIcons} from 'office-ui-fabric-react';
import { BrowserRouter as Router, Route, Link, HashRouter, withRouter  } from "react-router-dom";
import InterestEventPicker from './components/InterestEventPicker'
import $ from 'jquery';
class IndexPage extends React.Component{
  constructor(){
    super();
    this.state={cookie:document.cookie};
  }
  render(){
    return (
    <div>
      <a href="?route=eventPage">{"eventPage"}</a>
      <br/>
      <a href="?route=profilePage">{"ProfilePage"}</a>
      <p>{"cookie string: "+ this.state.cookie}</p>
      <button onClick={()=> {
        document.cookie="hello"+(new Date()).getTime();
        this.setState({cookie: document.cookie});
      }}>{"test cookie"}</button>
    </div>);
  }
}
function getUrlParam(name){
	var result = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return result==null?"home":result[1];
};
initializeIcons();
console.log($.urlParms);
let routeDict={
  "eventPage":<EventPage/>,
  "home":<IndexPage/>,
  "profilePage":<ProfilePage/>
}
//const eventList=[...Array(15).keys()].map(i=>({title:"test"+i, eventInfo:eventInfoSample, img:soccer}));
//const InterestList=["Tag1", "Tag2", "Tag3"]
//<Profile image={user} name={"Mr Mario"} Interest_tag={InterestList} events={eventList} />,
ReactDOM.render(
  routeDict[getUrlParam("route")],
  document.getElementById('root')
);
//  <SlideBar events={eventList}/>
//   <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>
