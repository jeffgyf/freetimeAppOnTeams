import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './EventCard'
import './EventWall.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
export default class EventWall extends React.Component{
  render(){
    const colNum=3;
    const eventRows=((n, a)=>[...Array(Math.floor((a.length+n-1)/n)).keys()].map(i=>a.slice(i*n, (i+1)*n)))(colNum, this.props.events);
    console.log(eventRows);
    return (
     
        <div className="EventWall"> 
        <SimpleBar className="SimpleBar" style={{ width: colNum*EventCard.Width+60+'px' }}>
          <table>
            {eventRows.map(i=><tr> {i.map(k=>
              <td className="EventEntry">
                  <EventCard 
                    title={k.title} 
                    eventInfo={k.eventInfo} 
                    img={k.img} 
                    interests={k.interests} 
                    eventId={k.eventId} 
                    refreshJoinedHandler={this.props.refreshJoinedHandler}/>
              </td>)}</tr>)}
          </table>
        </SimpleBar>
{/*<Measure>
    {({width}) => <div>My width is {width}</div>}
</Measure>*/}
      </div>
    );
  }
}
