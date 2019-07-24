import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './components/EventCard'
import EventPage from './components/EventPage'
import ProfilePage from './components/ProfilePage'
import {initializeIcons} from 'office-ui-fabric-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InterestEventPicker from './components/InterestEventPicker'
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
<<<<<<< HEAD
      <a href="/profilePage">{"profilePage"}</a>
      <br/>
      <a href="/signOn">{"signOn"}</a>
=======
      <a href="/profilePage">{"ProfilePage"}</a>
>>>>>>> master
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
<<<<<<< HEAD
          <Route path="/profilePage" component={EventPage} />
          <Route path="/signOn" component={InterestEventPicker} />
=======
          <Route path="/profilePage" component={ProfilePage} />
>>>>>>> master
    </Router>,
  document.getElementById('root')
);
//  <SlideBar events={eventList}/>
//   <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>
