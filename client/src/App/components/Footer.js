import React, { Component } from 'react';

import './CSS/Footer.css';

class Footer extends Component {
    render() {
        const Txt = () => (
            <p>&copy; Amanda Lewis <br /> St. Edward's University Computer Science Class of 2020 <br /> <a href="mailto:amandalewis2044@gmail.com?subject=A%20question%20about%20your%20website&body=Dear%20Amanda,">Email me!</a></p>
        );
        return (
            <div className="footer">
                <Txt/>
            </div>
        );
    }
}

export default Footer;