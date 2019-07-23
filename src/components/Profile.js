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
                            <table className="item">
                                <tr>
                                <td className="tag_text"> Sports 1</td>
                                <td className="tag_text"> Video Game fgdfgdf1</td>
                                </tr>
                                <tr>
                                <td className="tag_text"> Sports </td>
                                <td className="tag_text"> Video Game </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
