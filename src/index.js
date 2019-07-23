import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './components/EventCard'
import Profile from './components/Profile'
import {initializeIcons} from 'office-ui-fabric-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class IndexPage extends React.Component{
  constructor(){
    super();
    this.state={cookie:document.cookie};
  }
  render(){
    return (
    <div>
      <a href="/eventPage">{"eventPage"}</a>
      <br/>
      <a href="/profilePage">{"profilePage"}</a>
      <p>{"cookie string: "+ this.state.cookie}</p>
      <button onClick={()=> {
        document.cookie="hello"+(new Date()).getTime();
        this.setState({cookie: document.cookie});
      }}>{"test cookie"}</button>
    </div>);
  }
}

initializeIcons();

//const eventList=[...Array(15).keys()].map(i=>({title:"test"+i, eventInfo:eventInfoSample, img:soccer}));
//const InterestList=["Tag1", "Tag2", "Tag3"]
//<Profile image={user} name={"Mr Mario"} Interest_tag={InterestList} events={eventList} />,
ReactDOM.render(
    <Router>
           <Route path="/" exact component={IndexPage} />
          <Route path="/eventPage" component={EventPage} />
          <Route path="/profilePage" component={EventPage} />
    </Router>,
  document.getElementById('root')
);
//  <SlideBar events={eventList}/>
//   <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>
