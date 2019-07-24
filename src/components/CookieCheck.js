import React from 'react';
import './CookieCheck.css';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { MarqueeSelection } from 'office-ui-fabric-react';
import InterestEventPickerState from './InterestEventPicker'

async function func(){
    return ParseCookie();
}

function ParseCookie(){
    var x = document.cookie;
    document.cookie = "username=<xiaoming>";
    console.log(document.cookie);
    if(!x){
        alert("no cookie");
    }
    else{
        var pos = x.indexOf("username=<");
        //10 is length of "username=<"
        x = x.substring(pos+10);
        x = x.substring(0,x.indexOf(">"));
        return x;
    } 
}

export default class CookieCheck extends React.Component {
    constructor(){
        super();

        this.state={
            Is_cookie:false,
        }
    }
    static UserName = func();
    render() {
        return (
            <div>
                <InterestEventPickerState/>
            </div>
        )
    }

    _closeDialog = () => {
        this.setState({ hideDialog: true });
    };
}