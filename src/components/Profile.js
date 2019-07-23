import React from 'react';
import InterestEventPickerState from './InterestEventPicker'
import './Profile.css';



export default class Profile extends React.Component {
    constructor(){
        super();
        this.seed = 1;
        this.random = () => {
            var x = Math.sin(this.seed++) * 10000;
            return x - Math.floor(x);
        }
        this.generateColor = () =>{
            return '#' +  this.random().toString(16).substr(-6);
        }
    }
    render() {
        return (
            <div className="profile_main">
                <div className="profile_inner">
                    <img className="user_image" src={this.props.image}/>
                    <div className="user_info">
                        <h1 className="user_name">{this.props.name}</h1>
                        <div className="blank"></div>
                        <h2 className="interest_tag_name">Interest Tag:</h2>
                        <div className="interest_tag_main">
                            <div className="item">
                                <div className="tag_text" style={{background:this.generateColor()}}>#Sport</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Movie</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Friday Night</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Video Game</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Racing</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Pro Club</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Gym</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Pub</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Poker</div>
                                <div className="tag_text" style={{background:this.generateColor()}}>#Dinner</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
