import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Text,
  DocumentCard,
  DocumentCardPreview,
  initializeIcons, 
  ActionButton,
  TextField, 
  PrimaryButton } from 'office-ui-fabric-react';
import './EventCard.css';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

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


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  
  render() {
    return (
      <div className='LoginPanel'>
        <Logo/>
        <form>
          <TextField placeholder="Username" />
          <TextField type="password" placeholder="Password" />
          <PrimaryButton>Login</PrimaryButton>
        </form>
      </div>
    );
  }
}


// ========================================
const exampleStyles = {
  example: [
    'ms-BasicButtonsExample',
    {
      selectors: {
        '.ms-Button': {
          margin: '10px 0'
        }
      }
    }
  ]
};
