import * as React from 'react';
import ReactDOM from 'react-dom';
import EventWall from './EventWall'
import SlideBar from './SlideBar'
import './EventPage.css';
import soccer from '../soccer.png';
import CreateEventDialog from './CreateEventDialog';


export default class EventPage extends React.Component {
    
    render() {
      
        const eventInfoSample={
            location:"1 Microsoft Way, Redmond, WA",
            date:"Friday, July 12, 2019",
            time:"5:25pm"
          }
        const eventList=[...Array(10).keys()].map(i=> ({title:"Test"+i, eventInfo:eventInfoSample, img:soccer}));
        return (
        <div className="EventPage">
            <EventWall events={eventList}/>
            <SlideBar events={eventList}/>
            <CreateEventDialog />
        </div>
      );
    }
  }
