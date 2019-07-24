import * as React from 'react';
import ReactDOM from 'react-dom';
import EventWall from './EventWall'
import SlideBar from './SlideBar'
import './EventPage.css';
import soccer from '../soccer.png';
import CreateEventDialog from './CreateEventDialog';
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const eventInfoSample={
  location:"1 Microsoft Way, Redmond, WA",
  date:"Friday, July 12, 2019",
  time:"5:25pm"
}
export default class EventPage extends React.Component {
    constructor(){
      super();
      this.state={
        eventWallEventList:[],
        SlideBarEventList:[]
      };
      this.getEventsToJoinAsync().then(d=>this.setState({eventWallEventList:d}));
      this.getEventsJoinedAsync().then(d=>this.setState({SlideBarEventList:d}));

    }
    
    render() {
        return (
        <div className="EventPage">
            <EventWall events={this.state.eventWallEventList}/>
            <SlideBar events={this.state.SlideBarEventList}/>
            <CreateEventDialog />
        </div>
      );
    }

    async getEventsToJoinAsync(){
      await sleep(1000);
      const eventList=[...Array(10).keys()].map(i=> ({title:"Test"+i, eventInfo:eventInfoSample, img:soccer}));
      return eventList;
    }

    async getEventsJoinedAsync(){
      await sleep(1400);
      const eventList=[...Array(10).keys()].map(i=> ({title:"Test"+i, eventInfo:eventInfoSample, img:soccer}));
      return eventList;
    }
  }
