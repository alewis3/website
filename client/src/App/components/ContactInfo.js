import React, { Component } from 'react';
import './CSS/ContactInfo.css';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contactInfo">
                <img className="contactIcon" alt={this.props.alt} src={this.props.src}/>
                <p className="contactText">{this.props.text}</p>
            </div>
        )
    }
}

export default ContactInfo;