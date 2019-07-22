import React from 'react';
import EventCard from './EventCard';
import soccer from './../soccer.png';
import './SlideBar.css';

import { DefaultButton, PrimaryButton, ChoiceGroup, Panel, PanelType, Fabric } from 'office-ui-fabric-react';

var SlideBarWidth = {
    width: '200px',
}

var EventCardStyle = {
    height: '125px',
};



export default class SlideBar extends React.Component {
    constructor(){
        super();

        this._showPanel = () => {
            this.setState({ showPanel: true });
        };
        this._hidePanel = () => {
            this.setState({ showPanel: false });
        };
        this.state={showPanel:false};

    }
    render() {
        return (
        <div className="SlideBar-top">
            <DefaultButton
                className="NavButton"
                iconProps={{ iconName: 'GlobalNavButton' }}
                onClick={this._showPanel}
            />
            <Panel 
                className="SlideBar-main"
                //style ={SlideBarWidth}
                isOpen={this.state.showPanel}
                type={PanelType.smallFixedFar}
                onDismiss={this._hidePanel}
                isLightDismiss={true}
                hasCloseButton={false}
                headerText="Your Events"
                //onRenderFooterContent={this._onRenderFooterContent}
                closeButtonAriaLabel="Close">
                
                <div>
                {this.props.events.map(e=><div style={EventCardStyle}><EventCard title={e.title} eventInfo={e.eventInfo}/></div>)}
                </div>
            </Panel>
        </div>
        );
    }

    /*
    private _onRenderFooterContent = () => {
        return (
        <div>
            <PrimaryButton onClick={this._hidePanel} style={{ marginRight: '8px' }}>
            Save
            </PrimaryButton>
            <DefaultButton onClick={this._showPanel}>Cancel</DefaultButton>
        </div>
        );
    };
    */

    
}