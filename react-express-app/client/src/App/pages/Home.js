import React, { Component } from 'react';

import Header from '../components/MyHeader';
import Bio from './../components/Bio';
import ProjectSection from './../components/ProjectSection';
import Table from './../components/Table'; 
import Contact from './../components/Contact';
import Footer from './../components/Footer';

class Home extends Component {
  render() {
    const bio = "Amanda Lewis is a Senior Computer Science major at St. Edward's University who is interested in developing complex systems and learning more about backend frameworks like python and express apps written in node. She currently has a 3.78 GPA and will graduate in May 2020.";
    return (
    <div className="App">
      <Header src={"/header.png"}/>
      <Bio text={bio} src={"/linkedin.jpg"} alt="Amanda Lewis"/>
      <ProjectSection/>
      <Table/>
      <Contact/>
      <Footer/>
    </div>
    );
  }
}
export default Home;
