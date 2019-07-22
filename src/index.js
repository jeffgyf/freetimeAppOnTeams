import * as React from 'react';
import ReactDOM from 'react-dom';
import EventWall from './components/EventWall'
import {initializeIcons} from 'office-ui-fabric-react';
import soccer from './soccer.png';
import './index.css';
import Measure from 'react-measure'

initializeIcons();
const eventInfoSample={
  location:"1 Microsoft Way, Redmond, WA",
  date:"Friday, July 12, 2019",
  time:"5:25pm"
}

const eventList=[...Array(10).keys()].map(i=> ({title:"Test"+i, info:eventInfoSample, img:soccer}));

ReactDOM.render(
 <EventWall events={eventList}/>,
  document.getElementById('root')
);
//  <SlideBar events={eventList}/>
//   <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>
