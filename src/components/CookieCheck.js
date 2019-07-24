import React from 'react';
import './CookieCheck.css';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { MarqueeSelection } from 'office-ui-fabric-react';

async function func(){
    return "xiaoming";
}

export default class CookieCheck extends React.Component {
    constructor(){
        super();

        this.state={
            Is_cookie:true,
        }
    }
    static UserName = func();
    render() {
        return (
            <div>
            <Dialog className="DialogBox"
            hidden={this.state.Is_cookie}
            />
            </div>
        )
    }

}