import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './EventCard'
import './EventWall.css';
import Measure from 'react-measure'
export default class EventWall extends React.Component{
  render(){
    const eventRows=((n, a)=>[...Array(Math.floor((a.length+n-1)/n)).keys()].map(i=>a.slice(i*n, (i+1)*n)))(4, this.props.events);
    console.log(eventRows);
    return (
    <div className="EventTable">
      <table>
        {eventRows.map(i=><tr> {i.map(k=><td className="EventEntry"><EventCard title={k.title} eventInfo={k.info} img={k.img}/></td>)}</tr>)}
      </table>
{/*<Measure>
    {({width}) => <div>My width is {width}</div>}
</Measure>*/}
    </div>);
  }
}
