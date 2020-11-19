import React, { Component } from 'react';
import './CSS/ButtonRow.css';
import Button from './Button';

import pdf from './../../Resume.pdf';

class ButtonRow extends Component {
    render() {
        const ButtonRow = () => (
            <div className="button-row">
                <Button buttonClass="button" value="Resume" href={pdf} text="RESUME"/>
                <Button buttonClass="button" value="Github" href="https://github.com/alewis3" text="GITHUB"/>
                <Button buttonClass="button" value="Linkedin" href="https://www.linkedin.com/in/amanda-lewis-mfp/" text="LINKEDIN"/>
            </div>
        )
        return (
            <ButtonRow/>
        );
    }
}

export default ButtonRow;