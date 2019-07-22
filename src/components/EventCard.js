import React from 'react';
import { 
  Text,
  DocumentCard,
  DocumentCardPreview,
  ActionButton} from 'office-ui-fabric-react';
import './EventCard.css';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import CreateEventDialog from './CreateEventDialog.tsx';

var logo="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31";




export default class EventCard extends React.PureComponent {
  
  render() {
    const previewProps= {
      previewImages: [
        {
          previewImageSrc: this.props.img,
          imageFit: ImageFit.cover,
          width: 240,
          height: 150
        }
      ]
    };


    return (
      <DocumentCard className="event">
        {this.props.img ? <DocumentCardPreview {...previewProps}/>:null}
        <div className="content">
          <p className="title">{this.props.title}</p>
            <div className="eventInfo">
              <table>
                {Object.keys(this.props.eventInfo).map(i=> <tr><Text>{this.props.eventInfo[i]}</Text></tr>)}
              </table>
            </div>
            <div className="joinButton" hidden={this.props.img==null}>
              <ActionButton data-automation-id="test" iconProps={{ iconName: 'Add' }} >
                Join
              </ActionButton>
            </div>
        </div>
        
        {/*<DocumentCardActivity
          activity="Created a few minutes ago"
          people={[{ name: 'Annie Lindqvist', profileImageSrc: null }]}
        />*/}

        <CreateEventDialog/>
      </DocumentCard>
    );
  }
}

class Logo extends React.Component {
  render() {
    return <div className="logo">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Logo"/>
              </div>
  }
}
