import React from 'react';
import './CookieCheck.css';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { MarqueeSelection } from 'office-ui-fabric-react';

async function func(){
    ParseCookie();
    return "xiaoming";
}

function ParseCookie(){
    var x = document.cookie;
    document.cookie = "username=<xiaoming>";
    console.log(document.cookie);
    if(!x){
        alert("no cookie");
    }
    else alert(x);
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