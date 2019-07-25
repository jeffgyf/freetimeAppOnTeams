import React from 'react';
import InterestEventPickerState from './InterestEventPicker'
import EventWall from './EventWall'
import './ProfilePage.css';
import soccer from '../soccer.png';
import user_image from '../user2.jpg';
import CookieCheck from './CookieCheck'
import config from '../config';
var $ = require("jquery");

//import { element } from 'prop-types';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const eventInfoSample={
    location:"1 Microsoft Way, Redmond, WA",
    date:"Friday, July 12, 2019",
    time:"5:25pm"
}

export default class Profile extends React.Component {
    constructor(){
        super();
        
        this.seed = 1;
        this.random = () => {
            var x = Math.sin(this.seed++) * 10000;
            return x - Math.floor(x);
        }
        this.state={
            ProfileDict:{
                UserName:"",
                interests:[],
                eventList:[]
            }
        }
        this.generateColor = () =>{
            return '#' +  this.random().toString(16).substr(-6);
        }
        this.getUserProfile().then(d=>this.setState({ProfileDict:d}));

    }

    async getUserProfile(){

        try{
            let UserName = await CookieCheck.UserNamePromise;
            //https://freetimehttpstest.westus2.azurecontainer.io/getuserprofile?username=
            let parsedUserProfile=await $.get(config.BackEndAPIUrl+"/getuserprofile?username=" + UserName);
            console.log(parsedUserProfile);
            let eventList=parsedUserProfile.Events==null?[]:parsedUserProfile.Events.map(ff=>({
              title: ff.Name,
              eventInfo:{
                location: ff.Location, 
                time: ff.StartTime,
              },
              img: soccer
            }));
            var dict = {
                UserName:UserName,
                eventList:eventList,
                interests:parsedUserProfile.Interests
            }
            return dict;
          }
        catch(error){
            alert("Failed to get user profile");
            console.log(error);
            return {
                UserName:"",
                interests:[],
                eventList:[]
            };
        }
    }

    CreateInterestList(interests){
        let list = [];
        for(let i=0; i<interests.length; i++){
            list.push(<div className="tag_text" style={{background:this.generateColor()}}>{interests[i]}</div>)
        }
        return list;
    }

    render() {
        return (
            <body className="profile_main">
                <CookieCheck/>
                <div className="profile_inner">
                    <img className="user_image" src={user_image}/>
                    <div className="user_info">
                        <h1 className="user_name">{this.state.ProfileDict.UserName}</h1>
                        <h2 className="interest_tag_name">Interest Tag:</h2>
                        <div className="interest_tag_main">
                            <div className="item">
                                {this.CreateInterestList(this.state.ProfileDict.interests)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_bottom">
                    <h1 className = "Events_title">
                    ✤ Created Events ✤
                    </h1>
                    <div className="profile_bottom_inner">
                        <EventWall events={this.state.ProfileDict.eventList} />
                    </div>
                </div>
            </body>
        )
    }
}
