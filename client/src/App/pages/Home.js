import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import './Home.css';
import Header from '../components/MyHeader';
import Bio from './../components/Bio';
import ProjectSection from './../components/ProjectSection';
import Table from './../components/Table'; 
import Footer from './../components/Footer';
import Nav from './../components/Nav';
import Awards from './../components/Awards';
import MadLibs from './../components/MadLibs';

class Home extends Component {
  render() {
    const bio = "My name is Amanda, and I recently graduated from St. Edward's University with a degree in computer science and a minor in mathematics. I am interested in developing and maintaining complex systems and learning more about backend frameworks like Python and Express apps written in Node.js. I am also experimenting with frontend javascript frameworks like Vue with Nuxt. In my off time I love to take my dog, Dana, on long walks by Lake Austin or to the dog park. I also enjoy playing guitar and learning new songs; Arctic Monkeys songs are my favorite to learn!"
    return (
    <div className="App">
      <Nav/>
      <div className="content">
      <Header src="/header.png" abt="SOFTWARE ENGINEER (UNDER ARMOUR)"/>
      <Bio text={bio} srcme="/Grad.jpg" altme="Amanda Lewis Graduate Photo" srcdana="/dana.png" altdana="dana"/>
      <ProjectSection/>
      <Awards/>
      {/*<Table/>*/}
      <MadLibs/>
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
