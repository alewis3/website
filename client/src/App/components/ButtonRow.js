import React, { Component } from 'react';
import './CSS/ButtonRow.css';
import Button from './Button';

import pdf from './../../Resume.pdf';

class ButtonRow extends Component {
    render() {
        const ButtonRow = () => (
            <div className="button-row">
                <Button buttonClass="button" value="Resume PDF" href={pdf} text="RESUME (PDF)"/>
                <Button buttonClass="button" value="Resume Webpage" href={"/resume"} text="RESUME (WEBPAGE)"/>
                <Button buttonClass="button" value="Github" href="https://github.com/alewis3" text="GITHUB"/>
                <Button buttonClass="button" value="Linkedin" href="https://www.linkedin.com/in/amanda-lewis-seu/" text="LINKEDIN"/>
            </div>
        )
        return (
            <ButtonRow/>
        );
    }
}

export default ButtonRow;