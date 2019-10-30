import React, { Component } from 'react';
import ButtonRow from './ButtonRow';
import './MyHeader.css';

class MyHeader extends Component {
    render() {
        const HeaderImg = () => (
            <img className="center" src={this.props.src} alt="header"/>
        )
        const MyHeader = () => (
            <div>
                <div className="header-div">
                    <HeaderImg/>
                </div>
                <ButtonRow/>
            </div>
        )
        return (
            <MyHeader/>
        );
    }
}

export default MyHeader;