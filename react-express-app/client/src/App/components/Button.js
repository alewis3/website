import React, { Component } from 'react';
import './Button.css';
// import {Link} from 'react-router-dom';

class Button extends Component {

    render() {
        const Button = () => (
            // <Link to={this.props.href}>
                <a href={this.props.href} target="_blank" rel="noopener noreferrer" className={this.props.buttonClass}>{this.props.text}</a>
            /* </Link> */
        )
        return <Button/>;
    }
}

export default Button;