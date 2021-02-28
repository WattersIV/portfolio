import React from 'react';
import './App.css';
import NavBar from './componets/NavBar'
import LandingPage   from './componets/LandingPage'
import AboutMe from './componets/AboutMe'
import WorkExperience from './componets/WorkExperience'
import Projects from './componets/Projects'
import Contact from './componets/Contact'

function App() {
  return (
    <div id='pageWrapper' >
      <NavBar />
      <LandingPage />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
