import React from 'react';
import './CookieCheck.css';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { MarqueeSelection } from 'office-ui-fabric-react';
import InterestEventPickerState from './InterestEventPicker'

var IsDone = false
var NewUserName = ""

async function func(){
    return ParseCookie();
}

function ParseCookie(){
    var x = document.cookie;
    alert(x)
    document.cookie = "username=<xiaoming>";
    console.log(document.cookie);
    var pos = x.indexOf("username=<")
    if(pos < 0){
        /*
        alert("no cookie");
        alert(IsDone);
        await IsDone==true;
        alert(IsDone);
        alert(NewUserName);
        */
        return NewUserName;
    }
    else{
        //10 is length of "username=<"
        x = x.substring(pos+10);
        x = x.substring(0,x.indexOf(">"));
        IsDone = false;
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
        let Message;
        if (!IsDone){
            Message = (
                <div>
                    <InterestEventPickerState GetNewUserName={NewUserName}/>
                </div>
            )
            //IsDone = true;
        }
        return (
            <div>
                {Message}
            </div>
        )
    }
}