import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './components/EventCard'
import {initializeIcons} from 'office-ui-fabric-react';
import soccer from './soccer.png';
import './index.css';
import Measure from 'react-measure'
class EventWall extends React.Component{
  render(){
    const eventRows=((n, a)=>[...Array((a.length+n-1)/n).keys()].map(i=>a.slice(i*n, (i+1)*n)))(3, this.props.events);
    return (
    <div className="EventTable">
      <table>
        {eventRows.map(i=><tr> {i.map(k=><td className="EventEntry"><EventCard title={k.title} eventInfo={k.info} img={soccer}/></td>)}</tr>)}
      </table>
<Measure>
    {({width}) => <div>My width is {width}</div>}
  </Measure>
    </div>);
  }
}


initializeIcons();
const eventInfoSample={
  location:"1 Microsoft Way, Redmond, WA",
  date:"Friday, July 12, 2019",
  time:"5:25pm"
}

const eventList=[...Array(10).keys()].map(i=> ({title:"Test"+i, info:eventInfoSample}));

ReactDOM.render(
 <EventWall events={eventList}/>,
  document.getElementById('root')
);
//   <EventCard title="Sample Event" eventInfo={eventInfoSample} img={soccer}/>
