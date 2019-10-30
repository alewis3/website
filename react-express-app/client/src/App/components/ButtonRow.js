import React, { Component } from 'react';
import './ButtonRow.css';
import Button from './Button';

import pdf from './../../Resume.pdf';

class ButtonRow extends Component {
    render() {
        const ButtonRow = () => (
            <div className="button-row">
                <Button buttonClass="button button1" value="Resume" href={pdf} text="RESUME"/>
                <Button buttonClass="button button2" value="Github" href="https://github.com/alewis3" text="GITHUB"/>
                <Button buttonClass="button button3" value="Linkedin" href="https://www.linkedin.com/in/amanda-lewis-seu/" text="LINKEDIN"/>
            </div>
        )
        return (
            <ButtonRow/>
        );
    }
}

export default ButtonRow;