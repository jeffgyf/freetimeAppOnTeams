import React from 'react';
import './Profile.css';


export default class Profile extends React.Component {
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
                                <div className="tag_text"> Sports </div>
                                <div className="tag_text"> Video Game </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
