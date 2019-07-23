import * as React from 'react';
import ReactDOM from 'react-dom';
import EventPage from './components/EventPage'
import {initializeIcons} from 'office-ui-fabric-react';

import './index.css';


initializeIcons();
ReactDOM.render(
 <EventPage/>,
  document.getElementById('root')
);
//  <SlideBar events={eventList}/>
//   <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>
