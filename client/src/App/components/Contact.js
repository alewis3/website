import React, { Component } from 'react';
import './CSS/Contact.css';
import ContactInfo from "./ContactInfo";

class Contact extends Component {
    render() {
        return (
            <div id={"Contact"}>
                <h2>Contact:</h2>
                <ContactInfo alt={"phone"} src={"/phone_icon.png"} text={"(626)-434-6340"}/>
                <ContactInfo alt={"email"} src={"/email_icon.png"} text={"amandalewis2044@gmail.com"}/>
                <div className={"Links"}>
                    <a className="ContactLink" href='https://github.com/alewis3'><img className={"ContactLinkImg"} alt="AL Github" src='/github_icon.png'/></a>
                    <a className="ContactLink" href='https://www.linkedin.com/in/amanda-lewis-seu/'><img className={"ContactLinkImg"} alt="AL LinkedIn" src='/linkedin_icon.png'/></a>
                    <a className="ContactLink" href='https://amandalewisdev.com'><img className={"ContactLinkImg"} alt="AL Website" src='/header.png'/></a>
                </div>
            </div>
        )
    }
}

export default Contact;