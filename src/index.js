import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './components/EventCard'
import Profile from './components/Profile'
import {initializeIcons} from 'office-ui-fabric-react';
import soccer from './soccer.png';
import user from './user.jpg';

import SlideBar from './components/SlideBar';

initializeIcons();
const eventInfoSample={
  location:"1 Microsoft Way, Redmond, WA",
  date:"Friday, July 12, 2019",
  time:"5:25pm"
}

/*
ReactDOM.render(
    <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>,
  document.getElementById('root')
);
*/
const eventList=[...Array(5).keys()].map(i=>({title:"test"+i, eventInfo:eventInfoSample}));
const InterestList=["Tag1", "Tag2", "Tag3"]

ReactDOM.render(
  <div>
    <Profile image={user} name={"Wenynag Chao"} Interest_tag={InterestList}/>
  </div>,
  document.getElementById('root')
)

