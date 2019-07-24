import * as React from 'react';
import ReactDOM from 'react-dom';
import EventPage from './components/EventPage'
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
      <a href="/profilePage">{"profilePage"}</a>
      <br/>
      <a href="/signOn">{"signOn"}</a>
      <p>{"cookie string: "+ this.state.cookie}</p>
      <button onClick={()=> {
        document.cookie="hello"+(new Date()).getTime();
        this.setState({cookie: document.cookie});
      }}>{"test cookie"}</button>
    </div>);
  }
}

initializeIcons();
ReactDOM.render(
    <Router>
          <Route path="/" exact component={IndexPage} />
          <Route path="/eventPage" component={EventPage} />
          <Route path="/profilePage" component={EventPage} />
          <Route path="/signOn" component={InterestEventPicker} />
    </Router>,
  document.getElementById('root')
);
//  <SlideBar events={eventList}/>
//   <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>
