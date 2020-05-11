import React, { Component } from 'react';

import './CSS/Footer.css';

class Footer extends Component {
    render() {
        const Txt = () => (
            <p>&copy; Amanda Lewis <br /> St. Edward's University Computer Science Class of 2020 <br /></p>
        );
        return (
            <div className="footer">
                <Txt/>
            </div>
        );
    }
}

export default Footer;