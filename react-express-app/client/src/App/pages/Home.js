import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import './Home.css';
import Header from '../components/MyHeader';
import Bio from './../components/Bio';
import ProjectSection from './../components/ProjectSection';
import Table from './../components/Table'; 
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import Nav from './../components/Nav';

class Home extends Component {
  render() {
    const bio = "I am a Senior Computer Science major at St. Edward's University and I am interested in developing complex systems and learning more about backend frameworks like Python and Express apps written in Node.js. I currently have a 3.78 GPA and will graduate in May 2020 with a degree in Computer Science and a minor in Mathematics. In my off time I love to take my dog, Dana, on long walks by the Colorado River or to the dog park.";
    return (
    <div className="App">
      <Nav/>
      <div className="content">
      <Header src="/header.png"/>
      <Bio text={bio} srcme="/linkedin.jpg" altme="Amanda Lewis" srcdana="/dana.png" altdana="dana"/>
      <ProjectSection/>
      <Table/>
      <Contact/>
      <Footer/>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
        style={{"backgroundColor": "#6F3524", "bottom": "60px"}}
        ToggledStyle={{}}
      />
      </div>
    </div>
    );
  }
}
export default Home;
