import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        const Txt = () => (
            <p>&copy; Amanda Lewis <br /> St. Edward's University Class of 2020</p>
        );
        return (
            <div className="footer">
                <Txt/>
            </div>
        );
    }
}

export default Footer;