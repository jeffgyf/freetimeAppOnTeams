import * as React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './components/EventCard'
import {initializeIcons} from 'office-ui-fabric-react';
import soccer from './soccer.png';
import CreateEventDialog from './components/CreateEventDialog';

initializeIcons();
const eventInfoSample={
  location:"1 Microsoft Way, Redmond, WA",
  date:"Friday, July 12, 2019",
  time:"5:25pm"
}

ReactDOM.render(
    <CreateEventDialog />,
    document.getElementById('root')
);

