import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './components/EventCard'
import {initializeIcons} from 'office-ui-fabric-react';
import soccer from './soccer.png';

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

ReactDOM.render(
  <div>
    <SlideBar events={eventList}/>
  </div>,
  document.getElementById('root')
)

