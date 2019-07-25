import React from 'react';
import './CookieCheck.css';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { MarqueeSelection } from 'office-ui-fabric-react';
import InterestEventPickerState from './InterestEventPicker'

let UserNameSetter;
async function GetUserNameAsync(){
    let username=ParseCookie();
    if(username==null){
        //write new username into cookie here
        let NewUserName = new Promise((resolve, reject)=>{
            UserNameSetter = value=>{
                resolve(value);
            }
        });
        username = await NewUserName;
        document.cookie = `username=<${username}>`;
        document.cookie = "expires=Thu, 18 Dec 2030 12:00:00 UTC"
    }
    CookieCheck.IsUserNameSet=true;
    return username;
}

function ParseCookie(){
    var x = document.cookie;
    console.log(document.cookie);
    var pos = x.indexOf("username=<")
    if(pos < 0){
        return null;
    }
    else{
        //10 is length of "username=<"
        x = x.substring(pos+10);
        x = x.substring(0,x.indexOf(">"));
        if(x=="logged_out"){
            return null;
        }
        return x;
    } 
}

export default class CookieCheck extends React.Component {
    static UserNamePromise = GetUserNameAsync();
    constructor(){
        super();
        this.state={
            IsUserNameSet:false,
        }
        CookieCheck.UserNamePromise.then(()=>this.setState({IsUserNameSet:true}));
    }
    
    render() {
        let Message;
        if (!this.state.IsUserNameSet){
            Message = (
                <div>
                    <InterestEventPickerState GetNewUserName={UserNameSetter}/>
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