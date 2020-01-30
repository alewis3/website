import React, { Component } from 'react';
import ButtonRow from './ButtonRow';
import './CSS/MyHeader.css';

class MyHeader extends Component {
    render() {
        const HeaderImg = () => (
            <img className="header-img" src={this.props.src} alt="header"/>
        );
        const MyHeader = () => (
            <div id="header">
                <div className="header-wrapper">
                    <HeaderImg/>
                    <div>
                        <h1>Amanda G. Lewis</h1>
                        <p>{this.props.abt}</p>
                    </div>
                    <ButtonRow/>
                </div>
                
            </div>
        )
        return (
            <MyHeader/>
        );
    }
}

export default MyHeader;